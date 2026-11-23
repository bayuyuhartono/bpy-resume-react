import { QueryCache, QueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { normalizeError } from "@/lib/api-error"

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      // Toast hanya untuk refetch background yang gagal; load pertama ditangani UI error state
      if (query.state.data !== undefined) toast.error(normalizeError(error).message)
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      retry: (count, error) => {
        const status = normalizeError(error).status
        if (status && status >= 400 && status < 500) return false // jangan retry error client
        return count < 2
      },
      refetchOnWindowFocus: false,
    },
  },
})
