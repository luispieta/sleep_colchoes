import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";
import "./link.scss";

interface PropsMenuLateralLink{
    children?: ReactNode,
    to: string
}

export default function Link({ children, to }: PropsMenuLateralLink) {
    return(
        <NavLink 
            to={to} 
            className={({ isActive }) =>
                isActive ? "menu-link ativo" : "menu-link"
            }
        >
            {children}
        </NavLink>
    )
}
