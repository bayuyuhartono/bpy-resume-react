import { AccentMark } from "@/components/atoms/accent-mark"
import { DisplayHeading } from "@/components/atoms/display-heading"
import { SectionLabel } from "@/components/atoms/section-label"
import { KeyValueRow } from "@/components/molecules/key-value-row"
import type { LabelValue } from "@/types/content"

export type ProjectStackProps = {
  stack: LabelValue[]
}

export function ProjectStack({ stack }: ProjectStackProps) {
  return (
    <section aria-label="Tech stack" className="border-b">
      <div className="container-page grid gap-4.5 py-12 md:grid-cols-2 md:gap-[clamp(32px,5vw,64px)] md:py-[clamp(56px,7vw,96px)]">
        <div className="flex flex-col gap-3.5 md:gap-4">
          <SectionLabel as="p">Under the hood</SectionLabel>
          <DisplayHeading size="subsection">
            Tech stack
            <AccentMark />
          </DisplayHeading>
        </div>
        <div className="border-input border-t">
          {stack.map((row) => (
            <KeyValueRow key={row.label} {...row} />
          ))}
        </div>
      </div>
    </section>
  )
}
