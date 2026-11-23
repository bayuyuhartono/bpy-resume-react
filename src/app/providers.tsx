import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import type { ReactNode } from "react"
import { ThemeProvider } from "@/app/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { queryClient } from "@/lib/query-client"
import { useUiStore } from "@/stores/use-ui-store"

export function Providers({ children }: { children: ReactNode }) {
  const theme = useUiStore((s) => s.theme)

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster richColors theme={theme} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
