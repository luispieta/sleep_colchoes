import "./campos.scss";
import { mascaras } from "./mascaras";

interface PropsCampos {
  tipo?: React.HTMLInputTypeAttribute;
  mascara?: keyof typeof mascaras;
  nome: string;
  children: string;
  descricao?: string;
  obrigatorio?: boolean;
  valor: string;
  onChange: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Campos({
  tipo = "text",
  mascara,
  nome,
  children,
  descricao,
  obrigatorio,
  valor,
  onChange,
  onBlur
}: PropsCampos) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (mascara && mascaras[mascara]) {
      onChange(mascaras[mascara](value));
    } else {
      onChange(value);
    }
  };

  return (
    <div className="campo">
      <label htmlFor={nome}>
        {children} {obrigatorio && "*"}
      </label>

      <input
        type={tipo}
        name={nome}
        id={nome}
        placeholder={descricao}
        required={obrigatorio}
        value={valor ?? ""}
        onChange={handleChange}
        inputMode={
          mascara === "cpf" || mascara === "cep" || mascara === "telefone"
            ? "numeric"
            : undefined
        }
        onBlur={onBlur}
      />
    </div>
  );
}