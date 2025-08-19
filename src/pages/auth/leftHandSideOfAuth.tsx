import { FormPageText } from "@/components/form/BlinkingText"
import { PageTitle } from "@/components/page-title/PageTitle"
const LeftHandSideOfAuthPage = () => {
    return <> 
        {/* Sidebar */}
        <div className="md:w-2/5 w-full bg-gradient-to-b from-cyan-600 to-cyan-50 flex flex-col justify-center items-center p-6">
            <div className=" w-40 h-40">
                <img className="rounded-full" src="https://thumbs.dreamstime.com/b/letter-ms-logotype-design-company-name-colored-blue-swoosh-vector-logo-business-identity-203870151.jpg" alt="" />
            </div>
            <PageTitle className="text-white text-center" title="Welcome to Pathivara Dental Clinic !!!" />
            <p className="italic text-sm text-white mb-4 text-center">
            Your Smile is our Promise!!!
            </p>
            <div className="w-full  rounded-xl overflow-hidden shadow-lg">
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/001/759/032/small_2x/futuristic-shopping-concept-free-photo.jpg"
                    className="w-full h-60 object-cover"
                    alt="E-commerce"
                />
            </div>
            <FormPageText
                title={["⚡ Welocome !!!", "✨Pathivera Dental clinic!", "🔥 Wow!"]}
                className="text-yellow-400"
            />
        </div>
    </>
}

export default LeftHandSideOfAuthPage 