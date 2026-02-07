package sleep.colchoes.domain.pessoa;

import sleep.colchoes.domain.endereco.DTOListagemEndereco;
import sleep.colchoes.domain.enums.Genero;

import java.time.LocalDate;

public record DTOListagemPessoa(Long id, String nome, String cpf, String telefone, String email, Genero genero,
                                LocalDate dataNascimento, DTOListagemEndereco enderecoEntrega, DTOListagemEndereco enderecoCobranca,
                                Boolean ativo, Boolean vendedor) {
    public DTOListagemPessoa(Pessoa pessoa) {
        this(pessoa.getId(), pessoa.getNome(), pessoa.getCpf(), pessoa.getTelefone(), pessoa.getEmail(),
                pessoa.getGenero(), pessoa.getDataNascimento(), new DTOListagemEndereco(pessoa.getEnderecoEntrega()),
                new DTOListagemEndereco(pessoa.getEnderecoCobranca()), pessoa.getAtivo(), pessoa.getVendedor());
    }
}