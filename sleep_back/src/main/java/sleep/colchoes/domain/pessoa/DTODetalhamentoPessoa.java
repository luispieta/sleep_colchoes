package sleep.colchoes.domain.pessoa;

import java.time.LocalDate;

public record DTODetalhamentoPessoa(Long id, String nome, String cpf, String telefone, String email, Genero genero,
                                    LocalDate dataNascimento, Long enderecoEntrega, Long enderecoCobranca, Boolean ativo) {

    public DTODetalhamentoPessoa(Pessoa pessoa) {
        this(pessoa.getId(), pessoa.getNome(), pessoa.getCpf(), pessoa.getTelefone(), pessoa.getEmail(),
                pessoa.getGenero(), pessoa.getDataNascimento(), pessoa.getEnderecoEntrega().getId(),
                pessoa.getEnderecoCobranca().getId(), pessoa.getAtivo());
    }

}