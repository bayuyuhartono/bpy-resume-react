import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type TagProps = {
  children: ReactNode
  highlight?: boolean
  className?: string
}

export function Tag({ children, highlight = false, className }: TagProps) {
  return (
    <span
      className={cn(
        "type-label text-label-sm rounded-full px-3 py-2",
        highlight ? "bg-primary text-primary-foreground" : "border-input border",
        className,
      )}
    >
      {children}
    </span>
  )
}
