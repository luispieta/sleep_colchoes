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
        <div className="listagem-pessoa">
            <MenuLateral/>
            <div className="pessoa-conteiner">
                <Filtro rotina={"produto"} label={"Produto"} descricao={"Novo produto"} />
                <Listagens
                    colunas={[
                        { cabecalho: "Código" },
                        { cabecalho: "Nome" },
                        { cabecalho: "Marca" },
                        { cabecalho: "Tipo do Produto" },
                        { cabecalho: "Medida" },
                        { cabecalho: "Altura" },
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
                            <td>{produto.medida}</td>
                            <td>{produto.altura}</td>
                            <td>{produto.preco}</td>
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