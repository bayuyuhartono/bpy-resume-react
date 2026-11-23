import { AccentMark } from "@/components/atoms/accent-mark"
import { DisplayHeading, type DisplayHeadingProps } from "@/components/atoms/display-heading"
import { SectionLabel } from "@/components/atoms/section-label"
import { TextLines } from "@/components/atoms/text-lines"
import { cn } from "@/lib/utils"

export type SectionHeadingProps = {
  label: string
  lines: string[]
  as?: "h1" | "h2"
  size?: DisplayHeadingProps["size"]
  /** center hanya berlaku mulai md; di mobile selalu rata kiri (sesuai design mobile). */
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  label,
  lines,
  as = "h2",
  size = "section",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 md:gap-4",
        align === "center" && "md:items-center md:text-center",
        className,
      )}
    >
      <SectionLabel>{label}</SectionLabel>
      <DisplayHeading as={as} size={size}>
        <TextLines lines={lines} />
        <AccentMark />
      </DisplayHeading>
    </div>
  )
}
