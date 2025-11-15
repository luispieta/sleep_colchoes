import Campos from "../Campos";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.scss"

export default function Formulario() {

    const itens = [
        "Masculino",
        "Feminino",
        "Outros"
    ]

    const representanteCliente = [
        "Vendedor",
        "Cliente"
    ]

    return(
        <div className="formulario">
            <form>
                <Campos
                    tipo="text"
                    nome="numero-cliente"
                    descricao=""
                >Código
                </Campos>
                <Campos 
                    tipo="text"
                    nome="nome-pessoa"
                    descricao="Digite aqui o nome"
                    obrigatorio={true}
                >Nome: </Campos>
                <Campos 
                    tipo="text" 
                    nome="cpf-pessoa" 
                    descricao="Digite aqui o CPF" 
                    obrigatorio={true}
                >CPF: </Campos>
                <Campos 
                    tipo="email" 
                    nome="email-pessoa" 
                    descricao="Digite aqui e-mail" 
                    obrigatorio={true}
                >E-mail: </Campos>
                <Campos 
                    tipo="tel" 
                    nome="telefone-pessoa" 
                    descricao="Digite aqui telefone" 
                    obrigatorio={true}
                >Telefone: </Campos>
                <Campos 
                    tipo="date" 
                    nome="data-nascimento-pessoa" 
                    descricao="Digite aqui data" 
                    obrigatorio={false}
                >Data de Nascimento: </Campos>
                <ListaSuspensa
                    nome="genero"
                    obrigatorio={false}
                    itens={itens}
                >Gênero: </ListaSuspensa>
                <ListaSuspensa
                    nome="cliente-representante"
                    obrigatorio={false}
                    itens={representanteCliente}
                >Vendedor/Cliente: </ListaSuspensa>
            </form>
        </div>
    )
}