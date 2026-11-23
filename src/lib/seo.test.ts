import { describe, expect, it } from "vitest"
import { absoluteUrl, buildHeadTags, headTagsToHtml, type HeadTag } from "./seo"

const attr = (tags: HeadTag[], key: string, value: string) =>
  tags.find((t) => (t.tag === "meta" || t.tag === "link") && t.attrs[key] === value)

describe("seo", () => {
  it("absoluteUrl menggabungkan path dengan domain dan membiarkan URL penuh", () => {
    expect(absoluteUrl("/work/a", "https://x.dev")).toBe("https://x.dev/work/a")
    expect(absoluteUrl("https://cdn.dev/a.png", "https://x.dev")).toBe("https://cdn.dev/a.png")
  })

  it("canonical, og:url dan og:image berupa URL absolut", () => {
    const tags = buildHeadTags({
      title: "T",
      description: "D",
      path: "/work/a",
      image: { src: "/assets/a.jpg", alt: "A" },
    })
    expect(attr(tags, "rel", "canonical")).toMatchObject({
      attrs: { href: expect.stringMatching(/^https:\/\/.+\/work\/a$/) },
    })
    expect(attr(tags, "property", "og:image")).toMatchObject({
      attrs: { content: expect.stringMatching(/^https:\/\/.+\/assets\/a\.jpg$/) },
    })
  })

  it("robots noindex hanya muncul kalau diminta", () => {
    expect(
      attr(buildHeadTags({ title: "T", description: "D", path: "/" }), "name", "robots"),
    ).toBeUndefined()
    expect(
      attr(
        buildHeadTags({ title: "T", description: "D", path: "/x", noindex: true }),
        "name",
        "robots",
      ),
    ).toBeDefined()
  })

  it("JSON-LD tidak bisa menutup tag script lebih awal", () => {
    const tags = buildHeadTags({
      title: "T",
      description: "D",
      path: "/",
      jsonLd: { name: "</script><b>" },
    })
    const script = tags.find((t) => t.tag === "script")
    expect(script && "text" in script && script.text).not.toContain("</script>")
  })

  it("headTagsToHtml meng-escape isi atribut dan judul", () => {
    const html = headTagsToHtml([
      { tag: "title", text: "A & B <c>" },
      { tag: "meta", attrs: { name: "description", content: 'say "hi"' } },
    ])
    expect(html).toContain("<title data-seo>A &amp; B &lt;c&gt;</title>")
    expect(html).toContain('content="say &quot;hi&quot;"')
  })
})
