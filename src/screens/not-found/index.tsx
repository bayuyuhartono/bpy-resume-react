import { Link } from "react-router-dom"
import { DashboardLayout } from "@/components/templates/dashboard-layout"
import { Button } from "@/components/ui/button"

export function NotFoundScreen() {
  return (
    <DashboardLayout title="Halaman tidak ditemukan">
      <p className="text-muted-foreground text-sm">Halaman yang kamu cari tidak ada.</p>
      <Button asChild>
        <Link to="/">Kembali ke Home</Link>
      </Button>
    </DashboardLayout>
  )
}
