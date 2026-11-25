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
      <div aria-hidden="true" className="bg-hero-scrim absolute inset-0" />

      <div className="container-page relative z-10 mt-auto flex flex-col gap-6 pb-35 md:flex-row md:flex-wrap md:items-end md:justify-between md:pb-[clamp(150px,14vw,200px)]">
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
        {/* flex-wrap: di layar sangat sempit (< 360px) grup ikon sosial turun ke baris kedua */}
        <div className="flex flex-wrap items-center gap-2 md:gap-2.5">
          <Button
            asChild
            variant="pill"
            size="pill-sm"
            className="text-label-sm md:text-label h-12 flex-[1_1_108px] px-0 md:h-11 md:flex-none md:px-5"
          >
            <a href={SITE.cvPath} download>
              Download CV
            </a>
          </Button>
          <div className="flex items-center gap-2 md:gap-2.5">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  )
}
