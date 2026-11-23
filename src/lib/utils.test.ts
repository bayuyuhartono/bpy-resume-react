import { describe, expect, it } from "vitest"
import { cn } from "./utils"

describe("cn", () => {
  it("tidak membuang warna saat digabung dengan ukuran font custom", () => {
    expect(cn("text-primary-text", "text-label-sm md:text-label")).toBe(
      "text-primary-text text-label-sm md:text-label",
    )
  })

  it("ukuran font custom tetap saling menimpa", () => {
    expect(cn("text-label", "text-label-sm")).toBe("text-label-sm")
    expect(cn("text-sm", "text-label")).toBe("text-label")
  })
})
