import { BsPlus } from "react-icons/bs";
import Botao from "../Botao";
import Campos from "../Campos";
import ListaSuspensa from "../ListaSuspensa";
import "./filtro.scss";
import Link from "../Link";
import { useState } from "react";

interface PropsFiltro{
    placeholder: string,
    labelTexto: string,
    idTexto: string,
    labelLista: string,
    idLista: string,
    descricao: string,
    to: string
}

export default function Filtro({placeholder, descricao, labelTexto, idTexto, labelLista, idLista, to}: PropsFiltro) {

    const [pesquisa, setPesquisa] = useState("");

    return(
        <div className="filtro">
            <div className="linha">
                <Campos
                    tipo={"number"}
                    nome={"codigo"}
                    children={"Código"}
                    descricao={`Digite o código do ${placeholder}`} 
                    valor={pesquisa} 
                    onChange={setPesquisa}            
                />
                <Campos 
                    tipo={"text"}
                    nome={idTexto}
                    children={labelTexto}
                    descricao={`Digite o nome do ${placeholder}`} 
                    valor={pesquisa} 
                    onChange={setPesquisa}            

                />
                <ListaSuspensa 
                    nome={idLista} 
                    children={labelLista} 
                    itens={[]}
                    valor={pesquisa}
                    onChange={e => setPesquisa(e.target.value)}
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