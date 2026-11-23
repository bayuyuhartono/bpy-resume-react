import { toast } from "sonner"
import { ProjectCard } from "@/components/molecules/project-card"
import { SiteHeader } from "@/components/organisms/site-header"
import { SiteLayout } from "@/components/templates/site-layout"
import {
  ABOUT,
  CLIENTS,
  EDUCATION,
  EXPERIENCE,
  LANGUAGES,
  PROCESS,
  RIBBONS,
} from "@/content/profile"
import { projectNumber } from "@/content/project-helpers"
import { PROJECTS } from "@/content/projects"
import { homeMeta } from "@/content/page-meta"
import { usePageMeta } from "@/hooks/use-page-meta"
import { ROUTES, SECTION_IDS, SITE } from "@/lib/constants"
import { AboutSection } from "./components/organisms/about-section"
import { ClientsStrip } from "./components/organisms/clients-strip"
import { ContactForm } from "./components/organisms/contact-form"
import { ContactSection } from "./components/organisms/contact-section"
import { EducationSection } from "./components/organisms/education-section"
import { ExperienceSection } from "./components/organisms/experience-section"
import { HeroSection } from "./components/organisms/hero-section"
import { HomeFooter } from "./components/organisms/home-footer"
import { ProcessSection } from "./components/organisms/process-section"
import { StackRibbons } from "./components/organisms/stack-ribbons"
import { WorkSection } from "./components/organisms/work-section"
import { buildMailto } from "./lib/build-mailto"
import type { ContactFormValues } from "./schemas/contact-schema"

export function HomeScreen() {
  usePageMeta(homeMeta())

  function handleContactSubmit(values: ContactFormValues) {
    window.location.assign(buildMailto(values))
    toast.success("Opening your email app…", {
      description: `If nothing opens, email me at ${SITE.email}.`,
    })
  }

  return (
    <SiteLayout
      header={<SiteHeader variant="home" activeSection={SECTION_IDS.top} overlay />}
      footer={<HomeFooter />}
    >
      <HeroSection />
      <StackRibbons {...RIBBONS} />
      <ClientsStrip clients={CLIENTS} />
      <AboutSection {...ABOUT} />
      <WorkSection>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            number={projectNumber(project.slug) ?? ""}
            href={ROUTES.project(project.slug)}
          />
        ))}
      </WorkSection>
      <ProcessSection steps={PROCESS} />
      <ExperienceSection items={EXPERIENCE} />
      <EducationSection education={EDUCATION} languages={LANGUAGES} />
      <ContactSection>
        <ContactForm onSubmit={handleContactSubmit} />
      </ContactSection>
    </SiteLayout>
  )
}
