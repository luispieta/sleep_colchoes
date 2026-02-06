package sleep.colchoes.domain.pedido;

import sleep.colchoes.domain.enums.StatusPedido;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

public record DTOAtualizarPedido(
                                Long clienteId,
                                Long enderecoEntregaId,
                                List<ItemPedido> itens,
                                LocalDate dataPrevisaoEntrega,
                                BigDecimal valorFrete,
                                BigDecimal valorMercadoria,
                                BigDecimal valorTotal,
                                String responsavelEntrega,
                                Long vendedorId,
                                StatusPedido statusPedido,
                                String observacaoAdicionais,
                                String observacaoInterna
) {}
