import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * Scroll ke elemen `#hash` setiap navigasi (termasuk klik ulang link yang sama, karena
 * `location.key` selalu berubah). Dipakai untuk link seperti `/#contact` dari halaman detail.
 */
export function useScrollToHash() {
  const { hash, key } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (!el) return
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" })
  }, [hash, key])
}
