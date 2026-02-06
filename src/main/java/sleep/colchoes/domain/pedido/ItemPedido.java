package sleep.colchoes.domain.pedido;

import jakarta.persistence.*;
import lombok.*;
import sleep.colchoes.domain.produto.Produto;

import java.math.BigDecimal;

@Entity
@Table(name = "itens_pedido")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class ItemPedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_PEDIDO", nullable = false)
    private Pedido pedido;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_PRODUTO", nullable = false)
    private Produto produto;

    private int quantidade;

    private BigDecimal valorUnitario;

    public BigDecimal getValorTotalItem() {
        return valorUnitario.multiply(BigDecimal.valueOf(quantidade));
    }

}
