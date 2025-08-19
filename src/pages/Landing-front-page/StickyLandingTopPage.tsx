import { PageTitle } from "@/components/page-title/PageTitle"
import { SearchBox } from "@/components/search/searchBox"
import { UserAccount } from "@/components/smallComponents/hoverCard"
import { MessageHover } from "@/components/smallComponents/messageHover"
import { LanguagesIcon,  ShoppingCart } from "lucide-react"

const StickyLandingPageTop = () => {

    return (<>
        <div className="flex ">

<<<<<<< HEAD
            <img className="h-30" src="https://thumbs.dreamstime.com/b/letter-ms-logotype-design-company-name-colored-blue-swoosh-vector-logo-business-identity-203870151.jpg" alt="" />

            <div className="w-2/11  mt-5">
                <PageTitle className="" title="MART SEWA"></PageTitle>
                <p className="font-extralight">Connecting People online to Market</p>
=======
            <img className="h-20" src="" alt="" />

            <div className="w-2/11  mt-5">
                <PageTitle className="" title="Pathivara Dental Clinic"></PageTitle>
                <p className="opac font-extralight">Smile till the teeth alive</p>
>>>>>>> 31eee3d90fa6e6983779154213d9a597b2d5a4d4
            </div>
            <SearchBox />

            <div className="flex mt-5 gap-2">
                <div >
                    <UserAccount />
                </div>
                <div  >
                    <MessageHover />
                </div>
                <div >
                    <div className=" hover:cursor-pointer hover:text-cyan-700">
                        <ShoppingCart className="ml-6" />

                        <div className=" hover:text-cyan-700 text-sm font-medium">
                            Inquiry Basket
                        </div>
                    </div>
                    
                </div>
                <div className="ml-5">
                    <div className=" hover:cursor-pointer hover:text-cyan-700">
                        <LanguagesIcon />

                        <div className=" hover:text-cyan-700 text-sm font-medium">
                           English
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    </>)
}

export default StickyLandingPageTop