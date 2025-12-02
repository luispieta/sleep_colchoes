import { useEffect, useState } from "react";
import PaginaPrincipal from "../menuPrincipal/PaginaPrincipal"
import "./App.scss"
import ListagemPessoa from "./Pessoa/listagemPessoa"

export default function App() {
  
  const api = "http://localhost:8090";

  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
      fetch(`${api}/pessoas`)
          .then(resposta => resposta.json())
          .then(dados => {
              setPessoas(dados.content)
          });
  }, []);

  return (
    <>
      <div className="app-container">
        <PaginaPrincipal/>
        
        <h1>Gerenciamento de Pessoas</h1>

        <ListagemPessoa pessoas={pessoas}/>
      </div>
    </>
  )
}