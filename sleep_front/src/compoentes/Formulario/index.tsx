import Campos from "../Campos";
import "./formulario.css"

export default function Formulario() {
    return(
        <div className="formulario">
            <form>
                <Campos tipo="text" nome="nome-pessoa" descricao="Digite aqui o nome" obrigatorio={true}>Nome: </Campos>
                <Campos tipo="text" nome="cpf-pessoa" descricao="Digite aqui o CPF" obrigatorio={true}>CPF: </Campos>
                <Campos tipo="email" nome="email-pessoa" descricao="Digite aqui E-mail" obrigatorio={true}>E-mail: </Campos>
                <Campos tipo="tel" nome="telefone-pessoa" descricao="Digite aqui telefone" obrigatorio={true}>Telefone: </Campos>
                <Campos tipo="date" nome="data-nascimento-pessoa" descricao="Digite aqui data" obrigatorio={false}>Data de Nascimento: </Campos>
            </form>
        </div>
    )
}