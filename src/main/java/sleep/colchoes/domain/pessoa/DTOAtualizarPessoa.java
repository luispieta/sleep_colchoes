package sleep.colchoes.domain.pessoa;

import sleep.colchoes.domain.endereco.DTOAtualizarEndereco;
import sleep.colchoes.domain.enums.Genero;

import java.time.LocalDate;

public record DTOAtualizarPessoa(
                                String nome,
                                String cpf,
                                String telefone,
                                String email,
                                Genero genero,
                                LocalDate dataNascimento,
                                DTOAtualizarEndereco enderecoEntrega,
                                DTOAtualizarEndereco enderecoCobranca) {

}
