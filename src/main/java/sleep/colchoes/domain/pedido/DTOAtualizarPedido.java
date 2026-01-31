package sleep.colchoes.domain.pedido;

import sleep.colchoes.domain.endereco.Endereco;
import sleep.colchoes.domain.enums.StatusPedido;
import sleep.colchoes.domain.pessoa.Pessoa;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

public record DTOAtualizarPedido(
                                Pessoa pessoa,
                                Endereco enderecoEntrega,
                                List<ItemPedido> itens,
                                LocalDate dataPrevisaoEntrega,
                                BigDecimal valorFrete,
                                BigDecimal valorMercadoria,
                                BigDecimal valorTotal,
                                String responsavelEntrega,
                                Pessoa vendedor,
                                StatusPedido statusPedido,
                                String observacaoAdicionais,
                                String observacaoInterna
) {}
