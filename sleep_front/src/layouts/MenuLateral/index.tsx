import Icone from "../../componentes/Icone" 
import Link from "../../componentes/Link"
import "./menuLateral.scss"
import { BsBoxSeam, BsCart4, BsPersonCircle, BsGear, BsHouse, BsDoorOpen  } from "react-icons/bs"

export default function () {
    return(
        <aside className="menu">
            <div className="menu-header">
                <div className="menu-logo">
                </div>
                <h2>Empresa ABC</h2>
            </div>
            <nav className="menu-nav">
                <Link to="/paginaprincipal">
                    <Icone icone={<BsHouse size={25}/>} /> 
                    <span>Painel</span>
                </Link>
                <Link to="/pedido/listagempedido">
                    <Icone icone={<BsCart4 size={25}/>} /> 
                    <span>Pedidos</span>
                </Link>
                <Link to="/produto/listagemproduto">
                    <Icone icone={<BsBoxSeam size={25}/>} /> 
                    <span>Produtos</span>
                </Link>
                <Link to="/pessoa/listagempessoa">
                    <Icone icone={<BsPersonCircle size={25}/>} /> 
                    <span>Clientes</span>
                </Link>
                <Link to="/configuracoes">
                    <Icone icone={<BsGear size={25}/>} /> 
                    <span>Configurções</span>
                </Link>
            </nav>
            <nav className="menu-footer">
                <Link to="/login">
                    <Icone icone={ <BsDoorOpen size={25}/>} /> 
                    <span>Sair</span>
                </Link>
            </nav>
        </aside>
    )
}