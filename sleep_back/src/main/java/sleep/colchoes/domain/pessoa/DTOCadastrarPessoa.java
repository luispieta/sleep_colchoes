package sleep.colchoes.domain.pessoa;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import sleep.colchoes.domain.endereco.Endereco;

import java.time.LocalDate;

public record DTOCadastrarPessoa(
                                @NotBlank
                                String nome,
                                @NotBlank
                                String cpf,
                                @NotBlank
                                String telefone,
                                @NotBlank
                                String email,
                                Genero genero,
                                @NotNull
                                LocalDate dataNascimento,
                                @NotNull
                                Endereco enderecoEntrega,
                                @NotNull
                                Endereco enderecoCobranca
) {
}
