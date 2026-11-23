import { NumberedItem } from "@/components/molecules/numbered-item"
import { SectionHeading } from "@/components/molecules/section-heading"
import type { Project } from "@/types/content"

export type ProjectFeaturesProps = Project["features"]

export function ProjectFeatures({ label, heading, items }: ProjectFeaturesProps) {
  return (
    <section aria-label={heading} className="border-b">
      <div className="container-page flex flex-col gap-6 py-14 md:gap-12 md:py-[clamp(72px,9vw,128px)]">
        <SectionHeading label={label} lines={[heading]} />
        <div className="border-input border-t">
          {items.map((item, i) => (
            <NumberedItem
              key={item.title}
              number={String(i + 1).padStart(2, "0")}
              highlight={i === items.length - 1}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
