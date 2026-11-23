import { Link } from "react-router-dom"
import { AccentMark } from "@/components/atoms/accent-mark"
import { DisplayHeading } from "@/components/atoms/display-heading"
import { SectionLabel } from "@/components/atoms/section-label"
import { SiteFooterBar } from "@/components/molecules/site-footer-bar"
import { NAV_ITEMS, SITE, SOCIAL_LINKS } from "@/lib/constants"

const LINK_CLASS =
  "type-display w-fit text-xl transition-colors hover:text-primary-text md:text-[22px]"

export function HomeFooter() {
  return (
    <>
      <div className="container-page flex flex-col gap-8 pt-12 pb-8 md:flex-row md:flex-wrap md:items-end md:gap-[clamp(32px,5vw,64px)] md:pt-[clamp(56px,7vw,96px)]">
        <div className="grid min-w-0 grid-cols-2 gap-5 md:flex-[1_1_360px] md:gap-6">
          <nav aria-label="Pages" className="flex flex-col gap-3 md:gap-3.5">
            <SectionLabel as="p" tone="faint" size="sm">
              Pages
            </SectionLabel>
            {NAV_ITEMS.map((item) => (
              <Link key={item.sectionId} to={`#${item.sectionId}`} className={LINK_CLASS}>
                {item.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Social" className="flex flex-col gap-3 md:gap-3.5">
            <SectionLabel as="p" tone="faint" size="sm">
              Social
            </SectionLabel>
            {SOCIAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} className={LINK_CLASS}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="min-w-0 md:flex-[2_1_520px] md:text-right">
          <DisplayHeading as="p" size="footer" aria-hidden="true">
            {SITE.shortName}
            <AccentMark variant="square" className="ml-[0.04em] size-[0.14em]" />
          </DisplayHeading>
        </div>
      </div>
      <SiteFooterBar bordered />
    </>
  )
}
