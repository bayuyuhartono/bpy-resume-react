import { Fragment } from "react"
import { MARQUEE_SEPARATOR } from "@/lib/constants"
import { cn } from "@/lib/utils"

export type MarqueeRibbonProps = {
  items: string[]
  /** light = pita terang teks gelap; primary = pita biru teks putih. */
  tone?: "light" | "primary"
  direction?: "left" | "right"
  /** Jumlah salinan konten di track; harus genap agar geser -50% berulang mulus. */
  copies?: number
  /** Pemisah antar item; default titik koma. */
  separator?: string
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
  separator = MARQUEE_SEPARATOR,
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
                <span>{item}</span>
                {/*
                  Elemen sendiri supaya jarak kiri-kanan sama (gap flex).
                  Titik koma Anton duduk 0.12em di bawah tengah huruf kapital (diukur dari tinta
                  glyph), jadi dinaikkan agar sejajar tengah teks.
                */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-block -translate-y-[0.12em]",
                    tone === "light" ? "text-primary" : "text-primary-foreground/60",
                  )}
                >
                  {separator}
                </span>
              </Fragment>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
