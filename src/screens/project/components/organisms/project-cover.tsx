import { cn } from "@/lib/utils"

export type ProjectCoverProps = {
  src: string
  alt: string
  wide?: boolean
}

export function ProjectCover({ src, alt, wide = false }: ProjectCoverProps) {
  return (
    <section aria-label="Product screens">
      <div className="container-page py-7 md:py-[clamp(40px,5vw,72px)]">
        <div className="bg-card overflow-hidden">
          <img
            src={src}
            alt={alt}
            fetchPriority="high"
            className={cn("block aspect-[30/17] w-full object-cover", wide && "md:aspect-[30/13]")}
          />
        </div>
      </div>
    </section>
  )
}
