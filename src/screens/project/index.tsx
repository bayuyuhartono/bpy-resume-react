import { useLocation, useParams } from "react-router-dom"
import { SiteFooterBar } from "@/components/molecules/site-footer-bar"
import { SiteHeader } from "@/components/organisms/site-header"
import { SiteLayout } from "@/components/templates/site-layout"
import { getNextProject, getProject, projectNumber } from "@/content/project-helpers"
import { notFoundMeta, projectMeta } from "@/content/page-meta"
import { usePageMeta } from "@/hooks/use-page-meta"
import { ROUTES, SECTION_IDS } from "@/lib/constants"
import { NotFoundScreen } from "@/screens/not-found"
import { NextProject } from "./components/organisms/next-project"
import { ProjectCover } from "./components/organisms/project-cover"
import { ProjectFeatures } from "./components/organisms/project-features"
import { ProjectIntro } from "./components/organisms/project-intro"
import { ProjectOverview } from "./components/organisms/project-overview"
import { ProjectStack } from "./components/organisms/project-stack"
import { ProjectStats } from "./components/organisms/project-stats"
import { ResellGrid } from "./components/organisms/resell-grid"
import { VenueGallery } from "./components/organisms/venue-gallery"

export function ProjectScreen() {
  const { slug } = useParams()
  const project = getProject(slug)
  const next = project && getNextProject(project.slug)
  const { pathname } = useLocation()

  usePageMeta(project ? projectMeta(project) : notFoundMeta(pathname))

  if (!project || !next) return <NotFoundScreen />

  return (
    <SiteLayout
      header={<SiteHeader variant="detail" activeSection={SECTION_IDS.work} />}
      footer={<SiteFooterBar className="pt-6" />}
    >
      <ProjectIntro project={project} number={projectNumber(project.slug) ?? ""} />
      <ProjectCover src={project.cover} alt={project.coverAlt} wide={project.coverWide} />
      <ProjectStats stats={project.stats} />
      <ProjectOverview overview={project.overview} role={project.role} />
      <ProjectFeatures {...project.features} />
      {project.venue && <VenueGallery shots={project.venue} />}
      {project.resell && <ResellGrid {...project.resell} />}
      <ProjectStack stack={project.stack} />
      <NextProject
        titleLines={next.nextTitleLines}
        href={ROUTES.project(next.slug)}
        ctaLabel={project.ctaLabel}
        ctaHref={ROUTES.section(SECTION_IDS.contact)}
      />
    </SiteLayout>
  )
}
