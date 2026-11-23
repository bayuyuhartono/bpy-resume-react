import { useEffect } from "react"
import { buildHeadTags, SEO_ATTR, type PageMeta } from "@/lib/seo"

/**
 * Ganti tag SEO di <head> saat navigasi di browser. Untuk bot, tag yang sama sudah ada di HTML
 * hasil prerender (scripts/prerender.mjs), dari fungsi buildHeadTags yang sama.
 */
export function usePageMeta(meta: PageMeta) {
  // Serialisasi supaya efek hanya jalan saat isi meta berubah, bukan tiap render
  const key = JSON.stringify(meta)

  useEffect(() => {
    const head = document.head
    head.querySelectorAll(`[${SEO_ATTR}]`).forEach((el) => el.remove())

    for (const tag of buildHeadTags(JSON.parse(key) as PageMeta)) {
      if (tag.tag === "title") {
        document.title = tag.text
        continue
      }
      const el = document.createElement(tag.tag)
      for (const [name, value] of Object.entries(tag.attrs)) el.setAttribute(name, value)
      if (tag.tag === "script") el.textContent = tag.text
      el.setAttribute(SEO_ATTR, "")
      head.appendChild(el)
    }
  }, [key])
}
