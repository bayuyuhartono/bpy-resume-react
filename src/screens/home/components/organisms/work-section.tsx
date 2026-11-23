import type { ReactNode } from "react"
import { SectionHeading } from "@/components/molecules/section-heading"
import { SECTION_IDS } from "@/lib/constants"

export type WorkSectionProps = {
  /** Kartu project (ProjectCard) disusun oleh screen. */
  children: ReactNode
}

export function WorkSection({ children }: WorkSectionProps) {
  return (
    <section id={SECTION_IDS.work} className="scroll-mt-4 border-b">
      <div className="container-page flex flex-col gap-7 py-16 md:gap-12 md:py-[clamp(72px,9vw,128px)]">
        <SectionHeading label="Selected work" lines={["Products I've shipped"]} align="center" />
        <div className="grid gap-5 lg:grid-cols-2">{children}</div>
      </div>
    </section>
  )
}
