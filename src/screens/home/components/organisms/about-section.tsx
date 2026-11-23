import { DisplayHeading } from "@/components/atoms/display-heading"
import { KeyValueRow } from "@/components/molecules/key-value-row"
import { SectionHeading } from "@/components/molecules/section-heading"
import { StatBlock } from "@/components/molecules/stat-block"
import { SECTION_IDS } from "@/lib/constants"
import type { LabelValue, Stat } from "@/types/content"

export type AboutSectionProps = {
  label: string
  headingLines: string[]
  story: string[]
  stack: LabelValue[]
  stats: Stat[]
}

export function AboutSection({ label, headingLines, story, stack, stats }: AboutSectionProps) {
  return (
    <section id={SECTION_IDS.about} className="scroll-mt-4 border-b">
      <div className="container-page flex flex-col gap-7 py-16 md:gap-14 md:py-[clamp(72px,9vw,128px)]">
        <SectionHeading label={label} lines={headingLines} />

        <div className="flex flex-col gap-7 md:flex-row md:flex-wrap md:gap-[clamp(28px,4vw,56px)]">
          <div className="flex min-w-0 flex-col gap-7 md:flex-[1_1_460px]">
            <DisplayHeading as="h3" size="xl" className="hidden md:block">
              My story
            </DisplayHeading>
            {story.map((paragraph) => (
              <p
                key={paragraph}
                className="text-subtle-foreground text-base leading-[1.65] md:text-[17px]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex min-w-0 flex-col gap-7 md:flex-[1_1_420px]">
            <div className="flex flex-col gap-2 md:gap-7">
              <DisplayHeading as="h3" size="xl">
                My stack
              </DisplayHeading>
              <div className="border-t">
                {stack.map((row) => (
                  <KeyValueRow key={row.label} {...row} className="md:py-4" />
                ))}
              </div>
            </div>
            <div className="order-first grid grid-cols-3 gap-2 md:order-none md:gap-3">
              {stats.map((stat) => (
                <StatBlock key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
