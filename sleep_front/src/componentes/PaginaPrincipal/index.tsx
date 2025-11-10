import Card from "../Card"
import MenuLateral from "../MenuLateral"
import "./paginaPrincipal.css"

export default function PaginaPrincipal () {
    return(
        <div className="pagina-principal">
            <MenuLateral/>
            <Card/>
        </div>
    )
}