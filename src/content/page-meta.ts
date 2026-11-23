import { getProject } from "@/content/project-helpers"
import { PROJECTS } from "@/content/projects"
import { ROUTES, SITE, SOCIAL_LINKS } from "@/lib/constants"
import { absoluteUrl, type PageMeta } from "@/lib/seo"
import type { Project } from "@/types/content"

export function homeMeta(): PageMeta {
  return {
    title: SITE.title,
    description: SITE.description,
    path: ROUTES.home,
    type: "profile",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: SITE.name,
      jobTitle: SITE.role,
      url: absoluteUrl(ROUTES.home),
      image: absoluteUrl(SITE.ogImage.path),
      email: `mailto:${SITE.email}`,
      worksFor: { "@type": "Organization", name: SITE.worksFor },
      address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
      sameAs: SOCIAL_LINKS.filter((link) => link.href.startsWith("http")).map((link) => link.href),
    },
  }
}

export function projectMeta(project: Project): PageMeta {
  const kind = project.kind === "product" ? "Product" : "Case study"
  return {
    title: `${project.cardTitle} – ${kind} – ${SITE.name}`,
    description: project.intro,
    path: ROUTES.project(project.slug),
    type: "article",
    image: { src: project.cover, alt: project.coverAlt },
  }
}

export function notFoundMeta(path: string): PageMeta {
  return {
    title: `Page not found – ${SITE.name}`,
    description: "The page may have moved, or the link has a typo.",
    path,
    noindex: true,
  }
}

/** Meta untuk path apa pun; dipakai script prerender. */
export function metaForPath(path: string): PageMeta {
  if (path === ROUTES.home) return homeMeta()
  const match = /^\/work\/([^/]+)$/.exec(path)
  const project = match ? getProject(match[1]) : undefined
  return project ? projectMeta(project) : notFoundMeta(path)
}

/** Halaman yang di-prerender dan masuk sitemap (404 di-prerender terpisah). */
export const INDEXABLE_PATHS = [ROUTES.home, ...PROJECTS.map((p) => ROUTES.project(p.slug))]
