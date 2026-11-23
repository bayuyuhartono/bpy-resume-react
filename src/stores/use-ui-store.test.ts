import { afterEach, describe, expect, it } from "vitest"
import { useUiStore } from "./use-ui-store"

const initial = useUiStore.getState()
afterEach(() => useUiStore.setState(initial, true))

describe("useUiStore", () => {
  it("setTheme mengubah tema", () => {
    useUiStore.getState().setTheme("dark")
    expect(useUiStore.getState().theme).toBe("dark")
  })

  it("toggleSidebar membalik sidebarOpen", () => {
    useUiStore.getState().toggleSidebar()
    expect(useUiStore.getState().sidebarOpen).toBe(false)
  })
})
