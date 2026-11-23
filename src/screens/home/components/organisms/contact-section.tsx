import type { ReactNode } from "react"
import { SectionHeading } from "@/components/molecules/section-heading"
import { SECTION_IDS } from "@/lib/constants"

export type ContactSectionProps = {
  /** Form contact disusun oleh screen. */
  children: ReactNode
}

export function ContactSection({ children }: ContactSectionProps) {
  return (
    <section id={SECTION_IDS.contact} className="scroll-mt-4 border-b">
      <div className="container-page py-14 md:py-[clamp(72px,9vw,128px)]">
        <div className="bg-card mx-auto flex max-w-[920px] flex-col gap-7 px-5 py-7 md:gap-10 md:p-[clamp(28px,5vw,64px)]">
          <SectionHeading
            label="Let's work together"
            lines={["Let's build something", "worth using"]}
            size="contact"
            align="center"
          />
          {children}
        </div>
      </div>
    </section>
  )
}
