package sleep.colchoes.domain.endereco;

import jakarta.validation.constraints.NotBlank;

public record DTOCadastrarEndereco(
                                    @NotBlank
                                    String rua,
                                    @NotBlank
                                    String numero,
                                    @NotBlank
                                    String cidade,
                                    @NotBlank
                                    String bairro,
                                    @NotBlank
                                    String uf,
                                    @NotBlank
                                    String cep,
                                    @NotBlank
                                    String logradouro
) {
}
