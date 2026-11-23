import { screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { renderWithProviders } from "@/test/render"
import { ContactForm } from "./contact-form"

describe("ContactForm", () => {
  it("menampilkan pesan error saat field wajib kosong", async () => {
    const onSubmit = vi.fn()
    const { user } = renderWithProviders(<ContactForm onSubmit={onSubmit} />)

    await user.click(screen.getByRole("button", { name: /send message/i }))

    expect(await screen.findByText("Please enter your name")).toBeInTheDocument()
    expect(screen.getByText("Please enter your email")).toBeInTheDocument()
    expect(screen.getByText("Tell me a little about it")).toBeInTheDocument()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("menolak format email yang salah", async () => {
    const { user } = renderWithProviders(<ContactForm onSubmit={vi.fn()} />)

    await user.type(screen.getByLabelText(/email/i), "bukan-email")
    await user.click(screen.getByRole("button", { name: /send message/i }))

    expect(await screen.findByText("Please enter a valid email")).toBeInTheDocument()
  })

  it("mengirim nilai yang diisi", async () => {
    const onSubmit = vi.fn()
    const { user } = renderWithProviders(<ContactForm onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText(/full name/i), "Ana")
    await user.type(screen.getByLabelText(/email/i), "ana@example.com")
    await user.type(screen.getByLabelText(/tell me about it/i), "A booking app")
    await user.click(screen.getByRole("button", { name: /send message/i }))

    await vi.waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    expect(onSubmit.mock.calls[0][0]).toEqual({
      name: "Ana",
      email: "ana@example.com",
      projectType: "Full-time role",
      timeline: "As soon as possible",
      message: "A booking app",
    })
  })
})
