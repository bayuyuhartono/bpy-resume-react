import { SectionLabel } from "@/components/atoms/section-label"
import { SectionHeading } from "@/components/molecules/section-heading"
import { cn } from "@/lib/utils"
import type { VenueShot } from "@/types/content"

export type VenueGalleryProps = {
  shots: VenueShot[]
}

export function VenueGallery({ shots }: VenueGalleryProps) {
  return (
    <section aria-label="At the venue" className="border-b">
      <div className="container-page flex flex-col gap-6 py-14 md:gap-12 md:py-[clamp(72px,9vw,128px)]">
        <SectionHeading label="In use" lines={["At the venue"]} />
        <div className="grid gap-5 lg:grid-cols-2">
          {shots.map((shot) => (
            <figure key={shot.label} className="bg-card m-0 flex flex-col overflow-hidden">
              <img
                src={shot.image}
                alt={shot.alt}
                loading="lazy"
                className={cn(
                  "block aspect-[30/19] w-full object-cover",
                  shot.position === "top-left" && "object-top-left",
                )}
              />
              <figcaption className="flex flex-col gap-1.5 px-5 py-4.5 md:px-6 md:py-5">
                <SectionLabel size="sm">{shot.label}</SectionLabel>
                <span className="text-muted-foreground text-[15px] md:text-base">
                  {shot.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
