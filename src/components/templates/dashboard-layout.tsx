import type { ReactNode } from "react"
import { ThemeToggle } from "@/components/molecules/theme-toggle"
import { cn } from "@/lib/utils"
import { useUiStore } from "@/stores/use-ui-store"

export type DashboardLayoutProps = {
  title?: string
  children: ReactNode
  className?: string
}

export function DashboardLayout({ title, children, className }: DashboardLayoutProps) {
  const theme = useUiStore((s) => s.theme)
  const setTheme = useUiStore((s) => s.setTheme)

  return (
    <div className="bg-background text-foreground min-h-svh">
      <header className="border-border border-b">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 md:px-6">
          <span className="text-sm font-semibold">bpy-resume</span>
          <ThemeToggle value={theme} onChange={setTheme} />
        </div>
      </header>
      <main className={cn("mx-auto max-w-5xl space-y-6 p-4 md:p-6", className)}>
        {title && <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>}
        {children}
      </main>
    </div>
  )
}
