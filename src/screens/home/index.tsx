import { DashboardLayout } from "@/components/templates/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function HomeScreen() {
  return (
    <DashboardLayout title="Home">
      <Card>
        <CardHeader>
          <CardTitle>Project siap dipakai</CardTitle>
          <CardDescription>
            Vite + React + Tailwind + shadcn/ui + TanStack Query + Zustand.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          Mulai edit di <code>src/screens/home/index.tsx</code>.
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
