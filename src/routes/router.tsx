import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "@/routes/root-layout"
import { HomeScreen } from "@/screens/home"
import { NotFoundScreen } from "@/screens/not-found"

export const router = createBrowserRouter([
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
])
