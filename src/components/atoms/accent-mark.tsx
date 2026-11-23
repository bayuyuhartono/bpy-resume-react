import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type AccentMarkProps = {
  /** dot = "." berwarna accent, square = kotak accent, text = teks custom berwarna accent. */
  variant?: "dot" | "square" | "text"
  children?: ReactNode
  className?: string
}

export function AccentMark({ variant = "dot", children, className }: AccentMarkProps) {
  if (variant === "square") {
    return (
      <span
        aria-hidden="true"
        className={cn("bg-primary ml-[0.06em] inline-block size-[0.16em]", className)}
      />
    )
  }
  return (
    <span className={cn("text-primary-text", className)}>{variant === "dot" ? "." : children}</span>
  )
}
