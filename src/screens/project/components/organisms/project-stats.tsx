import { StatBlock } from "@/components/molecules/stat-block"
import type { Stat } from "@/types/content"

export type ProjectStatsProps = {
  stats: Stat[]
}

export function ProjectStats({ stats }: ProjectStatsProps) {
  return (
    <section aria-label="Highlights" className="border-y">
      <div className="container-page flex flex-col md:grid md:grid-cols-3">
        {stats.map((stat) => (
          <StatBlock key={stat.label} variant="inline" {...stat} />
        ))}
      </div>
    </section>
  )
}
