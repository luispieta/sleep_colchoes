package sleep.colchoes.domain.pedido;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import sleep.colchoes.domain.endereco.Endereco;
import sleep.colchoes.domain.enums.StatusPedido;
import sleep.colchoes.domain.pessoa.Pessoa;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity(name = "Pedido")
@Table(name = "pedidos")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_CLIENTE")
    private Pessoa cliente;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_ENDERECO_ENTREGA")
    private Endereco enderecoEntrega;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_VENDEDOR")
    private Pessoa vendedor;
    private LocalDateTime dataEmissao;

    @OneToMany
    @JoinColumn(name = "ID_PEDIDO")
    private List<ItemPedido> itens;

    private LocalDate dataPrevisaoEntrega;
    private BigDecimal valorFrete;
    private BigDecimal valorMercadoria;
    private BigDecimal valorTotal;
    private String responsavelEntrega;

    @Enumerated(EnumType.STRING)
    private StatusPedido statusPedido;

    private String observacaoAdicionais;
    private String observacaoInterna;

    @PrePersist
    public void setDataEmissao() {
        this.dataEmissao = LocalDateTime.now();
    }

    public BigDecimal getValorMercadoria() {
        return itens == null
                ? BigDecimal.ZERO
                : itens.stream()
                .map(ItemPedido::getValorTotalItem)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public BigDecimal getValorTotal() {
        BigDecimal frete = valorFrete != null ? valorFrete : BigDecimal.ZERO;
        return getValorMercadoria().add(frete);
    }

    public Pedido(
            Pessoa cliente,
            Endereco enderecoEntrega,
            Pessoa vendedor,
            List<ItemPedido> itens,
            @Valid DTOCadastrarPedido dados
    ) {
        this.cliente = cliente;
        this.enderecoEntrega = enderecoEntrega;
        this.vendedor = vendedor;
        this.itens = itens;
        this.dataPrevisaoEntrega = dados.dataPrevisaoEntrega();
        this.valorFrete = dados.valorFrete();
        this.responsavelEntrega = dados.responsavelEntrega();
        this.statusPedido = dados.statusPedido();
        this.observacaoAdicionais = dados.observacaoAdicionais();
        this.observacaoInterna = dados.observacaoInterna();
    }

    public void atualizarInformacoes(
            Pessoa cliente,
            Endereco enderecoEntrega,
            Pessoa vendedor,
            List<ItemPedido> itens,
            @Valid DTOAtualizarPedido dados
    ) {
        if (dados.clienteId() != null) {
            this.cliente = cliente;
        }
        if (dados.enderecoEntregaId() != null) {
            this.enderecoEntrega = enderecoEntrega;
        }
        if (dados.itens() != null) {
            this.itens = itens;
        }
        if (dados.dataPrevisaoEntrega() != null) {
            this.dataPrevisaoEntrega = dados.dataPrevisaoEntrega();
        }
        if (dados.valorFrete() != null) {
            this.valorFrete = dados.valorFrete();
        }
        if (dados.responsavelEntrega() != null) {
            this.responsavelEntrega = dados.responsavelEntrega();
        }
        if (dados.vendedorId() != null) {
            this.vendedor = vendedor;
        }
        if (dados.statusPedido() != null) {
            this.statusPedido = dados.statusPedido();
        }
        if (dados.observacaoAdicionais() != null) {
            this.observacaoAdicionais = dados.observacaoAdicionais();
        }
        if (dados.observacaoInterna() != null) {
            this.observacaoInterna = dados.observacaoInterna();
        }
    }
}
