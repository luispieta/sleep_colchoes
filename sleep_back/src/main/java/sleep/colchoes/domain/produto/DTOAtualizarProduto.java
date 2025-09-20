package sleep.colchoes.domain.produto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import sleep.colchoes.domain.enums.SimNao;

public record DTOAtualizarProduto(Long id,
                                  @NotBlank
                                  String nome,
                                  @NotBlank
                                  String marca,
                                  @NotBlank
                                  String tipoProduto,
                                  @NotNull
                                  double medida,
                                  @NotBlank
                                  double altura,
                                  @NotNull
                                  double preco,
                                  String cor,
                                  String revestimento,
                                  String densidade,
                                  double cargaSuportada,
                                  String tratamentosEspeciais) {
}
