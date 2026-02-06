package sleep.colchoes.domain.pedido;

import jakarta.validation.constraints.NotNull;
import sleep.colchoes.domain.enums.StatusPedido;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public record DTOCadastrarPedido(
                                @NotNull
                                Long clienteId,
                                @NotNull
                                LocalDateTime dataEmissao,
                                @NotNull
                                Long enderecoEntregaId,
                                @NotNull
                                List<ItemPedido> itens,
                                LocalDate dataPrevisaoEntrega,
                                BigDecimal valorFrete,
                                BigDecimal valorMercadoria,
                                BigDecimal valorTotal,
                                String responsavelEntrega,
                                @NotNull
                                Long vendedorId,
                                StatusPedido statusPedido,
                                String observacaoAdicionais,
                                String observacaoInterna
) {}
