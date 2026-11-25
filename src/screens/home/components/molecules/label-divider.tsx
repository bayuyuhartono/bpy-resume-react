import type { ReactNode } from "react"
import { SectionLabel } from "@/components/atoms/section-label"
import { cn } from "@/lib/utils"

export type LabelDividerProps = {
  children: ReactNode
  className?: string
}

/** Garis pemisah dengan label di tengah. */
export function LabelDivider({ children, className }: LabelDividerProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span aria-hidden="true" className="bg-input/50 h-px flex-1" />
      <SectionLabel tone="faint" size="sm">
        {children}
      </SectionLabel>
      <span aria-hidden="true" className="bg-input/50 h-px flex-1" />
    </div>
  )
}
