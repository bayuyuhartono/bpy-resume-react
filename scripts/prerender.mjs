/**
 * Prerender halaman statis setelah `vite build`.
 *
 * Bot preview link (LinkedIn, WhatsApp, X) tidak menjalankan JavaScript, jadi tiap halaman perlu
 * HTML yang sudah berisi konten dan meta-nya sendiri. Script ini:
 *   1. memuat build SSR (dist-ssr/entry-server.js),
 *   2. merender tiap path ke dist/<path>/index.html (+ dist/404.html),
 *   3. menulis dist/sitemap.xml dan dist/robots.txt dari SITE.url.
 */
import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"

const root = path.resolve(import.meta.dirname, "..")
const distDir = path.join(root, "dist")
const ssrDir = path.join(root, "dist-ssr")

const { render, prerenderPaths, siteUrl } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
)

const template = await readFile(path.join(distDir, "index.html"), "utf8")
const SEO_BLOCK = /<!-- seo:start[\s\S]*?seo:end -->/
const ROOT_EMPTY = '<div id="root"></div>'
if (!SEO_BLOCK.test(template))
  throw new Error("Penanda <!-- seo:start/end --> tidak ada di dist/index.html")
if (!template.includes(ROOT_EMPTY)) throw new Error(`${ROOT_EMPTY} tidak ada di dist/index.html`)

async function writePage(urlPath, outFiles) {
  const { html, head } = await render(urlPath)
  const page = template.replace(SEO_BLOCK, head).replace(ROOT_EMPTY, `<div id="root">${html}</div>`)
  for (const outFile of outFiles) {
    await mkdir(path.dirname(outFile), { recursive: true })
    await writeFile(outFile, page)
  }
  console.log(`  ${urlPath.padEnd(28)} → ${outFiles.map((f) => path.relative(root, f)).join(", ")}`)
}

console.log("Prerender:")
for (const urlPath of prerenderPaths) {
  // Tulis <path>/index.html dan <path>.html: hosting statis berbeda-beda cara memetakan
  // /work/stagy ke file, jadi keduanya disediakan. Canonical tetap /work/stagy.
  const outFiles =
    urlPath === "/"
      ? [path.join(distDir, "index.html")]
      : [path.join(distDir, urlPath, "index.html"), path.join(distDir, `${urlPath}.html`)]
  await writePage(urlPath, outFiles)
}
await writePage("/404", [path.join(distDir, "404.html")])

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${prerenderPaths
  .map((p) => `  <url><loc>${siteUrl}${p}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n")}
</urlset>
`
await writeFile(path.join(distDir, "sitemap.xml"), sitemap)
await writeFile(
  path.join(distDir, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
)
console.log("  sitemap.xml, robots.txt")

await rm(ssrDir, { recursive: true, force: true })
