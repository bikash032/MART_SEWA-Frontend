import Body1 from "./LandingBodyParts/Body1"
import Body2 from "./LandingBodyParts/Body2"

const LandingBody = () => {
    return (
        <>
            <div className="  justify-between w-screen h-[100vh]">
 
                   <div>
                    <Body1/>
                   </div>
                   <div>
                    <Body2/>
                   </div>

            </div>
        </>
    )
}
export default LandingBody