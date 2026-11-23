import { AccentMark } from "@/components/atoms/accent-mark"
import { DisplayHeading } from "@/components/atoms/display-heading"
import { SectionLabel } from "@/components/atoms/section-label"
import { cn } from "@/lib/utils"
import type { Stat } from "@/types/content"

export type StatBlockProps = Stat & {
  /** card = kotak kecil (About); inline = angka besar di strip hasil project. */
  variant?: "card" | "inline"
  className?: string
}

export function StatBlock({ value, accent, label, variant = "card", className }: StatBlockProps) {
  const number = (
    <>
      {value}
      {accent && <AccentMark variant="text">{accent}</AccentMark>}
    </>
  )

  if (variant === "inline") {
    return (
      <div
        className={cn(
          "flex items-baseline justify-between gap-3 border-b py-5.5 last:border-b-0",
          "md:flex-col md:items-start md:justify-start md:gap-2.5 md:border-b-0 md:py-[clamp(28px,4vw,48px)]",
          className,
        )}
      >
        <DisplayHeading as="p" size="stat">
          {number}
        </DisplayHeading>
        <SectionLabel as="p" tone="muted" size="sm" className="text-right md:text-left">
          {label}
        </SectionLabel>
      </div>
    )
  }

  return (
    <div className={cn("bg-card flex flex-col gap-1.5 px-3 py-4 md:px-4 md:py-5", className)}>
      <DisplayHeading as="p" className="text-4xl md:text-[44px]">
        {number}
      </DisplayHeading>
      <SectionLabel as="p" tone="muted" size="sm">
        {label}
      </SectionLabel>
    </div>
  )
}
