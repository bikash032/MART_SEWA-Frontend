import {
    ArrowBigDown,
    Calculator,
    Calendar,
    ChevronDown,
    CreditCard,
    Search,
    Settings,
    Smile,
    User,
} from "lucide-react"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { HoverCard, HoverCardTrigger } from "../ui/hover-card"
import { Button } from "../ui/button"

export function SearchBox() {
    return (
        <div className="mt-4 w-5/11">
            <div className="flex items-center border-3 border-cyan-700 rounded-full overflow-hidden">
                {/* Dropdown */}
                
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button variant="link">
                                <div className=" hover:cursor-pointer">
                                    <div className=" opacity-55 flex  hover:text-cyan-700">
                                        Product
                                    <ChevronDown className="mt-1 ml-1"/>
                                    </div>
                                </div>
                            </Button>
                        </HoverCardTrigger>
                        </HoverCard >
              
                {/* Input */}
                <input
                    type="text"
                    className="flex-1 px-3 py-1 bg-white outline-none "
                    placeholder="Enter a keyword to search products"
                />
                {/* Camera Icon */}
                <button className="">
                    {/* Replace this span with an actual camera icon, e.g. from an icon library */}

                </button>
                {/* Search Button */}
                <button className="bg-cyan-700 size-12 w-2/17 ">
                    {/* Replace this span with an actual search icon */}
                    <Search className="text-white size-7 ml-5" />
                </button>
            </div>
        </div>





    )
}
