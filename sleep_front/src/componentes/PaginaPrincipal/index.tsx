import Card from "../Card"
import MenuLateral from "../MenuLateral"
import "./paginaPrincipal.scss"

export default function PaginaPrincipal () {
    return(
        <div className="pagina-principal">
            <MenuLateral/>
            <Card/>
        </div>
    )
}