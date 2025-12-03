import type { EnderecoData } from "../endereco/EnderecoData";
import type { Genero } from "../enums/Genero";

export interface PessoaData {
    id: number,
    nome: string,
    cpf: string, 
    telefone: string,
    email: string,
    genero: Genero,
    dataNascimento: Date,
    enderecoEntrega: EnderecoData,
    enderecoCobranca: EnderecoData,
    ativo: boolean
}