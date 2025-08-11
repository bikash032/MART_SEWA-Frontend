import React from "react";
import Typical from "react-typical";

interface IFormPageText {
    title: string[]; 
    className?:string;
}
export const FormPageText: React.FC<IFormPageText> = ({ title, className = "" }) => {
    return (
        <div className={`italic text-5xl text-cyan-400 mb-4 text-center ${className}`}>
            <Typical
                steps={title.flatMap((t) => [t, 1000])} // each string shows for 1s
                loop={Infinity}
                wrapper="span"
            />
        </div>
    );
};
