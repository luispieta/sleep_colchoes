import "./listagemPessoa.scss"

interface PropsListagemPessoa {
    pessoas: any,

}

export default function ListagemPessoa({pessoas}: PropsListagemPessoa) {
    return(
    <div>
        <table className="people-table">
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
                        <td>{pessoa.enderecoEntrega}</td>                        
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
} 