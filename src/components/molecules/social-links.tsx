import { SocialIcon } from "@/components/atoms/social-icon"
import { Button } from "@/components/ui/button"
import { SOCIAL_LINKS } from "@/lib/constants"

export type SocialLinksProps = {
  className?: string
}

/** Tombol ikon LinkedIn / GitHub / WhatsApp / Email (44px). */
export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <>
      {SOCIAL_LINKS.map((link) => (
        <Button
          key={link.label}
          asChild
          variant="icon-outline"
          size="icon-pill"
          className={className}
        >
          <a
            href={link.href}
            aria-label={link.label}
            {...(link.kind === "email" ? {} : { target: "_blank", rel: "noreferrer" })}
          >
            <SocialIcon name={link.label} />
          </a>
        </Button>
      ))}
    </>
  )
}
