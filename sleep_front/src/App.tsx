import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./paginas/Login";
import PaginaPrincipal from "./paginas/menuPrincipal/PaginaPrincipal";
import ListagemProduto from "./paginas/Produto/ListagemProduto";
import CadastroProduto from "./paginas/Produto/CadastroProduto";
import RotaPrivada from "./routes/RotaPrivada/index.tsx";
import ListagemPedido from "./paginas/Pedido/ListagemPedido/index.tsx";
import CadastroPedido from "./paginas/Pedido/CadastroPedido/index.tsx";
import ListagemPessoa from "./paginas/Pessoa/ListagemPessoa/index.tsx";
import CadastrarPessoa from "./paginas/Pessoa/CadastrarPessoa/index.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/auth/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/auth/login" replace />} />

        <Route element={<RotaPrivada />}>

          <Route path="/paginaprincipal" element={<PaginaPrincipal />} />

          <Route path="/pessoa/listagempessoa" element={<ListagemPessoa />} />
          <Route path="/pessoa/cadastropessoa" element={<CadastrarPessoa />} />
          <Route path="/pessoa/cadastropessoa/:id" element={<CadastrarPessoa />} />

          <Route path="/produto/listagemproduto" element={<ListagemProduto />} />
          <Route path="/produto/cadastroproduto" element={<CadastroProduto />} />
          <Route path="/produto/cadastroproduto/:id" element={<CadastroProduto />} />

          <Route path="/pedido/listagempedido" element={<ListagemPedido />} />
          <Route path="/pedido/cadastropedido" element={<CadastroPedido />} />
          <Route path="/pedido/cadastropedido/:id" element={<CadastroPedido />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}
