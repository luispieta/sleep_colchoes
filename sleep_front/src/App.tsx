import { useEffect, useState } from "react";
import PaginaPrincipal from "./paginas/menuPrincipal/PaginaPrincipal"
import "./App.scss"
import ListagemPessoa from "./paginas/pessoa/ListagemPessoa"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastrarPessoa from "./paginas/pessoa/CadastrarPessoa";
import ListagemProduto from "./paginas/produto/ListagemProduto";
import CadastroProduto from "./paginas/produto/CadastroProduto";

export default function App() {
  
  const api = "http://localhost:8090";

  const [pessoa, setPessoa] = useState([]);
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    fetch(`${api}/pessoas`)
      .then(resposta => resposta.json())
      .then(dados => {
          setPessoa(dados.content)
        });
  }, []);

  useEffect(() => {
    fetch(`${api}/produtos`)
      .then(resposta => resposta.json())
      .then(dados => {
          setProduto(dados.content)
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/paginaprincipal" element={<PaginaPrincipal/>}/>
          <Route path="/pessoa/listagempessoa" element={<ListagemPessoa pessoas={pessoa}/>}/>
          <Route path="/pessoa/cadastropessoa" element={<CadastrarPessoa />}/>
          <Route path="/pessoa/cadastropessoa/:id" element={<CadastrarPessoa />} />
          <Route path="/produto/listagemproduto" element={<ListagemProduto produtos={produto}/>}/>
          <Route path="/produto/cadastroproduto" element={<CadastroProduto />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}