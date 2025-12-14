import { BsPencilFill, BsTrashFill } from "react-icons/bs"
import "./listagemPessoa.scss"
import type { PessoaData } from "../../../types/pessoa/PessoaData"
import MenuLateral from "../../../layouts/MenuLateral"
import Listagens from "../../../componentes/Listagens"
import Filtro from "../../../componentes/Filtro"

interface PropsListagemPessoa {
    pessoas: PessoaData[],

}

export default function ListagemPessoa({pessoas}: PropsListagemPessoa) {
    return(
        <div className="listagem-pessoa">
            <MenuLateral/>
            <div className="pessoa-conteiner">
                <Filtro />
                <Listagens
                    titulo="Gerenciamento de Pessoas"
                    colunas={[
                        { cabecalho: "Código" },
                        { cabecalho: "Nome" },
                        { cabecalho: "CPF/CNPJ" },
                        { cabecalho: "Telefone" },
                        { cabecalho: "Email" },
                        { cabecalho: "Endereço Principal" },
                        { cabecalho: "Ações" }
                    ]}
                    data={pessoas}
                    renderizarLinha={(pessoa) => (
                        <tr key={pessoa.id}>
                            <td>{pessoa.id}</td>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.cpf}</td>
                            <td>{pessoa.telefone}</td>
                            <td>{pessoa.email}</td>
                            <td>
                                {pessoa.enderecoEntrega?.cidade} - {pessoa.enderecoEntrega?.uf}
                            </td>
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