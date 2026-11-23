import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type SiteLayoutProps = {
  header?: ReactNode
  footer?: ReactNode
  children: ReactNode
  mainClassName?: string
}

/** Kerangka semua halaman: latar gelap bergaris kolom, header, main, footer. */
export function SiteLayout({ header, footer, children, mainClassName }: SiteLayoutProps) {
  return (
    <div className="bg-background bg-columns text-foreground relative flex min-h-svh flex-col overflow-x-hidden">
      {header}
      <main className={cn("flex-1", mainClassName)}>{children}</main>
      {footer && <footer>{footer}</footer>}
    </div>
  )
}
