import { afterEach, describe, expect, it } from "vitest"
import { useUiStore } from "./use-ui-store"

const initial = useUiStore.getState()
afterEach(() => useUiStore.setState(initial, true))

describe("useUiStore", () => {
  it("menu mobile tertutup secara default", () => {
    expect(useUiStore.getState().mobileNavOpen).toBe(false)
  })

  it("setMobileNavOpen membuka dan menutup menu", () => {
    useUiStore.getState().setMobileNavOpen(true)
    expect(useUiStore.getState().mobileNavOpen).toBe(true)
    useUiStore.getState().setMobileNavOpen(false)
    expect(useUiStore.getState().mobileNavOpen).toBe(false)
  })
})
