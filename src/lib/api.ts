import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios"
import { env } from "@/lib/env"
import { useAuthStore } from "@/stores/use-auth-store"

export const api = axios.create({ baseURL: env.VITE_API_URL, timeout: 15_000 })

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Refresh token: satu refresh untuk banyak request yang gagal bersamaan
let refreshPromise: Promise<string> | null = null

type RefreshResponse = { accessToken: string; refreshToken: string }

async function refreshAccessToken(): Promise<string> {
  const { refreshToken, setTokens, logout } = useAuthStore.getState()
  if (!refreshToken) throw new Error("No refresh token")
  try {
    // Pakai axios biasa (bukan `api`) supaya tidak loop. Sesuaikan path & bentuk respons dengan backend.
    const { data } = await axios.post<RefreshResponse>(`${env.VITE_API_URL}/auth/refresh`, {
      refreshToken,
    })
    setTokens(data)
    return data.accessToken
  } catch (e) {
    logout()
    throw e
  }
}

api.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const original = error.config as (InternalAxiosRequestConfig & { _retry?: boolean }) | undefined
    if (error.response?.status === 401 && original && !original._retry) {
      original._retry = true
      refreshPromise ??= refreshAccessToken().finally(() => {
        refreshPromise = null
      })
      const token = await refreshPromise
      original.headers.Authorization = `Bearer ${token}`
      return api(original)
    }
    return Promise.reject(error)
  },
)
