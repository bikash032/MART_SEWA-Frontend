import { NavLink } from "react-router"


export interface ILinkComponents {
    to: string,
    className: string,
    title?: string

}

const LinkComponents = ({ to, className = "", title }: ILinkComponents) => {

    return (<>
        <NavLink
            title={title}
            to={to}
            className={className}
        >
        </NavLink>
    </>)
}
export default LinkComponents