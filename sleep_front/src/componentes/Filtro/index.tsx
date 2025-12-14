import { BsPlus } from "react-icons/bs";
import Botao from "../Botao";
import Campos from "../Campos";
import ListaSuspensa from "../ListaSuspensa";
import "./filtro.scss";
import Link from "../Link";

interface PropsFiltro{
    rotina: string,
    label: string,
}

export default function Filtro({rotina}: PropsFiltro) {
    return(
        <div className="filtro">
            <Campos
                tipo={"number"} 
                nome={"codigo"} 
                children={"Código"} 
                descricao={`Digite o código do ${rotina}`}
            />
            <Campos 
                tipo={"text"} 
                nome={"cliente"} 
                children={"Cliente"} 
                descricao={`Digite o nome do ${rotina}`}
            />
            <ListaSuspensa 
                nome={"cidade"} 
                children={"Cidade"} 
                itens={[]} 
            />
            <Link to={"/pessoa/cadastropessoa"}>
                <Botao tipo={"button"} icone={<BsPlus size={25}/>}>Nova pessoa</Botao>
            </Link>
        </div>
    )
}