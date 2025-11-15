import type { ReactNode } from "react"
import "./ListaFlutuante.scss"

interface PropsListaSuspensa {
    nome: string,
    children: ReactNode,
    obrigatorio: boolean
    itens: any
}

export default function CampoFlutuante({nome, children, obrigatorio, itens}: PropsListaSuspensa) {    
    return(
        <div className="lista-suspensa">
            <label htmlFor={nome}>{children}</label>
            <select 
                name={nome} 
                id={nome}
                required={obrigatorio}
            >
                {itens.map((item: any) => (
                    <option key={item}>{item    }</option>
                ))}
            </select>
        </div>
    )
}