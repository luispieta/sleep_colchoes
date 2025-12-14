import Atalhos from "../Atalhos"
import MenuLateral from "../../../layouts/MenuLateral"
import "./paginaPrincipal.scss"

export default function PaginaPrincipal () {
    return(
        <div className="pagina-principal">
            <MenuLateral/>
            
            <div className="conteudo-atalhos">
                <Atalhos/>
            </div>
        </div>
    )
}