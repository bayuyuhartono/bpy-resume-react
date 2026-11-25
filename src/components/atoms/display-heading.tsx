import { cva, type VariantProps } from "class-variance-authority"
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const displayHeadingVariants = cva("type-display m-0", {
  variants: {
    size: {
      hero: "text-display-hero leading-[0.86]",
      page: "text-display-1 leading-[0.88]",
      section: "text-display-2",
      subsection: "text-display-3",
      contact: "text-display-contact",
      stat: "text-display-stat",
      footer: "text-display-footer leading-[0.8]",
      notFound: "text-display-404 leading-[0.8]",
      callout: "text-[34px] md:text-[clamp(36px,3.6vw,52px)]",
      xl: "text-[32px] md:text-[40px]",
      lg: "text-3xl md:text-[clamp(32px,3.4vw,48px)]",
      md: "text-3xl md:text-[34px]",
      item: "text-2xl md:text-[clamp(28px,2.6vw,38px)]",
      company: "text-[26px] md:text-3xl",
      sm: "text-[22px] md:text-[26px]",
      link: "text-xl md:text-[22px]",
    },
  },
  defaultVariants: { size: "section" },
})

export type DisplayHeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof displayHeadingVariants> & {
    as?: "h1" | "h2" | "h3" | "p" | "span"
  }

/** Teks display Anton uppercase dengan skala dari design. */
export function DisplayHeading({
  as: Comp = "h2",
  size,
  className,
  ...props
}: DisplayHeadingProps) {
  return <Comp className={cn(displayHeadingVariants({ size }), className)} {...props} />
}
