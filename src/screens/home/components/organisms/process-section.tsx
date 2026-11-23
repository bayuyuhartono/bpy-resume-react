import { NumberedItem } from "@/components/molecules/numbered-item"
import { SectionHeading } from "@/components/molecules/section-heading"
import type { NumberedItem as NumberedItemData } from "@/types/content"

export type ProcessSectionProps = {
  steps: NumberedItemData[]
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section aria-label="How I work" className="border-b">
      <div className="container-page flex flex-col gap-6 py-16 md:gap-12 md:py-[clamp(72px,9vw,128px)]">
        <SectionHeading label="How I work" lines={["From idea to production"]} align="center" />
        <div className="border-input flex flex-col border-t md:grid md:grid-cols-2 md:gap-4 md:border-t-0 lg:grid-cols-4">
          {steps.map((step, i) => (
            <NumberedItem
              key={step.title}
              layout="card"
              number={String(i + 1).padStart(2, "0")}
              highlight={i === steps.length - 1}
              {...step}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
