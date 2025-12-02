import Campos from "../../../componentes/Campos";
import ListaSuspensa from "../../../componentes/ListaSuspensa";
import { Genero, GeneroLabel } from "../../../types/enums/Genero";

export default function CadastrarPessoa() {
    return(
        <div className="pessoa">
            <Campos 
                tipo={"text"} 
                nome={"campo-nome"} 
                children={"Nome"} 
                descricao="Digite seu nome" 
                obrigatorio
            />
            <Campos 
                tipo={"text"} 
                nome={"campo-cpf"} 
                children={"CPF"} 
                descricao="Digite seu CPF" 
                obrigatorio
            />
            <Campos 
                tipo={"tel"} 
                nome={"campo-telefone"} 
                children={"Telefone"} 
                descricao="Digite seu telefone" 
                obrigatorio
            />
            <Campos 
                tipo={"email"} 
                nome={"campo-email"} 
                children={"E-mail"} 
                descricao="Digite seu Telefone" 
                obrigatorio
            />
            <ListaSuspensa 
                nome="genero"
                children="Gênero"
                obrigatorio
                itens={Object.values(Genero)}
                labels={GeneroLabel}
            />

            <Campos 
                tipo={"date"} 
                nome={"campo-data-nascimento"} 
                children={"Data de Nascimento"} 
                obrigatorio
            />
        </div>
    )
}