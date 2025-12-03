import { BsStarFill } from "react-icons/bs";
import Icone from "../../componentes/Icone";
import Card from "../Card";
import "./atalho.scss"

export default function Atalhos() {
    return(
        <div className="atalhos">
            <div className="atalho-div">
                <footer className="atalho-footer">
                    <Icone icone={<BsStarFill size={25}/>}/> Atalhos
                </footer>
                <main className="atalho-main">
                    <Card/>
                </main>
            </div>
        </div>
    )
}