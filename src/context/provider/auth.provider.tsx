import { ICreditionals, IUserProfile } from "@/contract/auth.contract";
import { AuthContext } from "../auth.context";
import baseServices from "@/services/base.services";
import { setLocalStorage } from "@/utilities/helpers";
import { toast } from "sonner";
import { useState } from "react";




export const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [loggedInUser, setloggedInUser]=useState<IUserProfile | null>(null) 
    const login = async (data: ICreditionals):Promise<IUserProfile | undefined> => {
        try {
            const response = await baseServices.postRequest('auth/login', data)

            if (response.data) {
                setLocalStorage("_at_46", response.data.accessToken)
                setLocalStorage("_rt_46", response.data.refreshToken)
            }
            let userData= await baseServices.getRequest("auth/me")
            setloggedInUser(userData.data as IUserProfile) 

            // toast.success("Succesfully Logged In", {description:"Welcome to Your own Mart sewa!! Lets explore the world!!!!"})           

            return userData.data as IUserProfile

        } catch (exception: any) {
            toast.error("Login Failed", { description: exception.response?.message })
        }
    }
    return (
        <AuthContext.Provider
            value={{
                login: login,
                loggedInUser: loggedInUser
            }}>
            {children}
        </AuthContext.Provider>
    );
};

