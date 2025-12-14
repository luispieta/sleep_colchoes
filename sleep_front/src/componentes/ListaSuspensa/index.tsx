import type { ReactNode } from "react";
import "./listaFlutuante.scss"

interface PropsListaSuspensa<T extends string> {
    nome: string;
    children: ReactNode;
    obrigatorio?: boolean;
    itens: T[];
    labels?: Record<T, string>;
}

export default function CampoFlutuante<T extends string>({
    nome,
    children,
    obrigatorio,
    itens,
    labels
}: PropsListaSuspensa<T>) {

    return (
        <div className="lista-suspensa">
            <label htmlFor={nome}>{children}</label>
            <select 
                name={nome} 
                id={nome}
                required={obrigatorio}
                defaultValue=""
            >
                <option value="" disabled>
                    Selecione...
                </option>

                {itens.map((item) => (
                    <option key={item} value={item}>
                        {labels?.[item] ?? item}
                    </option>
                ))}
            </select>
        </div>
    );
}