import { useEffect, useState } from "react";
import PaginaPrincipal from "./paginas/menuPrincipal/PaginaPrincipal";
import "./App.scss";
import ListagemPessoa from "./paginas/Pessoa/listagemPessoa";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastrarPessoa from "./paginas/Pessoa/cadastrarPessoa";
import ListagemProduto from "./paginas/Produto/ListagemProduto";
import CadastroProduto from "./paginas/Produto/CadastroProduto";
import Login from "./paginas/Login";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/paginaprincipal" element={<PaginaPrincipal/>}/>

          <Route path="/pessoa/listagempessoa" element={<ListagemPessoa />}/>
          <Route path="/pessoa/cadastropessoa" element={<CadastrarPessoa />}/>
          <Route path="/pessoa/cadastropessoa/:id" element={<CadastrarPessoa />} />

          <Route path="/produto/listagemproduto" element={<ListagemProduto />}/>
          <Route path="/produto/cadastroproduto" element={<CadastroProduto />}/>
          <Route path="/produto/cadastroproduto/:id" element={<CadastroProduto />} />

          <Route path="/auth/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}