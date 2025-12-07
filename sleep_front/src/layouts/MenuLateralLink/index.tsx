import { NavLink } from "react-router-dom";
import "./menuLateralLink.scss";

interface PropsMenuLateralLink{
    children: any,
    to: string
}

export default function MenuLateralLink({ children, to }: PropsMenuLateralLink) {
    return(
        <NavLink to={to} end>
            {children}
        </NavLink>
    )
}
