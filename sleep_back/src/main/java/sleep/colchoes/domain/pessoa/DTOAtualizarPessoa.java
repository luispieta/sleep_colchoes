package sleep.colchoes.domain.pessoa;

import jakarta.validation.constraints.NotNull;
import sleep.colchoes.domain.endereco.Endereco;
import java.time.LocalDate;

public record DTOAtualizarPessoa(
                                @NotNull
                                Long id,
                                String nome,
                                String cpf,
                                String telefone,
                                String email,
                                Genero genero,
                                LocalDate dataNascimento,
                                Endereco enderecoEntrega,
                                Endereco enderecoCobranca) {

}
