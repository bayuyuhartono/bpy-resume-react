import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MarqueeRibbon } from "./marquee-ribbon"

describe("MarqueeRibbon", () => {
  it("hanya salinan pertama yang terbaca screen reader", () => {
    const { container } = render(<MarqueeRibbon items={["React", "Laravel"]} copies={4} />)
    const copies = container.querySelectorAll(".type-display")
    expect(copies).toHaveLength(4)
    expect(copies[0]).not.toHaveAttribute("aria-hidden")
    for (const copy of Array.from(copies).slice(1))
      expect(copy).toHaveAttribute("aria-hidden", "true")
    // Salinan yang terbaca berisi semua item
    expect(copies[0]).toHaveTextContent(/React.*Laravel/)
  })

  it("arah kanan memakai animasi terbalik", () => {
    const { container } = render(<MarqueeRibbon items={["A"]} direction="right" />)
    expect(container.querySelector(".animate-marquee-reverse")).toBeInTheDocument()
  })
})
