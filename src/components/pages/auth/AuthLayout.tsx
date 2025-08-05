import React, { useState } from "react"

export interface ISidePanelDataType{
    sidePanelTitle:React.ReactNode,
    sidePanelMessage:React.ReactNode
    pageTitle:React.ReactNode
}




const AuthLayout=()=>{
const [sidePanelData, setSidePanelData]=useState<ISidePanelDataType>(
    sidePanelTitle:"Onboard here!!!!",
    sidePanelMessage:``,
    pageTitle:<span>signIn/signUp</span>
)
return (<>
<div>
    <LeftSidePanel
    title={sidePanelData.side}
    />
</div>
    </>)
}
 export default AuthLayout