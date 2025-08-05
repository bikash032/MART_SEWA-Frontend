// src/config/router.config.tsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


import LandingBody from "@/components/pages/LandingBody/LandingBody"
import LoginPage from "@/components/pages/auth/login.page"
import RegisterPage from "@/components/pages/auth/Register.page"
import AdminLayout from "@/components/pages/layout/AuthUserLayout"
import BrandListPage from "@/components/pages/brand/brandListPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <NavigationMenuDemo /> */}
        <LandingBody />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <LoginPage />
      </>
    ),
  },
  {
    path: "/admin",
    element: (
      <>
        <AdminLayout />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>

        <RegisterPage />
      </>
    ),
  },
  {
    path: "/",
    element: <AdminLayout />,
    children:[
      {
        path:"brands",
        element:<BrandListPage/>
      }
    ]
   
  },
])

export default function RouterConfig() {
  return <RouterProvider router={router} />
}
