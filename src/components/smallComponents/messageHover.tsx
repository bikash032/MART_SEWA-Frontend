import { MessageSquare } from "lucide-react"

import { Button } from "../ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card"
import { Link } from "react-router"
export function MessageHover() {
    return (
        <HoverCard>
            <HoverCardTrigger className="w-full" asChild>
                <Button variant="link">
                    <div className=" hover:cursor-pointer mt-2">
                        <div>
                            <MessageSquare className="size-6 ml-5" />
                        </div>
                        <div className="text-sm hover:text-cyan-700">
                           Messages
                        </div>
                    </div>
                </Button>

            </HoverCardTrigger>
            <HoverCardContent className="w-60">
                <div className="flex justify-between gap-4 bg-white">
                    <div className="space-y-1">
                        <h4 className="text-sm font-extralight">Sign in to view the new messages </h4>
                        <p className="text-sm  ">
                            <div className="max-w-full  justify-center text-center mt-5">
                                <nav>
                                    <Link to={"/register"}>
                                        <div className="font-medium rounded-xl p-1 hover:cursor-pointer bg-cyan-600 text-white hover:bg-cyan-700 text-center w-full">
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
                            
                        </p>

                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
