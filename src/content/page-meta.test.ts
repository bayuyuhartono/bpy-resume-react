import { describe, expect, it } from "vitest"
import { INDEXABLE_PATHS, metaForPath } from "./page-meta"
import { PROJECTS } from "./projects"

describe("metaForPath", () => {
  it("Home berisi data terstruktur Person dengan link sosial", () => {
    const meta = metaForPath("/")
    expect(meta.jsonLd).toMatchObject({ "@type": "Person", name: "Bayu Yuhartono" })
    expect((meta.jsonLd as { sameAs: string[] }).sameAs).toEqual(
      expect.arrayContaining([expect.stringContaining("linkedin.com")]),
    )
  })

  it("halaman project memakai judul, intro dan cover project", () => {
    const stagy = PROJECTS.find((p) => p.slug === "stagy")!
    const meta = metaForPath("/work/stagy")
    expect(meta.title).toContain(stagy.cardTitle)
    expect(meta.description).toBe(stagy.intro)
    expect(meta.image?.src).toBe(stagy.cover)
  })

  it("path tidak dikenal = 404 yang tidak diindeks", () => {
    expect(metaForPath("/work/tidak-ada").noindex).toBe(true)
    expect(metaForPath("/apa-saja").noindex).toBe(true)
  })

  it("daftar halaman yang di-prerender = Home + semua project", () => {
    expect(INDEXABLE_PATHS).toEqual(["/", ...PROJECTS.map((p) => `/work/${p.slug}`)])
  })
})
