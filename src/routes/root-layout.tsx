import { Outlet, ScrollRestoration } from "react-router-dom"
import { useScrollToHash } from "@/hooks/use-scroll-to-hash"

export function RootLayout() {
  useScrollToHash()
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}
