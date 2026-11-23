import { cva, type VariantProps } from "class-variance-authority"
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const sectionLabelVariants = cva("type-label", {
  variants: {
    tone: {
      accent: "text-primary-text",
      default: "text-foreground",
      subtle: "text-subtle-foreground",
      muted: "text-muted-foreground",
      faint: "text-faint-foreground",
    },
    size: {
      md: "text-label-sm md:text-label",
      sm: "text-label-xs md:text-label-sm",
    },
  },
  defaultVariants: { tone: "accent", size: "md" },
})

export type SectionLabelProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionLabelVariants> & {
    as?: "span" | "p" | "dt" | "div"
  }

/** Label kecil uppercase (eyebrow, meta label, tanggal). */
export function SectionLabel({
  as: Comp = "span",
  tone,
  size,
  className,
  ...props
}: SectionLabelProps) {
  return <Comp className={cn(sectionLabelVariants({ tone, size }), className)} {...props} />
}
