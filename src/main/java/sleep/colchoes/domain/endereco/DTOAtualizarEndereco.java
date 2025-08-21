package sleep.colchoes.domain.endereco;

import jakarta.validation.constraints.NotNull;

public record DTOAtualizarEndereco(@NotNull
                                   Long id,
                                   String rua,
                                   String numero,
                                   String cidade,
                                   String bairro,
                                   String uf,
                                   String cep,
                                   String logradouro) {
}
