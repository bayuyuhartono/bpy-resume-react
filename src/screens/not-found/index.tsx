import { Link, useLocation } from "react-router-dom"
import { AccentMark } from "@/components/atoms/accent-mark"
import { ArrowCircle } from "@/components/atoms/arrow-circle"
import { DisplayHeading } from "@/components/atoms/display-heading"
import { SectionLabel } from "@/components/atoms/section-label"
import { SiteFooterBar } from "@/components/molecules/site-footer-bar"
import { SiteHeader } from "@/components/organisms/site-header"
import { SiteLayout } from "@/components/templates/site-layout"
import { Button } from "@/components/ui/button"
import { notFoundMeta } from "@/content/page-meta"
import { usePageMeta } from "@/hooks/use-page-meta"
import { ROUTES, SECTION_IDS, SITE } from "@/lib/constants"

export function NotFoundScreen() {
  const { pathname } = useLocation()
  usePageMeta(notFoundMeta(pathname))

  return (
    <SiteLayout
      header={<SiteHeader variant="minimal" />}
      footer={
        <SiteFooterBar
          bordered
          aside={
            <a
              href={`mailto:${SITE.email}`}
              className="type-label text-label-xs text-muted-foreground hover:text-foreground md:text-label-sm"
            >
              {SITE.email}
            </a>
          }
        />
      }
      mainClassName="container-page flex flex-col justify-center gap-[clamp(28px,4vw,48px)] pt-[clamp(40px,6vw,80px)] pb-[clamp(56px,7vw,96px)]"
    >
      <SectionLabel as="p">Error 404 — Page not found</SectionLabel>
      <DisplayHeading as="h1" size="notFound" aria-label="404">
        4<span className="text-outline [-webkit-text-stroke-width:2px]">0</span>4
        <AccentMark variant="square" className="ml-[0.04em] size-[0.12em]" />
      </DisplayHeading>
      <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:items-end md:justify-between">
        <div className="flex max-w-[620px] flex-col gap-3.5">
          <DisplayHeading size="subsection">
            This route doesn't exist
            <AccentMark />
          </DisplayHeading>
          <p className="text-subtle-foreground text-base leading-[1.65] md:text-[17px]">
            The page may have moved, or the link has a typo. Head back home or jump straight to the
            work.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild variant="pill" size="pill-lg">
            <Link to={ROUTES.home}>
              Back to home
              <ArrowCircle tone="inverse" size="lg" />
            </Link>
          </Button>
          <Button asChild variant="pill-outline" size="pill-lg">
            <Link to={ROUTES.section(SECTION_IDS.work)}>See my work</Link>
          </Button>
        </div>
      </div>
    </SiteLayout>
  )
}
