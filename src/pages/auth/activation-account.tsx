import { ArrowBigRight, HomeIcon } from "lucide-react";
import { NavLink } from "react-router";


export const ActivationPendingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-50 to-cyan-700">
            <div className="max-w-md bg-black/30 text-white text-center p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Account Activation Pending</h1>
                <p className="text-lg">
                    Your account activation process is pending. Please check your email
                    and click the confirmation link to activate your account.
                    <br />
                    OR
                    <br />
                    <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
                        <div className="text-cyan-400 underline italic  text-sm flex text-center ">
                          <ArrowBigRight/>  Redirect me to Gmail
                        </div>
                    </a>
                    <br />
                    
                    <NavLink to="/">
                    
                    <span className="flex gap-3 italic text-2xl under"><HomeIcon className="text-2xl mt-1.5"/>Go to Main Menu</span>
                    </NavLink>

                </p>
            </div>
        </div>
    );
};
