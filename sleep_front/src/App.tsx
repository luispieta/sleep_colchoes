import { useEffect, useState } from "react";
import PaginaPrincipal from "./paginas/menuPrincipal/PaginaPrincipal"
import "./App.scss"
import ListagemPessoa from "./paginas/Pessoa/ListagemPessoa"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastrarPessoa from "./paginas/Pessoa/CadastrarPessoa";
import ListagemProduto from "./paginas/Produto/ListagemProduto";

export default function App() {
  
  const api = "http://localhost:8090";

  const [pessoas, setPessoas] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`${api}/pessoas`)
      .then(resposta => resposta.json())
      .then(dados => {
          setPessoas(dados.content)
        });
  }, []);

  useEffect(() => {
    fetch(`${api}/produtos`)
      .then(resposta => resposta.json())
      .then(dados => {
          setProdutos(dados.content)
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/paginaprincipal" element={<PaginaPrincipal/>}/>
          <Route path="/pessoa/listagempessoa" element={<ListagemPessoa pessoas={pessoas}/>}/>
          <Route path="/pessoa/cadastropessoa" element={<CadastrarPessoa />}/>
          <Route path="/produto/listagemproduto" element={<ListagemProduto produtos={produtos}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}