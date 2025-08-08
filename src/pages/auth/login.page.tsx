import { useState } from "react"
import LeftHandSideOfAuthPage from "./leftHandSideOfAuth"
import { PageTitle } from "@/components/page-title/PageTitle"
import { NavLink } from "react-router"

const LoginPage = () => {
    const [pageTitleData, setPageTitleData] = useState<string>("Login Page")

    return <>
        <div className="min-h-screen w-full bg-gradient-to-b from-cyan-600 to-cyan-50 flex flex-col md:flex-row">

            <LeftHandSideOfAuthPage />

            <div className="flex-1 pt-20 md:pd-10 overflow-auto">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 border border-cyan-300">
                    <div className="flex flex-row justify-between sm:flex-col md:flex-col lg:flex-row">
                        <div className="flex flex-row justify-between sm:flex-col md:flex-col lg:flex-row">
                            <PageTitle className="font-semibold not-italic" title="Login" />
                        </div>
                        <div className="flex space-x-2 mt-5 w-full justify-end">
                            <p>Have already an Account?</p>
                            <NavLink to="/register" ><span className="text-cyan-500 italic hover:underline hover:cursor-pointer hover:text-cyan-600">Sign in now!</span></NavLink>
                        </div>
                    </div>
                    <form className="space-y-4 mt-5">
                        <label htmlFor="Email">
                            <span className="text-sm font-medium text-gray-700"> Email </span>
                            <input
                                type="email"    
                                id="Email"
                                className="mt-0.5  rounded border-gray-300 shadow-sm sm:text-sm"
                            />
                        </label>
                    </form>
                </div>
            </div>

        </div>
    </>
}
export default LoginPage