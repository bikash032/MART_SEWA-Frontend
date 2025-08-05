import React from "react"
import { Label } from "../ui/label"

export interface IFormInputprops {
    htmlFor?: string,
    className?: string
    label: React.ReactNode
}


export const FormInputProps = ({ htmlFor, className = "w-1/3 text-xl font-medium text-cyan-900 ", label }: IFormInputprops) => {
    return (<>
        <Label
            htmlFor={htmlFor}
            className={className}

        >
            {label}

        </Label>
    </>)
}