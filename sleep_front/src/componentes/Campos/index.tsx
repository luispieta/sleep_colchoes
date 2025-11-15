import type { ReactNode } from "react"
import "./campos.scss"

interface PropsCampos {
    tipo: string,
    nome: string,
    children: ReactNode,
    descricao?: string,
    obrigatorio?: boolean
}

export default function Campos({tipo, nome, children, descricao, obrigatorio}: PropsCampos) {

    const frase = `${descricao}...`

    return(
        <div className="campo">
            <label htmlFor={nome}>{children}</label>
            <input 
                type={tipo} 
                name={nome} 
                id={nome} 
                placeholder={frase} 
                required={obrigatorio} 
            />
        </div>
    )
}