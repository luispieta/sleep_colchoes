import Link from "../../../componentes/Link";
import "./card.scss";

interface PropsCard {
    to: string;
    icone: React.ReactNode;
    descricao: string;
}

export default function Card({ to, icone, descricao }: PropsCard) {
    return (
        <Link to={to}>
            <div className="card">
                <div className="rotina">
                    {icone}
                    <span>{descricao}</span>
                </div>
            </div>
        </Link>
    );
}
