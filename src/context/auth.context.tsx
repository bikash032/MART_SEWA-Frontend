import { ICreditionals } from "@/contract/auth.contract";
import baseServices from "@/services/base.services";
import React, { createContext, useContext } from "react";

export const AuthContext = createContext({
    login: async (data: ICreditionals): Promise<void> => { },
    loggedInUser: null
})
export const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {

    const login = async (data: ICreditionals) => {
        try {
            const response = await baseServices.postRequest("auth/login", data)
            console.log(response);

        } catch (exception) {
            console.log("Exception for the login user!!!", exception);

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


export const useAuth = () => {
    const { login, loggedInUser } = useContext(AuthContext)
    return {
        login,
        loggedInUser
    }

}