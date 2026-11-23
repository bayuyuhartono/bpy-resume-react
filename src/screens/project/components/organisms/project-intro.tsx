import { AccentMark } from "@/components/atoms/accent-mark"
import { DisplayHeading } from "@/components/atoms/display-heading"
import { SectionLabel } from "@/components/atoms/section-label"
import { TextLines } from "@/components/atoms/text-lines"
import type { Project } from "@/types/content"

export type ProjectIntroProps = {
  project: Project
  number: string
}

export function ProjectIntro({ project, number }: ProjectIntroProps) {
  const kindLabel = project.kind === "product" ? "Product" : "Case study"

  return (
    <section aria-label="Project intro" className="border-b">
      <div className="container-page flex flex-col gap-6 pt-8 pb-10 md:gap-[clamp(32px,4vw,56px)] md:pt-[clamp(48px,7vw,104px)] md:pb-[clamp(48px,6vw,80px)]">
        <div className="flex flex-col gap-3.5 md:gap-5">
          <SectionLabel as="p">
            {kindLabel} {number} — {project.eyebrowName}
          </SectionLabel>
          <DisplayHeading as="h1" size="page">
            <TextLines lines={project.titleLines} />
            <AccentMark />
          </DisplayHeading>
          <p className="text-subtle-foreground max-w-[760px] text-base leading-[1.6] md:text-[clamp(17px,1.6vw,21px)]">
            {project.intro}
          </p>
        </div>
        <dl className="bg-border grid grid-cols-2 gap-px border md:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
          {project.meta.map((item) => (
            <div
              key={item.label}
              className="bg-background flex flex-col gap-1.5 p-3.5 last:odd:col-span-2 md:gap-2 md:p-5 md:last:odd:col-span-1"
            >
              <SectionLabel as="dt" tone="faint" size="sm">
                {item.label}
              </SectionLabel>
              <dd className="text-sm font-semibold md:text-base">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
