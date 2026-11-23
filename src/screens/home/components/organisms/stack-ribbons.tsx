import { MarqueeRibbon } from "@/components/molecules/marquee-ribbon"

export type StackRibbonsProps = {
  stack: string[]
  services: string[]
}

/** Dua pita miring yang saling menyilang, menumpuk di bagian bawah hero. */
export function StackRibbons({ stack, services }: StackRibbonsProps) {
  return (
    <section
      aria-label="Stack and services"
      className="relative z-10 -mt-15 h-37.5 overflow-hidden border-b md:-mt-25 md:h-60"
    >
      <MarqueeRibbon
        items={stack}
        tone="light"
        direction="left"
        className="absolute top-[calc(50%-5px)] -left-[5%] h-11 w-[110%] -translate-y-1/2 -rotate-4 md:top-[calc(50%-16px)] md:h-16"
      />
      <MarqueeRibbon
        items={services}
        tone="primary"
        direction="right"
        className="absolute top-[calc(50%+4px)] -left-[5%] h-11 w-[110%] -translate-y-1/2 rotate-[2.5deg] md:top-[calc(50%+17px)] md:h-16"
      />
    </section>
  )
}
