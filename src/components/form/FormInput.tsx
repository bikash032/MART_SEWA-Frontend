
import { FormInputs } from "@/constant/constant"
import { Input } from "antd"





export interface IFormInput{
  type:FormInputs,
  id:string,
  className:string
    
} 

const FormInput=( {type,className="", id }:IFormInput)=>{
    return(<>
            
            <Input 
            type={type}
            id={id}
            className={`w-full rounded border border-cyan-700 shadow-md p-2 ${className}`}
            >
            
            </Input>
    </>)
}

export default FormInput