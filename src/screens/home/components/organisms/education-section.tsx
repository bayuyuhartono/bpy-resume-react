import { DisplayHeading } from "@/components/atoms/display-heading"
import { SectionLabel } from "@/components/atoms/section-label"
import type { Education, LabelValue } from "@/types/content"

export type EducationSectionProps = {
  education: Education[]
  languages: LabelValue[]
}

export function EducationSection({ education, languages }: EducationSectionProps) {
  return (
    <section aria-label="Education and languages" className="border-b">
      <div className="container-page grid gap-8 py-14 md:grid-cols-2 md:gap-[clamp(32px,5vw,64px)] md:py-[clamp(56px,7vw,96px)]">
        <div className="flex flex-col gap-3.5 md:gap-5">
          <SectionLabel as="p">Education</SectionLabel>
          <div className="border-input border-t">
            {education.map((item) => (
              <div
                key={item.school}
                className="flex flex-col gap-1.5 border-b py-4 md:flex-row md:flex-wrap md:justify-between md:gap-x-6 md:py-5"
              >
                <div className="flex flex-col gap-1.5">
                  <DisplayHeading as="h3" size="sm">
                    {item.school}
                  </DisplayHeading>
                  <span className="text-muted-foreground text-[15px] md:text-base">
                    {item.program}
                  </span>
                </div>
                <SectionLabel tone="subtle" size="sm" className="md:text-label">
                  {item.period}
                </SectionLabel>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3.5 md:gap-5">
          <SectionLabel as="p">Languages</SectionLabel>
          <div className="border-input border-t">
            {languages.map((lang) => (
              <div
                key={lang.label}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5 border-b py-4 md:py-5"
              >
                <DisplayHeading as="h3" size="sm">
                  {lang.label}
                </DisplayHeading>
                <SectionLabel tone="subtle" size="sm" className="md:text-label">
                  {lang.value}
                </SectionLabel>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
