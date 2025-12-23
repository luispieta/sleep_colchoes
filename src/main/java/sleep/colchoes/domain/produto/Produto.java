package sleep.colchoes.domain.produto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "produtos")
@Entity(name = "Produto")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String marca;
    private String tipoProduto;
    private double comprimento;
    private double largura;
    private double altura;
    private double preco;
    private String cor;
    private String revestimento;
    private String densidade;
    private double cargaSuportada;
    private String tratamentosEspeciais;
    private Boolean ativo;

    public Produto(DTOCadastrarProduto dados) {
        this.nome = dados.nome();
        this.marca = dados.marca();
        this.tipoProduto = dados.tipoProduto();
        this.comprimento = dados.comprimento();
        this.largura = dados.largura();
        this.altura = dados.altura();
        this.preco = dados.preco();
        this.cor = dados.cor();
        this.revestimento = dados.revestimento();
        this.densidade = dados.densidade();
        this.cargaSuportada = dados.cargaSuportada();
        this.tratamentosEspeciais = dados.tratamentosEspeciais();
    }

    public void atualizarInformacoes(DTOAtualizarProduto dados) {
        this.id = dados.id();
        this.nome = dados.nome();
        this.marca = dados.marca();
        this.tipoProduto = dados.tipoProduto();
        this.comprimento = dados.comprimento();
        this.largura = dados.largura();
        this.altura = dados.altura();
        this.preco = dados.preco();
        this.cor = dados.cor();
        this.revestimento = dados.revestimento();
        this.densidade = dados.densidade();
        this.cargaSuportada = dados.cargaSuportada();
        this.tratamentosEspeciais = dados.tratamentosEspeciais();
    }

    public void excluir() {
        this.ativo = false;
    }
}