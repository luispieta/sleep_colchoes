import { BsPlus } from "react-icons/bs";
import Botao from "../Botao";
import Campos from "../Campos";
import ListaSuspensa from "../ListaSuspensa";
import "./filtro.scss";

interface PropsFiltro{
    rotina: string,
    label: string,
}

export default function Filtro({rotina, }: PropsFiltro) {

    let contracoes = (rotina == "cliente") ? "de" : "do";  

    return(
        <div className="filtro">
            <Campos
                tipo={"number"} 
                nome={"codigo"} 
                children={"Código"} 
                descricao={`Digite o código ${contracoes} ${rotina}`}
            />
            <Campos 
                tipo={"text"} 
                nome={"cliente"} 
                children={"Cliente"} 
                descricao={`Digite o nome ${contracoes} ${rotina}`}
            />
            <ListaSuspensa 
                nome={"cidade"} 
                children={"Cidade"} 
                itens={[]} 
            />
            <Botao tipo={"button"} icone={<BsPlus size={25}/>}>Nova pessoa</Botao>
        </div>
    )
}