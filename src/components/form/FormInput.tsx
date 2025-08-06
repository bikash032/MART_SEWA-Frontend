
import { FormInputs } from "@/constant/constant"
import { Input } from "antd"
import React from "react"





export interface IFormInput{
  type:FormInputs,
  id:string,
  className:string
  placeholder?:string
    
} 

const FormInput=( {type,className="", id, placeholder="" }:IFormInput)=>{
    return(<>
            
            <Input 
            placeholder={placeholder}
            type={type}
            id={id}
            className={`w-full rounded border border-cyan-700 shadow-md p-2 ${className}`}
            >
            
            </Input>
    </>)
}

export default FormInput