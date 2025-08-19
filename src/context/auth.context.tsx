import { createContext } from "react";

interface IAuthContext {
  login: (data: any) => void; // better to use ICreditionals here if shared
  loggedInUser: any | null;  // replace `any` with your User type
}

export const AuthContext = createContext<IAuthContext>({
  login: () => {},
  loggedInUser: null,
});
