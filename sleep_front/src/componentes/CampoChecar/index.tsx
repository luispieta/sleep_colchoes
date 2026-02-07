import "./campoChecar.scss";

interface PropsCampoChecar {
  nome: string;
  children: string;
  descricao?: string;
  checado: boolean;
  onChange: (value: boolean) => void;
}

export default function CampoChecar({
    nome,
    children,
    descricao,
    checado,
    onChange
}: PropsCampoChecar) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;

        onChange(checked);
    };

    return(
        <div className="campo-checar">
            <span className="nome-checar">{children}</span>

            <label className="checar">
                <input
                    type="checkbox"
                    name={nome}
                    id={nome}
                    placeholder={descricao}
                    checked={!!checado}
                    onChange={handleChange}
                />
                <span className="slider"></span>
            </label>
        </div>
    )
}