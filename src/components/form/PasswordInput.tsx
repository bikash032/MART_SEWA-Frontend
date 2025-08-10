
import { FormInputs } from "@/constant/constant"
import { Input } from "../ui/input"
import { Controller, useController } from "react-hook-form"




export interface IFormInput {
  type: FormInputs,
  id: string,
  className: string
  placeholder?: string
  control: any
  name: string
  errorMsg: string| unknown | null| undefined


}
const FormInput = ({ className = "", id, placeholder = "", control, name, errorMsg=null }: IFormInput) => {

  const { field } = useController({
    name: name,
    control: control,
  })

  return (<>
<Controller
name={name}
control={control}
render={({field})=>(
    <Input
    placeholder={placeholder}
    type={FormInputs.PASSWORD}
    id={id}
    {...field}
    className={`w-full rounded border border-cyan-700 shadow-md p-2 ${className}`}
  >
  </Input>
  
)}
/>
<span className={`text-sm text-red-600`}>
      {errorMsg as string}
    </span>
  </>)
}

export default FormInput