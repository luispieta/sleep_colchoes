import Icone from "../Icone"    
import "./menuLateral.css"
import { BsBoxSeam, BsCart4, BsPersonCircle } from "react-icons/bs"
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
                    <Icone icone={<BsCart4  size={25}/>} /> Pedidos
                </a>
                <a href="#">
                    <Icone icone={<BsBoxSeam size={25}/>} /> Produtos
                </a>
                <a href="#">
                    <Icone icone={<BsPersonCircle size={25}/>}  /> Pessoa
                </a>
            </nav>
            <div className="menu-footer">
                <a href="#">
                    <Icone icone={<IoMdExit size={30}/>}/> Sair
                </a>
            </div>
        </aside>
    )
}