import { DisplayHeading } from "@/components/atoms/display-heading"
import { cn } from "@/lib/utils"

export type NumberedItemProps = {
  number: string
  title: string
  description: string
  /** Item terakhir: angka berwarna accent, bukan outline. */
  highlight?: boolean
  /**
   * row   = baris bergaris (fitur project).
   * card  = baris di mobile, kartu bg-card mulai md (How I work).
   * tile  = selalu kotak di grid bergaris (Built to resell).
   */
  layout?: "row" | "card" | "tile"
  className?: string
}

export function NumberedItem({
  number,
  title,
  description,
  highlight = false,
  layout = "row",
  className,
}: NumberedItemProps) {
  const numberTone = highlight ? "text-primary-text" : "text-outline"

  if (layout === "tile") {
    return (
      <div className={cn("bg-background flex flex-col gap-3 px-6 py-7", className)}>
        <span className={cn("type-display text-[40px]", numberTone)}>{number}</span>
        <DisplayHeading as="h3" className="text-[26px] md:text-3xl">
          {title}
        </DisplayHeading>
        <p className="text-muted-foreground leading-[1.55]">{description}</p>
      </div>
    )
  }

  const isCard = layout === "card"

  return (
    <div
      className={cn(
        "grid grid-cols-[52px_minmax(0,1fr)] gap-3 border-b py-4.5",
        isCard
          ? cn(
              "md:bg-card md:flex md:flex-col md:gap-3.5 md:border-b-0 md:px-6 md:py-7",
              highlight && "md:outline-primary md:outline",
            )
          : "md:grid-cols-[96px_minmax(0,1fr)] md:items-baseline md:gap-6 md:py-7",
        className,
      )}
    >
      <span
        className={cn(
          "type-display text-[32px]",
          isCard ? "md:text-7xl" : "md:text-[44px]",
          numberTone,
        )}
      >
        {number}
      </span>
      <div
        className={cn(
          "flex flex-col gap-1.5",
          isCard
            ? "md:gap-3.5"
            : "md:flex-row md:flex-wrap md:justify-between md:gap-x-8 md:gap-y-2",
        )}
      >
        <DisplayHeading
          as="h3"
          className={
            isCard ? "text-[22px] md:text-[26px]" : "text-2xl md:text-[clamp(28px,2.6vw,38px)]"
          }
        >
          {title}
        </DisplayHeading>
        <p
          className={cn(
            "text-muted-foreground text-[15px] leading-normal md:leading-[1.55]",
            isCard ? "md:text-base" : "md:max-w-[560px] md:text-[17px]",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
