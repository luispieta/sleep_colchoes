import { BsPencilFill } from "react-icons/bs"
import "./listagemPessoa.scss"
import MenuLateral from "../../../layouts/MenuLateral"
import Listagens from "../../../componentes/Listagens"
import Filtro from "../../../componentes/Filtro"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { listarPessoas } from "../../../services/pessoaService"
import type { PessoaData } from "../../../types/pessoa/PessoaData"

export default function ListagemPessoa() {

    const navigate = useNavigate();

    function editarPessoa(id: number) {
        navigate(`/pessoa/cadastropessoa/${id}`);
    }
        
    const [pessoas, setPessoas] = useState<PessoaData[]>([]);

    useEffect(() => {
        listarPessoas()
        .then(setPessoas)
        .catch(console.error);
    }, []);

    return(
        <div className="listagem-pessoa">
            <MenuLateral/>
            <div className="pessoa-conteiner">
                <Filtro 
                    placeholder={"cliente"}
                    labelTexto={"Cliente"}
                    idTexto={"cliente"}
                    labelLista={"Cidade"}
                    idLista={"cidade"}
                    descricao={"Nova pessoa"} 
                    to={"/pessoa/cadastropessoa"}
                />                
                <Listagens
                    colunas={[
                        { cabecalho: "Código" },
                        { cabecalho: "Nome" },
                        { cabecalho: "CPF/CNPJ" },
                        { cabecalho: "Telefone" },
                        { cabecalho: "Email" },
                        { cabecalho: "Cidade" },
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
                                <BsPencilFill 
                                    size={16} 
                                    onClick={() => editarPessoa(pessoa.id)}
                                />
                            </td>
                        </tr>
                    )}
                />
            </div>
        </div>

    )
} 