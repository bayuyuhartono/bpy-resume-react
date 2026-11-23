import { SectionLabel } from "@/components/atoms/section-label"
import { cn } from "@/lib/utils"

export type KeyValueRowProps = {
  label: string
  value: string
  className?: string
}

/** Baris "Mobile — React Native · …": bertumpuk di mobile, sejajar mulai md. */
export function KeyValueRow({ label, value, className }: KeyValueRowProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1.5 border-b py-3.5 md:flex-row md:flex-wrap md:justify-between md:gap-x-6 md:py-4.5",
        className,
      )}
    >
      <SectionLabel tone="default">{label}</SectionLabel>
      <span className="text-muted-foreground text-[15px] md:text-base">{value}</span>
    </div>
  )
}
