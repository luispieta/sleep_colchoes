package sleep.colchoes.domain.pedido;

import sleep.colchoes.domain.endereco.DTODetalhamentoEndereco;
import sleep.colchoes.domain.enums.StatusPedido;
import sleep.colchoes.domain.pessoa.DTODetalhamentoPessoa;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public record DTODetalhamentoPedido(
        Long id,
        DTODetalhamentoPessoa cliente,
        LocalDateTime dataEmissao,
        DTODetalhamentoEndereco enderecoEntrega,
        List<ItemPedido> itens,
        LocalDate dataPrevisaoEntrega,
        BigDecimal valorFrete,
        BigDecimal valorMercadoria,
        BigDecimal valorTotal,
        String responsavelEntrega,
        DTODetalhamentoPessoa vendedor,
        StatusPedido statusPedido
) {

    public DTODetalhamentoPedido(Pedido pedido) {
        this(
                pedido.getId(),
                new DTODetalhamentoPessoa(pedido.getCliente()),
                pedido.getDataEmissao(),
                new DTODetalhamentoEndereco(pedido.getEnderecoEntrega()),
                pedido.getItens(),
                pedido.getDataPrevisaoEntrega(),
                pedido.getValorFrete(),
                pedido.getValorMercadoria(),
                pedido.getValorTotal(),
                pedido.getResponsavelEntrega(),
                new DTODetalhamentoPessoa(pedido.getVendedor()),
                pedido.getStatusPedido()
        );
    }
}
