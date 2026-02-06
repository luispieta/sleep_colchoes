import type { ReactNode } from "react";
import "./listaSuspensa.scss"

interface PropsListaSuspensa<T extends string> {
    nome: string;
    children: ReactNode;
    obrigatorio?: boolean;
    itens: T[];
    labels?: Record<T, string>;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    valor: T | "";
}

export default function ListaSuspensa<T extends string>({
    nome,
    children,
    obrigatorio,
    itens,
    labels,
    onChange,
    valor
}: PropsListaSuspensa<T>) {

    return (
        <div className="lista-suspensa">
            <label htmlFor={nome}>{children}</label>
            <select 
                name={nome} 
                id={nome}
                required={obrigatorio}
                onChange={onChange} 
                value={valor ?? ""}
            >
                <option value="">
                    Selecione
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