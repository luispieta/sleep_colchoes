package sleep.colchoes.domain.pedido;
import sleep.colchoes.domain.produto.Produto;
import java.math.BigDecimal;

public class ItemPedido {

    private Produto produto;
    private int quantidade;
    private BigDecimal valorUnitario;

    public BigDecimal getValorTotalItem() {
        return valorUnitario.multiply(BigDecimal.valueOf(quantidade));
    }
}
