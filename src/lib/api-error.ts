import { isAxiosError } from "axios"

export class ApiError extends Error {
  status: number | null
  fieldErrors?: Record<string, string>
  code?: string

  constructor(
    message: string,
    status: number | null,
    fieldErrors?: Record<string, string>,
    code?: string,
  ) {
    super(message)
    this.name = "ApiError"
    this.status = status
    this.fieldErrors = fieldErrors
    this.code = code
  }
}

type ErrorBody = {
  message?: string
  code?: string
  errors?: Record<string, string | string[]>
}

export function normalizeError(error: unknown): ApiError {
  if (error instanceof ApiError) return error
  if (isAxiosError<ErrorBody>(error)) {
    if (!error.response) return new ApiError("Tidak dapat terhubung ke server", null)
    const { status, data } = error.response
    const fieldErrors = data?.errors
      ? Object.fromEntries(
          Object.entries(data.errors).map(([k, v]) => [
            k,
            Array.isArray(v) ? String(v[0]) : String(v),
          ]),
        )
      : undefined
    return new ApiError(data?.message ?? defaultMessage(status), status, fieldErrors, data?.code)
  }
  return new ApiError("Terjadi kesalahan, coba lagi", null)
}

function defaultMessage(status: number) {
  if (status === 403) return "Kamu tidak punya akses"
  if (status === 404) return "Data tidak ditemukan"
  if (status >= 500) return "Server sedang bermasalah, coba lagi nanti"
  return "Terjadi kesalahan, coba lagi"
}

export const getErrorMessage = (e: unknown) => normalizeError(e).message
export const getFieldErrors = (e: unknown) => normalizeError(e).fieldErrors
