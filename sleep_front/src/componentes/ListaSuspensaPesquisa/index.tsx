import { useState } from "react";
import "./listaSuspensaPesquisa.scss";

export interface ListaSuspensaPesquisaProps<T> {
  nome: string;
  label: string;
  itens: T[];
  obrigatorio?: boolean;
  getLabel: (item: T) => string;
  getKey: (item: T) => string | number;
  onSelect: (item: T) => void;
}

export default function ListaSuspensaPesquisa<T>({
    nome,
    label,
    itens,
    obrigatorio,
    getLabel,
    getKey,
    onSelect
}: ListaSuspensaPesquisaProps<T>) {
    const [busca, setBusca] = useState("");
    const [aberto, setAberto] = useState(false);

    const filtrados = itens.filter(item =>
        getLabel(item).toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div className="lista-suspensa-pesquisa">
            <label htmlFor={nome}>{label}</label>

            <input
                id={nome}
                name={nome}
                required={obrigatorio}
                placeholder="Digite para buscar"
                value={busca}
                onFocus={() => setAberto(true)}
                onChange={e => {
                setBusca(e.target.value);
                setAberto(true);
                }}
                onBlur={() => setTimeout(() => setAberto(false), 150)}
            />

            {aberto && filtrados.length > 0 && (
                <ul className="lista-suspensa-pesquisa">
                {filtrados.map(item => (
                    <li
                    key={getKey(item)}
                    onClick={() => {
                        setBusca(getLabel(item));
                        onSelect(item);
                        setAberto(false);
                    }}
                    >
                    {getLabel(item)}
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
}