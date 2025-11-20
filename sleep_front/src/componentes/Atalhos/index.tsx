import { BsStarFill } from "react-icons/bs";
import Icone from "../Icone";
import Card from "../Card";
import "./atalho.scss"

interface PropsAtalhos {
    atalho: object
}

export default function Atalhos({atalho}: PropsAtalhos) {
    return(
        <div className="atalhos">
            <div className="atalho-div">
                <footer className="atalho-footer">
                    <Icone icone={<BsStarFill size={25}/>}/> Atalhos
                </footer>
                <main className="atalho-main">
                    {atalho}
                    <Card/>
                </main>
            </div>
        </div>
    )
}