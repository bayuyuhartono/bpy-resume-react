import { DisplayHeading } from "@/components/atoms/display-heading"
import { SectionLabel } from "@/components/atoms/section-label"
import { SectionHeading } from "@/components/molecules/section-heading"
import { SECTION_IDS } from "@/lib/constants"
import type { Experience } from "@/types/content"

export type ExperienceSectionProps = {
  items: Experience[]
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section id={SECTION_IDS.experience} className="scroll-mt-4 border-b">
      <div className="container-page flex flex-col gap-6 py-16 md:gap-12 md:py-[clamp(72px,9vw,128px)]">
        <SectionHeading label="Experience" lines={["Where I've worked"]} align="center" />
        <div className="grid gap-4 lg:grid-cols-2">
          {items.map((job) => (
            <article
              key={job.company}
              className="flex flex-col gap-2 border px-4.5 py-5 md:gap-3 md:px-6 md:py-7"
            >
              <div className="flex flex-col-reverse gap-2 md:flex-row md:flex-wrap md:justify-between md:gap-3">
                <DisplayHeading as="h3" size="company">
                  {job.company}
                </DisplayHeading>
                <SectionLabel
                  tone={job.current ? "accent" : "subtle"}
                  size="sm"
                  className="md:text-label"
                >
                  {job.period}
                </SectionLabel>
              </div>
              <SectionLabel tone="subtle" size="sm">
                {job.role}
              </SectionLabel>
              <ul className="mt-1">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-muted-foreground border-t py-2.5 text-[15px] leading-normal md:text-base md:leading-[1.55]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
