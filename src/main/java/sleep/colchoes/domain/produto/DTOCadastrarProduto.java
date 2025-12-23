package sleep.colchoes.domain.produto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import sleep.colchoes.domain.enums.SimNao;

public record DTOCadastrarProduto(
                                @NotBlank
                                String nome,
                                @NotBlank
                                String marca,
                                @NotBlank
                                String tipoProduto,
                                @NotNull
                                double comprimento,
                                @NotNull
                                double largura,
                                @NotNull
                                double altura,
                                @NotNull
                                double preco,
                                String cor,
                                String revestimento,
                                String densidade,
                                double cargaSuportada,
                                String tratamentosEspeciais
) {
}
