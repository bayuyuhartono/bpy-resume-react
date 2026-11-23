import { useEffect, type ReactNode } from "react"
import { useUiStore } from "@/stores/use-ui-store"

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useUiStore((s) => s.theme)

  useEffect(() => {
    const root = document.documentElement
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const apply = () =>
      root.classList.toggle("dark", theme === "dark" || (theme === "system" && mq.matches))
    apply()
    if (theme !== "system") return
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [theme])

  return children
}
