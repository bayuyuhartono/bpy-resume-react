import { create } from "zustand"
import { persist } from "zustand/middleware"

type AuthState = {
  accessToken: string | null
  refreshToken: string | null
  setTokens: (t: { accessToken: string; refreshToken: string }) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      setTokens: (t) => set(t),
      logout: () => set({ accessToken: null, refreshToken: null }),
    }),
    { name: "auth" },
  ),
)
