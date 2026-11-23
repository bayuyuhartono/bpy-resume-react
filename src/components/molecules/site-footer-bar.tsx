import type { ReactNode } from "react"
import { SectionLabel } from "@/components/atoms/section-label"
import { SITE } from "@/lib/constants"
import { cn } from "@/lib/utils"

export type SiteFooterBarProps = {
  /** Isi sisi kanan; default lokasi + ketersediaan. */
  aside?: ReactNode
  bordered?: boolean
  className?: string
}

export function SiteFooterBar({ aside, bordered = false, className }: SiteFooterBarProps) {
  return (
    <div
      className={cn(
        "container-page flex flex-col gap-1.5 pt-5 pb-7 md:flex-row md:flex-wrap md:justify-between md:gap-3",
        bordered && "border-t",
        className,
      )}
    >
      <SectionLabel tone="faint" size="sm">
        © {SITE.copyrightYear} {SITE.name}
      </SectionLabel>
      {aside ?? (
        <SectionLabel tone="faint" size="sm">
          {SITE.location} · {SITE.availability}
        </SectionLabel>
      )}
    </div>
  )
}
