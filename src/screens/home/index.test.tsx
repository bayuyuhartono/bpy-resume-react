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

  it("semua link WhatsApp (hero, contact, footer) membuka chat dengan pesan pembuka", () => {
    renderWithProviders(<HomeScreen />)
    const links = screen.getAllByRole("link", { name: /whatsapp/i })
    const chatLinks = links.filter((link) => !link.getAttribute("href")?.startsWith("/work/"))
    expect(chatLinks).toHaveLength(3)
    chatLinks.forEach((link) => {
      expect(link).toHaveAttribute(
        "href",
        "https://wa.me/6281288855773?text=Hi%20Bayu%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk.",
      )
      expect(link).toHaveAttribute("target", "_blank")
    })
  })
})
