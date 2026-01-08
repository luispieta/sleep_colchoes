package sleep.colchoes.domain.pessoa;

import jakarta.validation.constraints.NotNull;
import sleep.colchoes.domain.endereco.DTOAtualizarEndereco;
import sleep.colchoes.domain.endereco.Endereco;
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
