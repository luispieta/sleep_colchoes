import Atalhos from "../Atalhos"
import MenuLateral from "../MenuLateral"
import "./paginaPrincipal.scss"

export default function PaginaPrincipal () {
    return(
        <div className="pagina-principal">
            <MenuLateral/>
            <Atalhos/>
        </div>
    )
}