import { cn } from "@/lib/utils"

const TONE_CLASS = {
  primary: "bg-primary text-primary-foreground",
  inverse: "bg-primary-foreground text-background",
  dark: "bg-background text-primary-foreground",
} as const

export type ArrowCircleProps = {
  direction?: "right" | "left"
  /** primary = lingkaran biru panah putih; inverse = lingkaran putih panah gelap; dark = lingkaran gelap panah putih. */
  tone?: keyof typeof TONE_CLASS
  size?: "sm" | "lg"
  className?: string
}

/** Lingkaran berisi panah di dalam tombol pill. Memberi data-icon agar padding Button menyesuaikan. */
export function ArrowCircle({
  direction = "right",
  tone = "primary",
  size = "sm",
  className,
}: ArrowCircleProps) {
  return (
    <span
      aria-hidden="true"
      data-icon={direction === "left" ? "inline-start" : "inline-end"}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full",
        size === "sm" ? "size-8" : "size-10 md:size-9",
        TONE_CLASS[tone],
        className,
      )}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="size-3.5"
      >
        <path d={direction === "left" ? "M13 8H3M7 4L3 8l4 4" : "M3 8h10M9 4l4 4-4 4"} />
      </svg>
    </span>
  )
}
