import { Link } from "react-router-dom"
import { DisplayHeading } from "@/components/atoms/display-heading"
import { SectionLabel } from "@/components/atoms/section-label"
import { Tag } from "@/components/atoms/tag"
import { cn } from "@/lib/utils"
import type { Project } from "@/types/content"

export type ProjectCardProps = {
  project: Project
  number: string
  href: string
  className?: string
}

export function ProjectCard({ project, number, href, className }: ProjectCardProps) {
  const { featured } = project
  const plainTags = project.tags.filter((t) => t !== project.highlightTag).join(" · ")

  return (
    <Link
      to={href}
      className={cn(
        "group bg-card focus-visible:outline-ring flex flex-col outline-offset-4 focus-visible:outline-2",
        featured && "lg:col-span-2",
        className,
      )}
    >
      <div className="overflow-hidden">
        <img
          src={project.cover}
          alt={project.coverAlt}
          loading="lazy"
          className={cn(
            "block aspect-[30/17] w-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
            featured && "lg:aspect-[30/13]",
          )}
        />
      </div>

      <div
        className={cn(
          "flex flex-col gap-2 p-4.5 md:p-6",
          featured && "lg:flex-row lg:flex-wrap lg:items-end lg:justify-between lg:gap-4",
        )}
      >
        <div className="flex flex-col gap-2">
          <SectionLabel>
            {number} — {project.cardEyebrow}
          </SectionLabel>
          <DisplayHeading as="h3" size={featured ? "lg" : "md"}>
            {project.cardTitle}
          </DisplayHeading>
          <p
            className={cn(
              "text-muted-foreground max-w-[620px] text-[15px] leading-normal md:text-base",
              !featured && "hidden md:block",
            )}
          >
            {project.cardSummary}
          </p>
          <SectionLabel tone="subtle" size="sm" className={cn("mt-1", featured && "lg:hidden")}>
            {plainTags}
          </SectionLabel>
        </div>

        {featured && (
          <div className="hidden flex-wrap gap-2 lg:flex">
            {project.tags.map((tag) => (
              <Tag key={tag} highlight={tag === project.highlightTag}>
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
