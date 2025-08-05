import Body1 from "../body/Body1"
import Body2 from "../body/Body2"

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