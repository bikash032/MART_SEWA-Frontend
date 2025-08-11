import { GenderEnum, UserRoles } from "@/constant/constant"
import * as Yup from "yup"

export interface IRegisterData {
    name: string
    email: string
    password: string
    confirmPassword: string
    role: string
    gender: string
    phone?: string
    address?: string
    dob?: string
    image?: any
}

export interface ICreditionals {
    email: string | null
    password: String | null


}

export const CreditionalDTO = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(5).required()
})

export const RegisterDTO = Yup.object().shape({
    name: Yup.string().required("Username is required field"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .min(5)
        .max(50)
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
    role: Yup.string()
        .matches(/^(seller|customer|admin)$/, "Invalid role")
        .default(UserRoles.CUSTOMER),
    gender: Yup.string()
        .matches(/^(male|female|other)$/, "Invalid gender")
        .default(GenderEnum.MALE),
    phone: Yup.string().optional(),
    address: Yup.string().optional(),
    dob: Yup.string().optional(),
    image: Yup.mixed()
});


