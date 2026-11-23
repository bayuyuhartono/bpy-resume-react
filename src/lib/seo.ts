import { SITE } from "@/lib/constants"

export type PageMeta = {
  title: string
  description: string
  /** Path halaman, mis. "/" atau "/work/stagy". */
  path: string
  /** Path atau URL gambar Open Graph; default gambar OG situs. */
  image?: { src: string; width?: number; height?: number; alt: string }
  type?: "website" | "article" | "profile"
  /** true = jangan diindeks (mis. halaman 404). */
  noindex?: boolean
  /** Data terstruktur schema.org. */
  jsonLd?: Record<string, unknown>
}

/** Satu tag di <head>. `attrs` urut stabil supaya output prerender deterministik. */
export type HeadTag =
  | { tag: "title"; text: string }
  | { tag: "meta"; attrs: Record<string, string> }
  | { tag: "link"; attrs: Record<string, string> }
  | { tag: "script"; attrs: Record<string, string>; text: string }

/** Penanda tag yang dikelola SEO, supaya bisa diganti saat navigasi di browser. */
export const SEO_ATTR = "data-seo"

export function absoluteUrl(pathOrUrl: string, base: string = SITE.url) {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl
  return `${base}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`
}

export function buildHeadTags(meta: PageMeta): HeadTag[] {
  const url = absoluteUrl(meta.path)
  const image = meta.image ?? {
    src: SITE.ogImage.path,
    width: SITE.ogImage.width,
    height: SITE.ogImage.height,
    alt: SITE.ogImage.alt,
  }
  const imageUrl = absoluteUrl(image.src)

  const tags: HeadTag[] = [
    { tag: "title", text: meta.title },
    { tag: "meta", attrs: { name: "description", content: meta.description } },
    { tag: "link", attrs: { rel: "canonical", href: url } },
    { tag: "meta", attrs: { property: "og:type", content: meta.type ?? "website" } },
    { tag: "meta", attrs: { property: "og:site_name", content: SITE.name } },
    { tag: "meta", attrs: { property: "og:locale", content: SITE.locale } },
    { tag: "meta", attrs: { property: "og:title", content: meta.title } },
    { tag: "meta", attrs: { property: "og:description", content: meta.description } },
    { tag: "meta", attrs: { property: "og:url", content: url } },
    { tag: "meta", attrs: { property: "og:image", content: imageUrl } },
    { tag: "meta", attrs: { property: "og:image:alt", content: image.alt } },
    { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", attrs: { name: "twitter:title", content: meta.title } },
    { tag: "meta", attrs: { name: "twitter:description", content: meta.description } },
    { tag: "meta", attrs: { name: "twitter:image", content: imageUrl } },
  ]

  if (image.width && image.height) {
    tags.push(
      { tag: "meta", attrs: { property: "og:image:width", content: String(image.width) } },
      { tag: "meta", attrs: { property: "og:image:height", content: String(image.height) } },
    )
  }
  if (meta.noindex) {
    tags.push({ tag: "meta", attrs: { name: "robots", content: "noindex, follow" } })
  }
  if (meta.jsonLd) {
    tags.push({
      tag: "script",
      attrs: { type: "application/ld+json" },
      // Cegah "</script>" di dalam data menutup tag lebih awal
      text: JSON.stringify(meta.jsonLd).replace(/</g, "\\u003c"),
    })
  }
  return tags
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

const renderAttrs = (attrs: Record<string, string>) =>
  Object.entries({ ...attrs, [SEO_ATTR]: "" })
    .map(([key, value]) => (value === "" ? key : `${key}="${escapeHtml(value)}"`))
    .join(" ")

/** HTML untuk disisipkan ke <head> saat prerender. */
export function headTagsToHtml(tags: HeadTag[]) {
  return tags
    .map((t) => {
      if (t.tag === "title") return `<title ${SEO_ATTR}>${escapeHtml(t.text)}</title>`
      if (t.tag === "script") return `<script ${renderAttrs(t.attrs)}>${t.text}</script>`
      return `<${t.tag} ${renderAttrs(t.attrs)} />`
    })
    .join("\n    ")
}
