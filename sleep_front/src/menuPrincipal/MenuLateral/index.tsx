import Icone from "../../componentes/Icone"    
import "./menuLateral.scss"
import { BsBoxSeam, BsCart4, BsPersonCircle, BsGear, BsHouse } from "react-icons/bs"
import { IoMdExit } from "react-icons/io"

export default function () {
    return(
        <aside className="menu">
            <div className="menu-header">
                <div className="menu-logo">
                </div>
                <h2>Empresa ABC</h2>
            </div>
            <nav className="menu-nav">
                <a href="#">
                    <Icone icone={<BsHouse size={25}/>} /> Painel
                </a>
                <a href="#">
                    <Icone icone={<BsCart4  size={25}/>} /> Pedidos
                </a>
                <a href="#">
                    <Icone icone={<BsBoxSeam size={25}/>} /> Produtos
                </a>
                <a href="#">
                    <Icone icone={<BsPersonCircle size={25}/>} /> Clientes
                </a>
                <a href="#">
                    <Icone icone={<BsGear size={25}/>} /> Configurções
                </a>
            </nav>
            <div className="menu-footer">
                <a href="../../paginas/paginaLogin">
                    <Icone icone={<IoMdExit size={30}/>} /> Sair
                </a>
            </div>
        </aside>
    )
}