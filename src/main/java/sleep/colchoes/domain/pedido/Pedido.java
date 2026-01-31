package sleep.colchoes.domain.pedido;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import sleep.colchoes.domain.endereco.Endereco;
import sleep.colchoes.domain.enums.StatusPedido;
import sleep.colchoes.domain.pessoa.Pessoa;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Table(name = "pedidos")
@Entity(name = "Pedido")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "ID_PESSOA")
    private Pessoa pessoa;
    private LocalDateTime dataEmissao;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "ID_ENDERECO_ENTREGA")
    private Endereco enderecoEntrega;
    private List<ItemPedido> itens;
    private LocalDate dataPrevisaoEntrega;
    private BigDecimal valorFrete;
    private BigDecimal valorMercadoria;
    private BigDecimal valorTotal;
    private String responsavelEntrega;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "ID_PESSOA")
    private Pessoa vendedor;

    @Enumerated(EnumType.STRING)
    private StatusPedido statusPedido;
    private String observacaoAdicionais;
    private String observacaoInterna;

    @PrePersist
    public void setDataEmissao() {
        this.dataEmissao = LocalDateTime.now();
    }

    public BigDecimal getValorMercadoria() {
        return itens == null ? BigDecimal.ZERO :
                itens.stream()
                        .map(ItemPedido::getValorTotalItem)
                        .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public BigDecimal getValorTotal() {
        BigDecimal frete = valorFrete != null ? valorFrete : BigDecimal.ZERO;
        return getValorMercadoria().add(frete);
    }

    public Pedido(@Valid DTOCadastrarPedido dados) {
        this.pessoa = dados.pessoa();
        this.dataEmissao = dados.dataEmissao();
        this.enderecoEntrega = dados.enderecoEntrega();
        this.itens = dados.itens();
        this.dataPrevisaoEntrega = dados.dataPrevisaoEntrega();
        this.valorFrete = dados.valorFrete();
        this.valorMercadoria = dados.valorMercadoria();
        this.responsavelEntrega = dados.responsavelEntrega();
        this.vendedor = dados.vendedor();
        this.statusPedido = dados.statusPedido();
        this.observacaoAdicionais = dados.observacaoAdicionais();
        this.observacaoInterna = dados.observacaoInterna();

    }

    public void atualizarInformacoes(@Valid DTOAtualizarPedido dados) {
        if(dados.pessoa() != null) {
            this.pessoa = dados.pessoa();
        }
        if(dados.enderecoEntrega() != null) {
            this.enderecoEntrega = dados.enderecoEntrega();
        }
        if(dados.itens() != null) {
            this.itens = dados.itens();
        }
        if(dados.dataPrevisaoEntrega() != null) {
            this.dataPrevisaoEntrega = dados.dataPrevisaoEntrega();
        }
        if(dados.valorFrete() != null) {
            this.valorFrete = dados.valorFrete();
        }
        if(dados.valorMercadoria() != null) {
            this.valorMercadoria = dados.valorMercadoria();
        }
        if(dados.responsavelEntrega() != null) {
            this.responsavelEntrega = dados.responsavelEntrega();
        }
        if(dados.vendedor() != null) {
            this.vendedor = dados.vendedor();
        }
        if(dados.statusPedido() != null) {
            this.statusPedido = dados.statusPedido();
        }
        if(dados.observacaoAdicionais() != null) {
            this.observacaoAdicionais = dados.observacaoAdicionais();
        }
        if(dados.observacaoInterna() != null) {
            this.observacaoInterna = dados.observacaoInterna();
        }

    }
}