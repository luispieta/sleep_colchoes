import { type ReactNode } from "react"
import "./botao.scss"

interface PropsBotao {
    children: ReactNode,
    tipo: "submit" | "reset" | "button"
    onClick?: () => void,
    icone?: ReactNode;

}

export default function Botao({children, tipo, onClick, icone}: PropsBotao) {
    return(
        <button onClick={onClick} type={tipo} className="botao">{icone}{children}</button>    
    )
}