import { PROJECTS } from "@/content/projects"
import type { Project } from "@/types/content"

export function getProject(slug: string | undefined, projects: Project[] = PROJECTS) {
  return projects.find((p) => p.slug === slug)
}

/** Nomor dua digit berdasarkan urutan ("01", "02", …). */
export function projectNumber(slug: string, projects: Project[] = PROJECTS) {
  const index = projects.findIndex((p) => p.slug === slug)
  return index === -1 ? undefined : String(index + 1).padStart(2, "0")
}

/** Project berikutnya; setelah yang terakhir kembali ke yang pertama. */
export function getNextProject(slug: string, projects: Project[] = PROJECTS) {
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return undefined
  return projects[(index + 1) % projects.length]
}
