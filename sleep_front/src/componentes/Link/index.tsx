import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

interface PropsMenuLateralLink{
    children?: ReactNode,
    to: string
}

export default function Link({ children, to }: PropsMenuLateralLink) {
    return(
        <NavLink to={to} end>
            {children}
        </NavLink>
    )
}
