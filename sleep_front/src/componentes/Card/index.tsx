import { BsBoxSeam, BsCart4, BsPersonCircle } from "react-icons/bs";
import Icone from "../Icone";
import "./card.scss"

export default function Card () {
    return(
        <div className="card">
            <div className="rotina">
                <a href="#">
                    <Icone icone={<BsCart4  size={50}/>} /> Pedido
                </a>
            </div>
            <div className="rotina">
                <a href="#">
                    <Icone icone={<BsBoxSeam size={50}/>} /> Produto
                </a>
            </div>
            <div className="rotina">
                <a href="#">
                    <Icone icone={<BsPersonCircle size={50}/>}  /> Cliente
                </a>
            </div>
        </div>        
    )
}