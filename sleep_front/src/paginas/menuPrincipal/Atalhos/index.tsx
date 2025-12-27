import { BsBoxSeam, BsCart4, BsPersonCircle, BsStarFill } from "react-icons/bs";
import Icone from "../../../componentes/Icone";
import Card from "../Card";
import "./atalho.scss"

export default function Atalhos() {
    return(
        <div className="atalhos">
            <div className="atalho-div">
                <footer className="atalho-footer">
                    <Icone icone={<BsStarFill size={25}/>}/> 
                    <span>Atalhos</span>    
                </footer>
                <main className="atalho-main">
                    <Card 
                        to={"/pedido/cadastropedido"} 
                        icone={<Icone icone={<BsCart4  size={50}/>} />} 
                        descricao={"Pedidos"}
                    />

                    <Card 
                        to={"/produto/cadastroproduto"} 
                        icone={<Icone icone={<BsBoxSeam size={50}/>} />} 
                        descricao={"Produto"}
                    />

                    <Card 
                        to={"/pessoa/cadastropessoa"} 
                        icone={<Icone icone={<BsPersonCircle size={50}/>} />} 
                        descricao={"Cliente"}
                    />
                </main>
            </div>
        </div>
    )
}