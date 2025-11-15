import { type ReactNode } from "react"
import "./botao.scss"

interface PropsBotao {
    children: ReactNode,
    tipo: "submit" | "reset" | "button"
    onClick?: () => void
}

export default function Botao({children, tipo, onClick}: PropsBotao) {
    return(
        <button onClick={onClick} type={tipo} className="botao">{children}</button>    
    )
}