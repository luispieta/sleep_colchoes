import Botao from "../Botao";
import Icone from "../Icone";
import "./cabecalho.css"

export default function Cabecalho() {
    return(
        <div className="cabecalho">     
            <Icone></Icone>
            <Botao tipo="submit">Salvar</Botao>
        </div>
    )
}

