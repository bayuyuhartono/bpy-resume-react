import { screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { PROJECTS } from "@/content/projects"
import { renderWithProviders } from "@/test/render"
import { HomeScreen } from "."

describe("HomeScreen", () => {
  it("menampilkan nama sebagai judul utama", () => {
    renderWithProviders(<HomeScreen />)
    expect(screen.getByRole("heading", { level: 1, name: /bayu yuhartono/i })).toBeInTheDocument()
  })

  it("menampilkan semua project dengan link ke halaman detail dan nomor berurutan", () => {
    renderWithProviders(<HomeScreen />)
    const work = document.getElementById("work")!
    const links = within(work).getAllByRole("link")
    expect(links).toHaveLength(PROJECTS.length)
    PROJECTS.forEach((project, i) => {
      expect(links[i]).toHaveAttribute("href", `/work/${project.slug}`)
      expect(links[i]).toHaveTextContent(`${String(i + 1).padStart(2, "0")} —`)
    })
  })

  it("tombol Download CV mengarah ke file CV", () => {
    renderWithProviders(<HomeScreen />)
    expect(screen.getByRole("link", { name: /download cv/i })).toHaveAttribute("href", "/cv.pdf")
  })
})
