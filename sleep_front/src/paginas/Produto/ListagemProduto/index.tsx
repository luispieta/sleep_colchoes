import { BsPencilFill, BsTrashFill } from "react-icons/bs"
import "./listagemProduto.scss"
import MenuLateral from "../../../layouts/MenuLateral"
import Listagens from "../../../componentes/Listagens"
import Filtro from "../../../componentes/Filtro"
import type { ProdutoData } from "../../../types/produto/ProdutoData"

interface PropsListagemProduto {
    produtos: ProdutoData[]
}

export default function ListagemProduto({produtos}: PropsListagemProduto) {
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
                    data={produtos}
                    renderizarLinha={(produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.marca}</td>
                            <td>{produto.tipoProduto}</td>
                            <td>{produto.comprimento}x{produto.largura}x{produto.altura}</td>
                            <td>R$ {produto.preco}</td>
                            <td className="acoes">
                                <BsPencilFill size={16} /> <BsTrashFill size={16} />
                            </td>
                        </tr>
                    )}
                />
            </div>
        </div>

    )
} 