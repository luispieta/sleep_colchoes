import { BsPlus } from "react-icons/bs";
import Botao from "../Botao";
import Campos from "../Campos";
import ListaSuspensa from "../ListaSuspensa";
import "./filtro.scss";
import Link from "../Link";

interface PesquisaState {
    codigo: string;
    texto: string;
    lista: string;
}

interface PropsFiltro{
    placeholder: string;
    labelTexto: string;
    idTexto: string;
    labelLista: string;
    idLista: string;
    descricao: string;
    to: string;
    pesquisa: PesquisaState;
    setPesquisa: React.Dispatch<React.SetStateAction<PesquisaState>>;
    itens: string[];
}

export default function Filtro({
    placeholder, 
    descricao, 
    labelTexto, 
    idTexto, 
    labelLista, 
    idLista, 
    to,
    pesquisa,
    setPesquisa,
    itens
}: PropsFiltro) {

    return(
        <div className="filtro">
            <div className="linha">
                <Campos
                    tipo={"number"}
                    nome={"codigo"}
                    children={"Código"}
                    descricao={`Digite o código do ${placeholder}`} 
                    valor={pesquisa.codigo}
                    onChange={(valor) =>
                        setPesquisa({ ...pesquisa, codigo: valor })
                    }
                />
                <Campos 
                    tipo={"text"}
                    nome={idTexto}
                    children={labelTexto}
                    descricao={`Digite o nome do ${placeholder}`} 
                    valor={pesquisa.texto}
                    onChange={(valor) =>
                        setPesquisa({ ...pesquisa, texto: valor })
                    }         

                />
                <ListaSuspensa 
                    nome={idLista} 
                    children={labelLista} 
                    itens={itens}
                    valor={pesquisa.lista}
                    onChange={(e) =>
                        setPesquisa({ ...pesquisa, lista: e.target.value })
                    }
                />

                <div className="botao-filtro">
                    <Link to={to}>
                        <Botao tipo={"button"} icone={<BsPlus size={25}/>}>{descricao}</Botao>
                    </Link>
                </div>
            </div>
        </div>
    )
}