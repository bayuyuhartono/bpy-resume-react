import { Link } from "react-router-dom"
import { AccentMark } from "@/components/atoms/accent-mark"
import { ArrowCircle } from "@/components/atoms/arrow-circle"
import { DisplayHeading } from "@/components/atoms/display-heading"
import { SectionLabel } from "@/components/atoms/section-label"
import { TextLines } from "@/components/atoms/text-lines"
import { Button } from "@/components/ui/button"

export type NextProjectProps = {
  titleLines: string[]
  href: string
  ctaLabel: string
  ctaHref: string
}

export function NextProject({ titleLines, href, ctaLabel, ctaHref }: NextProjectProps) {
  return (
    <section aria-label="Next project" className="border-b">
      <div className="container-page flex flex-col gap-6 py-14 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-8 md:py-[clamp(72px,9vw,128px)]">
        <div className="flex flex-col gap-3 md:gap-4">
          <SectionLabel as="p">Next project</SectionLabel>
          <Link to={href} className="hover:text-primary-text transition-colors">
            <DisplayHeading as="span" size="section" className="block">
              <TextLines lines={titleLines} />
              <AccentMark variant="text">→</AccentMark>
            </DisplayHeading>
          </Link>
        </div>
        <Button asChild variant="pill" size="pill-lg" className="w-full md:w-auto">
          <Link to={ctaHref}>
            {ctaLabel}
            <ArrowCircle tone="inverse" size="lg" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
