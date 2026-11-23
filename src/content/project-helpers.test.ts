import { describe, expect, it } from "vitest"
import { PROJECTS } from "./projects"
import { getNextProject, getProject, projectNumber } from "./project-helpers"

describe("project helpers", () => {
  it("nomor project mengikuti urutan data", () => {
    expect(projectNumber("juragan99")).toBe("01")
    expect(projectNumber("stagy")).toBe("02")
    expect(projectNumber("event-rsvp")).toBe("06")
  })

  it("next project berputar ke project pertama setelah yang terakhir", () => {
    expect(getNextProject("juragan99")?.slug).toBe("stagy")
    expect(getNextProject("event-rsvp")?.slug).toBe("juragan99")
  })

  it("slug yang tidak dikenal mengembalikan undefined", () => {
    expect(getProject("tidak-ada")).toBeUndefined()
    expect(projectNumber("tidak-ada")).toBeUndefined()
    expect(getNextProject("tidak-ada")).toBeUndefined()
  })

  it("setiap slug unik dan setiap project punya 3 stat", () => {
    const slugs = PROJECTS.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const p of PROJECTS) expect(p.stats).toHaveLength(3)
  })
})
