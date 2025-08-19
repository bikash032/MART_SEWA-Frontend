<<<<<<< HEAD
import { ICreditionals, IUserProfile } from "@/contract/auth.contract";
import baseServices from "@/services/base.services";
import { getCookie, setCookie, setLocalStorage } from "@/utilities/helpers";
import React, { createContext, useContext, useState } from "react";
import { toast } from "sonner";

// const navigate= useNavigate()        
export const AuthContext = createContext({
    login: async (data: ICreditionals): Promise<void> => { },
    loggedInUser: null
})

export const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {

    const [loggedInUser, setLoggedInUser] = useState<IUserProfile | null>(null)
    const login = async (data: ICreditionals) => {
        try {
            const response = await baseServices.postRequest("auth/login", data)
            console.log(response);
            if (response.data) {
                setLocalStorage("_at_46", response.data.accessToken)
                setLocalStorage("_rt_46", response.data.refreshToken)
            }
            toast.success("welcome to Mart Sewa Explorer", { description: "Get unlimited explore to Mart Sewa journey" })
            // navigate("/admin")
        } catch (exception: any) {
            console.log("Exception for the login user!!!", exception);
            toast.error("Sorry!! Login Failed", { description: `${exception.response?.message}` })

        }
    }
    return <>
        <AuthContext.Provider value={
            {
                login: login,
                loggedInUser: null
            }

        }>
            {children}
        </AuthContext.Provider>
    </>
}


export const useAuth: any = () => {
    const { login, loggedInUser } = useContext(AuthContext)
    return {
        login,
        loggedInUser
    }

}
=======
import { createContext } from "react";

interface IAuthContext {
  login: (data: any) => void; // better to use ICreditionals here if shared
  loggedInUser: any | null;  // replace `any` with your User type
}

export const AuthContext = createContext<IAuthContext>({
  login: () => {},
  loggedInUser: null,
});
>>>>>>> 31eee3d90fa6e6983779154213d9a597b2d5a4d4
