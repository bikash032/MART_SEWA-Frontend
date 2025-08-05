import { User } from "lucide-react"

import { Button } from "../ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card"
import { FcGoogle } from "react-icons/fc"
import { FaSquareFacebook, FaSquareWhatsapp } from "react-icons/fa6"
import { CiLinkedin } from "react-icons/ci"
import { Link } from "react-router"
export function UserAccount() {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link">
                    <div className=" hover:cursor-pointer">
                        <div>
                            <User className="size-7 ml-7" />
                        </div>
                        <div className=" hover:text-cyan-700">
                            Login / SignUp
                        </div>
                    </div>
                </Button>

            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between gap-4 bg-white">
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold"></h4>
                        <p className="text-sm ">
                            <div className="max-w-full justify-center text-center">
                                <nav>
                                    <Link to={"/register"}>
                                        <div className="font-medium  rounded-xl p-1 hover:cursor-pointer bg-cyan-600 text-white hover:bg-cyan-700 text-center w-full">
                                            Register / SignUp
                                        </div>
                                    </Link>
                                </nav>
                                <nav>
                                    <Link to={"/login"}>
                                        <div className="font-medium rounded-xl p-1 hover:cursor-pointer text-white bg-green-400 border border-teal-600 hover:bg-green-500 text-center w-full mt-5">
                                            Login / SignIn
                                        </div>
                                    </Link>
                                </nav>

                            </div>
                            <div className="flex items-center text-gray-400 text-sm">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="mx-2">or</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>
                            <div className=" ">
                                <div className="flex gap-1.5 justify-center text-center max-w-full ">
                                    <FcGoogle className="size-10 hover:cursor-pointer" />
                                    <FaSquareFacebook className="text-blue-700 size-10 hover:cursor-pointer" />
                                    <CiLinkedin className="text-blue-700 size-10 hover:cursor-pointer" />
                                    <FaSquareWhatsapp className=" text-green-700 size-10 hover:cursor-pointer" />
                                </div>
                            </div>
                            <div className="text-muted-foreground">
                                By clicking Sign In, Join Free or Continue with Facebook, Linkedin, Twitter, Google, I agree to the <span className="text-blue-700  underline hover:cursor-pointer"> User Agreement</span> and <span className="text-blue-700 underline hover:cursor-pointer">the Privacy Policy</span>
                            </div>
                            <div className="flex-grow border-t mt-2 border-gray-300"></div>
                            <div className="flex flex-col">
                                <ul>
                                    <li className="hover:text-cyan-600 hover:cursor-pointer ">Message</li>
                                    <li className="hover:text-cyan-600 hover:cursor-pointer ">Quotes</li>
                                    <li className="hover:text-cyan-600 hover:cursor-pointer ">Orders</li>
                                    <li className="hover:text-cyan-600 hover:cursor-pointer ">Favorites</li>
                                    <li className="hover:text-cyan-600 hover:cursor-pointer ">Browsing History</li>
                                </ul>
                            </div>
                            <div className="flex-grow border-t mt-2 border-gray-300"></div>
                            <div className="hover:text-cyan-600 hover:cursor-pointer">
                                Post Sourcing Request
                            </div>
                        </p>

                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
