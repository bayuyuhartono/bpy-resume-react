import type { RouteObject } from "react-router-dom"
import { RootLayout } from "@/routes/root-layout"
import { HomeScreen } from "@/screens/home"
import { NotFoundScreen } from "@/screens/not-found"

/** Konfigurasi route; dipakai router browser dan prerender (src/entry-server.tsx). */
export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    // Latar kosong sewarna halaman selama route lazy (/work/:slug) dimuat pertama kali
    hydrateFallbackElement: <div className="bg-background min-h-svh" />,
    children: [
      { path: "/", element: <HomeScreen /> },
      {
        path: "/work/:slug",
        lazy: async () => {
          const { ProjectScreen } = await import("@/screens/project")
          return { Component: ProjectScreen }
        },
      },
      { path: "*", element: <NotFoundScreen /> },
    ],
  },
]
