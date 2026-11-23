/**
 * Entry untuk prerender (bukan dipakai di browser). Di-build dengan `vite build --ssr`,
 * lalu dipanggil oleh scripts/prerender.mjs untuk menulis HTML statis per halaman.
 */
import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router-dom"
import { INDEXABLE_PATHS, metaForPath } from "@/content/page-meta"
import { SITE } from "@/lib/constants"
import { buildHeadTags, headTagsToHtml } from "@/lib/seo"
import { routes } from "@/routes/routes"

const handler = createStaticHandler(routes)

export async function render(path: string) {
  const context = await handler.query(new Request(new URL(path, SITE.url)))
  if (context instanceof Response) throw new Error(`Redirect saat prerender ${path}`)

  const router = createStaticRouter(handler.dataRoutes, context)
  const html = renderToString(
    <StrictMode>
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </StrictMode>,
  )
  const head = headTagsToHtml(buildHeadTags(metaForPath(path)))
  return { html, head }
}

export const prerenderPaths = INDEXABLE_PATHS
export const siteUrl = SITE.url
