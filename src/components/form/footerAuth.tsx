import { Copyright } from "lucide-react"
import React from "react"

interface IFooterAuth{
title:React.ReactNode,
className:string,
datetype:Date


}

const FooterForAuth:React.FC<IFooterAuth>=({className, title, datetype})=>{
    return (<>
    <div className={className}  >
        < Copyright/>{title} 
    </div>
    {/* <div datatype={}> */}

    {/* </div> */}
    </>)
}
export default FooterForAuth