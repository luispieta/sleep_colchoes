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
  
  const api = "http://localhost:8090";

  const [pessoa, setPessoa] = useState([]);
  const [produto, setProduto] = useState([]);

  async function buscarProdutos() {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token não encontrado");
    }

    const response = await fetch(`${api}/produtos`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ${response.status} ao buscar produtos`);
    }

    return response.json();
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    buscarProdutos()
      .then(dados => setProduto(dados.content ?? dados))
      .catch(err => {
        console.error(err);
        alert("Sessão expirada, faça login novamente");
      });
  }, []);

  async function buscarPessoas() {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token não encontrado");
    }

    const response = await fetch(`${api}/pessoas`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ${response.status} ao buscar produtos`);
    }

    return response.json();
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    buscarPessoas()
      .then(dados => setPessoa(dados.content ?? dados))
      .catch(err => {
        console.error(err);
        alert("Sessão expirada, faça login novamente");
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
          <Route path="/produto/cadastroproduto/:id" element={<CadastroProduto />} />

          <Route path="/auth/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}