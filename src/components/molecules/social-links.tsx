import { SocialIcon } from "@/components/atoms/social-icon"
import { Button } from "@/components/ui/button"
import { SOCIAL_LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export type SocialLinksProps = {
  className?: string
}

/** Tombol ikon LinkedIn / GitHub / Email. 48px di mobile, 44px mulai md. */
export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <>
      {SOCIAL_LINKS.map((link) => (
        <Button
          key={link.label}
          asChild
          variant="icon-outline"
          size="icon-pill"
          className={cn("size-12 md:size-11", className)}
        >
          <a
            href={link.href}
            aria-label={link.label}
            {...(link.label === "Email" ? {} : { target: "_blank", rel: "noreferrer" })}
          >
            <SocialIcon name={link.label} />
          </a>
        </Button>
      ))}
    </>
  )
}
