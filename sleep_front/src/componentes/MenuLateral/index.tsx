import { IoCart, IoPersonCircleOutline } from "react-icons/io5"
import Icone from "../Icone"    
import "./menuLateral.css"
import { BsBoxSeam } from "react-icons/bs"
import { GiNightSleep } from "react-icons/gi"

export default function () {
    return(
        <div className="menu-lateral">
            <nav className="menu">
                <li className="rotina">
                    <Icone icone={<GiNightSleep size={25}/>} />
                    <a href="#">Início</a>
                </li>
                <li className="rotina">
                    <Icone icone={<IoCart size={25}/>} />
                    <a href="#">Pedido</a>
                </li>
                <li className="rotina">
                    <Icone icone={<BsBoxSeam size={25}/>} />
                    <a href="#">Estoque</a>
                </li>
                <li className="rotina">
                    <Icone icone={<IoPersonCircleOutline size={30}/>}  />
                    <a href="#">Pessoa</a>
                </li>
            </nav>
        </div>
    )
}