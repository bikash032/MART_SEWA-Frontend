import { ICreditionals } from "@/contract/auth.contract";
import { AuthContext } from "../auth.context";
import baseServices from "@/services/base.services";

export const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {

    const login = async (data: ICreditionals) => {
        try {
            const response = await baseServices.postRequest('auth/login', data)
            console.log("Login data response", response);

        } catch (exception) {
            console.log(exception);

        }
    }
    return (
        <AuthContext.Provider
            value={{
                login: login,
                loggedInUser: null
            }}>
            {children}
        </AuthContext.Provider>
    );
};

