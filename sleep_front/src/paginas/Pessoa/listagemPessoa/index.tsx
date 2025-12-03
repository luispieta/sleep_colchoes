import { BsPencilFill, BsTrashFill } from "react-icons/bs"
import "./listagemPessoa.scss"
import type { PessoaData } from "../../../types/pessoa/PessoaData"

interface PropsListagemPessoa {
    pessoas: PessoaData[],

}

export default function ListagemPessoa({pessoas}: PropsListagemPessoa) {
    return(
    <div>
        <table className="pessoa-table">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>CPF/CNPJ</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Endereço Principal</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {pessoas.map((pessoa: any) => (
                    <tr key={pessoa.id}>
                        <td>{pessoa.id}</td>
                        <td>{pessoa.nome}</td>
                        <td>{pessoa.cpf}</td>
                        <td>{pessoa.telefone}</td>
                        <td>{pessoa.email}</td>
                        <td>
                            {pessoa.enderecoEntrega.cidade} - {pessoa.enderecoEntrega.uf} 
                        </td>
                        <td className="acoes"><BsPencilFill size={20}/> <BsTrashFill size={20}/></td>            
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
} 