import { describe, expect, it } from "vitest"
import { buildMailto } from "./build-mailto"

const values = {
  name: "Ana & Co",
  email: "ana@example.com",
  projectType: "Mobile app",
  timeline: "Flexible",
  message: "Need an app?\nThanks",
} as const

describe("buildMailto", () => {
  it("mengarah ke alamat tujuan dengan subject dan body ter-encode", () => {
    const url = new URL(buildMailto(values, "me@example.com"))
    expect(url.protocol).toBe("mailto:")
    expect(url.pathname).toBe("me@example.com")
    expect(url.searchParams.get("subject")).toBe("Mobile app — Ana & Co")
    const body = url.searchParams.get("body")
    expect(body).toContain("Need an app?\nThanks")
    expect(body).toContain("Email: ana@example.com")
    expect(body).toContain("Timeline: Flexible")
  })

  it("tidak menulis baris timeline kalau kosong", () => {
    const url = new URL(buildMailto({ ...values, timeline: undefined }, "me@example.com"))
    expect(url.searchParams.get("body")).not.toContain("Timeline")
  })
})
