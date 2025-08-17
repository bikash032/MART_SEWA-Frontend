// src/config/router.config.tsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


import LandingBody from "@/pages/Landing-front-page/LandingBody"
import LoginPage from "@/pages/auth/login.page"
import RegisterPage from "@/pages/auth/Register.page"
import AdminLayout from "@/components/pages/layout/AuthUserLayout"
import StickyLandingPageTop from "@/pages/Landing-front-page/StickyLandingTopPage"
import { Toaster } from "sonner"
import { ActivationPendingPage } from "@/pages/auth/activation-account"
const router = createBrowserRouter([
  {
path:"/account-activation",
element:(
  <>
  <ActivationPendingPage/>
  </>
)
  },
  {
    path: "/",
    element: (
      <>
        <StickyLandingPageTop/>
        <LandingBody />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <LoginPage/>
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
        element:""
      }
    ]
   
  },
])

export default function RouterConfig() {
  return(<>
  <Toaster/>
  <RouterProvider router={router} />
  </>) 
}
