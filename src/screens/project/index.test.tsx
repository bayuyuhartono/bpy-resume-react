import { screen } from "@testing-library/react"
import { Route, Routes } from "react-router-dom"
import { describe, expect, it } from "vitest"
import { renderWithProviders } from "@/test/render"
import { ProjectScreen } from "."

function renderAt(path: string) {
  return renderWithProviders(
    <Routes>
      <Route path="/work/:slug" element={<ProjectScreen />} />
    </Routes>,
    { route: path },
  )
}

describe("ProjectScreen", () => {
  it("menampilkan case study dengan nomor sesuai urutan", () => {
    renderAt("/work/juragan99")
    expect(screen.getByRole("heading", { level: 1, name: /bus booking app/i })).toBeInTheDocument()
    expect(screen.getByText(/case study 01 — juragan99 trans/i)).toBeInTheDocument()
  })

  it("halaman produk Stagy menampilkan galeri venue dan grid resell", () => {
    renderAt("/work/stagy")
    expect(screen.getByText(/product 02 — stagy/i)).toBeInTheDocument()
    expect(screen.getByRole("region", { name: /at the venue/i })).toBeInTheDocument()
    expect(screen.getByRole("region", { name: /built to resell/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /run stagy at your event/i })).toHaveAttribute(
      "href",
      "/#contact",
    )
  })

  it("link next project mengarah ke project berikutnya dan berputar ke awal", () => {
    renderAt("/work/event-rsvp")
    expect(screen.getByRole("link", { name: /bus booking app/i })).toHaveAttribute(
      "href",
      "/work/juragan99",
    )
  })

  it("case study biasa tidak punya galeri venue", () => {
    renderAt("/work/raja-konstruksi")
    expect(screen.queryByRole("region", { name: /at the venue/i })).not.toBeInTheDocument()
  })

  it("slug tidak dikenal menampilkan halaman 404", () => {
    renderAt("/work/tidak-ada")
    expect(screen.getByText(/error 404/i)).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute("href", "/")
  })
})
