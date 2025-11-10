import { BsBoxSeam, BsCart4, BsPersonCircle } from "react-icons/bs";
import Icone from "../Icone";
import "./card.css"

export default function Card () {
    return(
        <div className="card">
            <div className="rotina">
                <a href="#">
                    <Icone icone={<BsCart4  size={50}/>} /> Pedidos
                </a>
            </div>
            <div className="rotina">
                <a href="#">
                    <Icone icone={<BsBoxSeam size={50}/>} /> Produtos
                </a>
            </div>
            <div className="rotina">
                <a href="#">
                    <Icone icone={<BsPersonCircle size={50}/>}  /> Pessoa
                </a>
            </div>
        </div>        
    )
}