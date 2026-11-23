import heroImage from "@/assets/hero.jpg"
import { AccentMark } from "@/components/atoms/accent-mark"
import { DisplayHeading } from "@/components/atoms/display-heading"
import { SectionLabel } from "@/components/atoms/section-label"
import { SocialLinks } from "@/components/molecules/social-links"
import { Button } from "@/components/ui/button"
import { SECTION_IDS, SITE } from "@/lib/constants"

export function HeroSection() {
  return (
    <section
      id={SECTION_IDS.top}
      className="relative flex h-[760px] flex-col md:h-auto md:min-h-[clamp(620px,92vh,920px)]"
    >
      <img
        src={heroImage}
        alt={SITE.name}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover object-[70%_0%] md:object-[78%_0%]"
      />
      <div
        aria-hidden="true"
        className="from-background/95 via-background/20 to-background/35 md:from-background/85 absolute inset-0 bg-linear-to-t via-55% md:via-transparent md:via-40% md:to-transparent"
      />

      <div className="container-page relative z-10 mt-auto flex flex-col gap-6 pb-18 md:flex-row md:flex-wrap md:items-end md:justify-between md:pb-[clamp(56px,7vw,96px)]">
        <div className="flex flex-col gap-4 md:gap-4.5">
          <SectionLabel tone="subtle">{SITE.tagline}</SectionLabel>
          <DisplayHeading as="h1" size="hero">
            {SITE.name.split(" ")[0]} <br />
            {/* nowrap: kotak accent tidak boleh turun sendirian ke baris baru di mobile */}
            <span className="whitespace-nowrap">
              {SITE.name.split(" ").slice(1).join(" ")}
              <AccentMark variant="square" />
            </span>
          </DisplayHeading>
        </div>
        {/* flex-wrap: di layar sangat sempit (≤ 340px) ikon sosial turun ke baris kedua */}
        <div className="flex flex-wrap items-center gap-2 md:gap-2.5">
          <Button
            asChild
            variant="pill"
            size="pill-sm"
            className="h-12 flex-[1_1_160px] md:h-11 md:flex-none"
          >
            <a href={SITE.cvPath} download>
              Download CV
            </a>
          </Button>
          <SocialLinks />
        </div>
      </div>

      <RotatingBadge />
    </section>
  )
}

/** Badge bulat berputar di batas bawah hero (desktop saja, sesuai design mobile). */
function RotatingBadge() {
  return (
    <div
      aria-hidden="true"
      className="bg-primary ring-background absolute -bottom-16 left-1/2 z-10 hidden size-32 -translate-x-1/2 rounded-full ring-8 md:block"
    >
      <svg viewBox="0 0 128 128" className="animate-spin-slow absolute inset-0 size-full">
        <defs>
          <path id="hero-badge-ring" d="M64 64 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" />
        </defs>
        <text className="fill-primary-foreground font-sans text-[10.5px] font-bold tracking-[2.6px]">
          <textPath href="#hero-badge-ring">{SITE.badgeText}</textPath>
        </text>
      </svg>
      <svg viewBox="0 0 128 128" className="absolute inset-0 size-full">
        <path
          d="M64 44 C66 58 70 62 84 64 C70 66 66 70 64 84 C62 70 58 66 44 64 C58 62 62 58 64 44 Z"
          className="fill-primary-foreground"
        />
      </svg>
    </div>
  )
}
