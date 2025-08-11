import React from "react"
import { Label } from "../ui/label"

export interface IFormInputprops {
    htmlFor?: string,
    className?: string
    label: React.ReactNode
}


export const FormInputProps = ({ htmlFor, className = "w-full sm:w-1/2 lg:w-1/3 text-base sm:text-lg lg:text-xl font-medium text-cyan-900 ", label }: IFormInputprops) => {
    return (<>
        <Label
            htmlFor={htmlFor}
            className={className}

        >
            {label}

        </Label>
    </>)
}