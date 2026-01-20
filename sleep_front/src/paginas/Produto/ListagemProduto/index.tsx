import { BsPencilFill } from "react-icons/bs"
import "./listagemProduto.scss"
import MenuLateral from "../../../layouts/MenuLateral"
import Listagens from "../../../componentes/Listagens"
import Filtro from "../../../componentes/Filtro"
import { useNavigate } from "react-router-dom"
import { listarProdutos } from "../../../services/produtoService"
import { useEffect, useState } from "react"
import type { ProdutoData } from "../../../types/produto/ProdutoData"

export default function ListagemProduto() {

    const navigate = useNavigate();

    function editarProduto(id: number) {
        navigate(`/produto/cadastroproduto/${id}`);
    }
        
    const [produtos, setProdutos] = useState<ProdutoData[]>([]);

    useEffect(() => {
        listarProdutos()
        .then(setProdutos)
        .catch(console.error);
    }, []);

        const [filtro, setFiltro] = useState({
        codigo: "",
        texto: "",
        lista: ""
    });

    const produtosFiltradas = produtos.filter(produto => {
        return (
            (filtro.codigo === "" || produto.id === Number(filtro.codigo)) &&
            (filtro.texto === "" || produto.nome.toLowerCase().includes(filtro.texto.toLowerCase())) &&
            (filtro.lista === "" || produto.tipoProduto.toLowerCase().includes(filtro.lista.toLowerCase()))
        );
    });

    const tipoDoProduto = Array.from(
        new Set(
            produtos
            .map(produto => produto.tipoProduto.toLowerCase())
            .filter(Boolean)
        )
    );

    return(
        <div className="listagem-produto">
            <MenuLateral/>
            <div className="produto-conteiner">
                <Filtro 
                    placeholder={"produto"}
                    labelTexto={"Produto"}
                    idTexto={"produto"}
                    labelLista={"Tipo do produto"}
                    idLista={"tipo-produto"}
                    descricao={"Novo produto"}
                    to={"/produto/cadastroproduto"} 
                    pesquisa={filtro} 
                    setPesquisa={setFiltro}
                    itens={tipoDoProduto}                
                />  
                <Listagens
                    colunas={[
                        { cabecalho: "Código" },
                        { cabecalho: "Nome" },
                        { cabecalho: "Marca" },
                        { cabecalho: "Tipo do Produto" },
                        { cabecalho: "Medida" },
                        { cabecalho: "Preço" },
                        { cabecalho: "Ações" }
                    ]}
                    data={produtosFiltradas}
                    renderizarLinha={(produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.marca}</td>
                            <td>{produto.tipoProduto}</td>
                            <td>{produto.comprimento}x{produto.largura}x{produto.altura}</td>
                            <td>R$ {produto.preco}</td>
                            <td className="acoes">
                                <BsPencilFill 
                                    size={16}
                                    onClick={() => editarProduto(produto.id)}
                                 />
                            </td>
                        </tr>
                    )}
                />
            </div>
        </div>

    )
} 