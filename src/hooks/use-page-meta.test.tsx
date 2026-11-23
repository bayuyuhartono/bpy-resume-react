import { render } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import type { PageMeta } from "@/lib/seo"
import { usePageMeta } from "./use-page-meta"

function Page({ meta }: { meta: PageMeta }) {
  usePageMeta(meta)
  return null
}

afterEach(() => document.head.querySelectorAll("[data-seo]").forEach((el) => el.remove()))

describe("usePageMeta", () => {
  it("menulis title, description dan canonical ke head", () => {
    render(<Page meta={{ title: "Halaman A", description: "Desk A", path: "/a" }} />)
    expect(document.title).toBe("Halaman A")
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
      "content",
      "Desk A",
    )
    expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute("href")).toMatch(
      /\/a$/,
    )
  })

  it("mengganti tag lama saat pindah halaman, tanpa duplikat", () => {
    const { rerender } = render(<Page meta={{ title: "A", description: "Desk A", path: "/a" }} />)
    rerender(<Page meta={{ title: "B", description: "Desk B", path: "/b" }} />)
    const descriptions = document.head.querySelectorAll('meta[name="description"]')
    expect(descriptions).toHaveLength(1)
    expect(descriptions[0]).toHaveAttribute("content", "Desk B")
    expect(document.head.querySelectorAll('link[rel="canonical"]')).toHaveLength(1)
  })
})
