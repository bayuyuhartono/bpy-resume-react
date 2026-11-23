import { AccentMark } from "@/components/atoms/accent-mark"
import { DisplayHeading } from "@/components/atoms/display-heading"
import { SectionLabel } from "@/components/atoms/section-label"
import type { Project } from "@/types/content"

export type ProjectOverviewProps = Pick<Project, "overview" | "role">

export function ProjectOverview({ overview, role }: ProjectOverviewProps) {
  const blocks = [
    { label: overview.label, heading: overview.heading, body: overview.body },
    { label: "My role", heading: role.heading, body: role.body },
  ]

  return (
    <section aria-label="Overview" className="border-b">
      <div className="container-page flex flex-col gap-10 py-14 md:flex-row md:flex-wrap md:gap-[clamp(32px,5vw,72px)] md:py-[clamp(72px,9vw,128px)]">
        {blocks.map((block) => (
          <div
            key={block.label}
            className="flex min-w-0 flex-col gap-3.5 md:flex-[1_1_420px] md:gap-5"
          >
            <SectionLabel as="p">{block.label}</SectionLabel>
            <DisplayHeading size="subsection">
              {block.heading}
              <AccentMark />
            </DisplayHeading>
            <p className="text-subtle-foreground text-base leading-[1.65] md:text-[17px]">
              {block.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
