import { ShoppingBasket, ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

export interface IPageTitleProps {
    title: string | React.ReactNode,
    className?: string

}

export interface ILinkComponentsProps {
    url: string,
    text: string | React.ReactNode,
    className?: string 
}

export const PageTitle = (props: Readonly<IPageTitleProps>) => {

    return (<>

        <h1 className={`font-extrabold text-4xl text-cyan-600 italic    ${props.title}` }>
           
            {props.title}
           
        </h1>

    </>)
}


export const LinkComponent = ({ url, text, className = "text-sm text-white font-semibold underline hover:cursor-pointer hover:text-cyan-800" }: any) => {

    return (<>
        <NavLink
            to={url}
            className={className}
        >
            {text}
        </NavLink>
    </>)
}
