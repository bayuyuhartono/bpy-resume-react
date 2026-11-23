import { Fragment } from "react"
import { cn } from "@/lib/utils"

export type MarqueeRibbonProps = {
  items: string[]
  /** light = pita terang teks gelap; primary = pita biru teks putih. */
  tone?: "light" | "primary"
  direction?: "left" | "right"
  /** Jumlah salinan konten di track; harus genap agar geser -50% berulang mulus. */
  copies?: number
  className?: string
}

/**
 * Pita teks berjalan. Hanya salinan pertama yang dibaca screen reader; sisanya aria-hidden.
 * Animasi berhenti otomatis saat prefers-reduced-motion.
 */
export function MarqueeRibbon({
  items,
  tone = "light",
  direction = "left",
  copies = 4,
  className,
}: MarqueeRibbonProps) {
  return (
    <div
      className={cn(
        "flex items-center overflow-hidden",
        tone === "light" ? "bg-foreground text-background" : "bg-primary text-primary-foreground",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse",
        )}
      >
        {Array.from({ length: copies }, (_, copy) => (
          <span
            key={copy}
            aria-hidden={copy > 0 ? "true" : undefined}
            className="type-display inline-flex items-center gap-4.5 pr-4.5 text-xl whitespace-nowrap md:gap-7 md:pr-7 md:text-3xl"
          >
            {items.map((item) => (
              <Fragment key={item}>
                {item}
                <span
                  aria-hidden="true"
                  className={tone === "light" ? "text-primary" : "text-primary-foreground/60"}
                >
                  ✦
                </span>
              </Fragment>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
