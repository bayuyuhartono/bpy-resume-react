import { Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { AccentMark } from "@/components/atoms/accent-mark"
import { ArrowCircle } from "@/components/atoms/arrow-circle"
import { DisplayHeading } from "@/components/atoms/display-heading"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NAV_ITEMS, SECTION_IDS, SITE } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { useUiStore } from "@/stores/use-ui-store"

export type SiteHeaderProps = {
  /**
   * home    = di atas hero, link anchor di halaman yang sama, CTA "Get in touch".
   * detail  = halaman project, link ke Home, CTA "All work".
   * minimal = tanpa CTA (404).
   */
  variant?: "home" | "detail" | "minimal"
  /** Section yang ditandai aktif di nav. */
  activeSection?: string
  /** Header melayang di atas konten (hero Home). */
  overlay?: boolean
  className?: string
}

export function SiteHeader({
  variant = "home",
  activeSection,
  overlay = false,
  className,
}: SiteHeaderProps) {
  const open = useUiStore((s) => s.mobileNavOpen)
  const setOpen = useUiStore((s) => s.setMobileNavOpen)

  const onHome = variant === "home"
  const sectionHref = (id: string) => (onHome ? `#${id}` : `/#${id}`)
  const items = NAV_ITEMS.filter((item) => onHome || item.detail)

  return (
    <header
      className={cn(
        "container-page relative z-20 flex items-center justify-between gap-4 py-4 md:py-6",
        overlay && "absolute inset-x-0 top-0",
        className,
      )}
    >
      <Link to={sectionHref(SECTION_IDS.top)} aria-label={`${SITE.name} — home`}>
        <DisplayHeading as="span" className="text-2xl md:text-[26px]">
          {SITE.shortName}
          <AccentMark />
        </DisplayHeading>
      </Link>

      <nav aria-label="Main" className="hidden gap-[clamp(16px,3.5vw,48px)] md:flex">
        {items.map((item) => (
          <Link
            key={item.sectionId}
            to={sectionHref(item.sectionId)}
            aria-current={item.sectionId === activeSection ? "true" : undefined}
            className={cn(
              "type-label text-label hover:text-foreground transition-colors",
              item.sectionId === activeSection ? "text-foreground" : "text-subtle-foreground",
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        {variant === "home" && (
          <Button asChild variant="pill-light" size="pill-sm">
            <Link to={sectionHref(SECTION_IDS.contact)}>
              Get in touch
              <ArrowCircle />
            </Link>
          </Button>
        )}
        {variant === "detail" && (
          <Button asChild variant="pill-outline" size="pill-sm">
            <Link to={sectionHref(SECTION_IDS.work)}>
              <ArrowCircle direction="left" />
              All work
            </Link>
          </Button>
        )}

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="icon-outline"
              size="icon-pill"
              aria-label="Open menu"
              className="md:hidden"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-border bg-background w-full gap-0">
            <SheetHeader className="px-5 pt-5">
              <SheetTitle className="type-display text-2xl">
                {SITE.shortName}
                <AccentMark />
              </SheetTitle>
              <SheetDescription className="sr-only">Site navigation</SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col px-5 pt-6">
              {items.map((item) => (
                <Link
                  key={item.sectionId}
                  to={sectionHref(item.sectionId)}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "type-display border-b py-4 text-4xl",
                    item.sectionId === activeSection ? "text-primary-text" : "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
