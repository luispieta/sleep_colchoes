import Icone from "../../componentes/Icone" 
import MenuLateralLink from "../../componentes/Link"
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
                <MenuLateralLink to="/paginaprincipal">
                    <Icone icone={<BsHouse size={25}/>} /> Painel
                </MenuLateralLink>
                <MenuLateralLink to="/pedido/listagempedido">
                    <Icone icone={<BsCart4 size={25}/>} /> Pedidos
                </MenuLateralLink>
                <MenuLateralLink to="/produto/listagemproduto">
                    <Icone icone={<BsBoxSeam size={25}/>} /> Produtos
                </MenuLateralLink>
                <MenuLateralLink to="/pessoa/listagempessoa">
                    <Icone icone={<BsPersonCircle size={25}/>} /> Clientes
                </MenuLateralLink>
                <MenuLateralLink to="/configuracoes">
                    <Icone icone={<BsGear size={25}/>} /> Configurções
                </MenuLateralLink>
            </nav>
            <nav className="menu-footer">
                <MenuLateralLink to="">
                    <Icone icone={ <BsDoorOpen size={25}/>} /> Sair
                </MenuLateralLink>
            </nav>
        </aside>
    )
}