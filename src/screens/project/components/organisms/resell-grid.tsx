import { NumberedItem } from "@/components/molecules/numbered-item"
import { SectionHeading } from "@/components/molecules/section-heading"
import type { NumberedItem as NumberedItemData } from "@/types/content"

export type ResellGridProps = {
  label: string
  heading: string
  items: NumberedItemData[]
}

export function ResellGrid({ label, heading, items }: ResellGridProps) {
  return (
    <section aria-label={heading} className="border-b">
      <div className="container-page flex flex-col gap-6 py-14 md:gap-12 md:py-[clamp(72px,9vw,128px)]">
        <SectionHeading label={label} lines={[heading]} />
        <div className="bg-border grid gap-px border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <NumberedItem
              key={item.title}
              layout="tile"
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
