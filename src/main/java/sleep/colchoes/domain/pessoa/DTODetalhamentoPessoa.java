package sleep.colchoes.domain.pessoa;

import sleep.colchoes.domain.endereco.DTODetalhamentoEndereco;
import sleep.colchoes.domain.enums.Genero;

import java.time.LocalDate;

public record DTODetalhamentoPessoa(Long id, String nome, String cpf, String telefone, String email, Genero genero,
                                    LocalDate dataNascimento, DTODetalhamentoEndereco enderecoEntrega,
                                    DTODetalhamentoEndereco enderecoCobranca, Boolean ativo, Boolean vendedor) {

    public DTODetalhamentoPessoa(Pessoa pessoa) {
        this(pessoa.getId(), pessoa.getNome(), pessoa.getCpf(), pessoa.getTelefone(), pessoa.getEmail(),
                pessoa.getGenero(), pessoa.getDataNascimento(), new DTODetalhamentoEndereco(pessoa.getEnderecoEntrega()),
                new DTODetalhamentoEndereco(pessoa.getEnderecoCobranca()), pessoa.getAtivo(), pessoa.getVendedor());
    }

}