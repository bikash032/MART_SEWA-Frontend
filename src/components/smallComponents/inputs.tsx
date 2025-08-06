
import { GenderEnum, UserRoles } from "@/constant/constant"
import *as React from "react"
import {useForm, useController, SubmitErrorHandler } from "react-hook-form"
interface IFormInput{
    name:string
    email:string
    password:string
    confirmPassword:string
    role:UserRoles
    address:string
    phone:string
    gender:GenderEnum
    dob:string
    image:string
}


export const RegisterForm=()=>{
const {control, handleSubmit}=useForm({
    defaultValues:{
        name,
        
        

    }
})    
    return(<>

    </>)
}