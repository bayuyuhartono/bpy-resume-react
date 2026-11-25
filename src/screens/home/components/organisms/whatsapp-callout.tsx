import { ArrowCircle } from "@/components/atoms/arrow-circle"
import { DisplayHeading } from "@/components/atoms/display-heading"
import { SectionLabel } from "@/components/atoms/section-label"
import { SocialIcon } from "@/components/atoms/social-icon"
import { Button } from "@/components/ui/button"
import { WHATSAPP } from "@/lib/constants"
import { cn } from "@/lib/utils"

export type WhatsappCalloutProps = {
  className?: string
}

/** Kotak biru ajakan chat WhatsApp di atas form contact. */
export function WhatsappCallout({ className }: WhatsappCalloutProps) {
  return (
    <div
      className={cn(
        "bg-primary text-primary-foreground flex flex-col gap-5.5 px-5 py-6 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-6 md:p-[clamp(24px,3.5vw,40px)]",
        className,
      )}
    >
      <div className="flex min-w-0 flex-col gap-2.5">
        <SectionLabel tone="inverse" className="md:text-label-sm">
          Quick chat
        </SectionLabel>
        <DisplayHeading as="h3" size="callout">
          Reach me on WhatsApp
        </DisplayHeading>
        <p className="text-primary-foreground/85 text-sm md:text-base">
          {WHATSAPP.display} · Roles, projects or a quick question.
        </p>
      </div>
      <Button
        asChild
        variant="pill-inverse"
        size="pill-lg"
        className="gap-3.5 pl-5.5 has-data-[icon=inline-end]:pr-1.5"
      >
        <a href={WHATSAPP.href} target="_blank" rel="noreferrer">
          <span className="inline-flex items-center gap-2.5">
            <SocialIcon name="WhatsApp" className="size-4.5" />
            Open WhatsApp
          </span>
          <ArrowCircle tone="dark" size="lg" className="md:size-10" />
        </a>
      </Button>
    </div>
  )
}
