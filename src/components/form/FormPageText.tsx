import React from "react"

interface IFormPageText {
    title: React.ReactNode
    className: string
}

export const FormPageText: React.FC<IFormPageText> = ({ title, className = "" }) => {
    return (<>
        <div className={`italic text-sm text-white mb-4 text-center ${className}`} >
          {title}
        </div>
    </>)
}
