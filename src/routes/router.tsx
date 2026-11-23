import { createBrowserRouter } from "react-router-dom"
import { HomeScreen } from "@/screens/home"
import { NotFoundScreen } from "@/screens/not-found"

export const router = createBrowserRouter([
  { path: "/", element: <HomeScreen /> },
  { path: "*", element: <NotFoundScreen /> },
])
