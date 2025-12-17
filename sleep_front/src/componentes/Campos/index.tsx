import type { ReactNode } from "react"
import "./campos.scss"

interface PropsCampos {
  tipo: string;
  nome: string;
  children: ReactNode;
  descricao?: string;
  obrigatorio?: boolean;
  valor?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Campos({
  tipo,
  nome,
  children,
  descricao,
  obrigatorio,
  valor,
  onChange
}: PropsCampos) {

  const frase = descricao ? `${descricao}...` : "";

  return (
    <div className="campo">
      <label htmlFor={nome}>{children}</label>
      <input
        type={tipo}
        name={nome}
        id={nome}
        placeholder={frase}
        required={obrigatorio}
        value={valor}
        onChange={onChange}
      />
    </div>
  );
}