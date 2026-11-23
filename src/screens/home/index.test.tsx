import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithProviders } from "@/test/render"
import { HomeScreen } from "."

describe("HomeScreen", () => {
  it("menampilkan judul halaman", () => {
    renderWithProviders(<HomeScreen />)
    expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeInTheDocument()
  })
})
