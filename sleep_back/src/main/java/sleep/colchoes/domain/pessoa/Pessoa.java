package sleep.colchoes.domain.pessoa;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import sleep.colchoes.domain.endereco.Endereco;

import java.time.LocalDate;

@Entity(name = "Pessoa")
@Table(name = "pessoas")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String cpf;
    private String telefone;
    private String email;

    @Enumerated(EnumType.STRING)
    private Genero genero;
    private LocalDate dataNascimento;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "ID_ENDERECO_ENTREGA ")
    private Endereco enderecoEntrega;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "ID_ENDERECO_COBRANCA")
    private Endereco enderecoCobranca;
    private Boolean ativo;

    public Pessoa(DTOCadastrarPessoa dados) {
        this.nome = dados.nome();
        this.cpf = dados.cpf();
        this.telefone = dados.telefone();
        this.email = dados.email();
        this.genero = dados.genero();
        this.dataNascimento = dados.dataNascimento();
        this.enderecoCobranca = dados.enderecoCobranca();
        this.enderecoEntrega = dados.enderecoEntrega();
    }

    public void atualizarInformacoes(DTOAtualizarPessoa dados) {
        if(dados.nome() != null) {
            this.nome = dados.nome();
        }
        if(dados.cpf() != null) {
            this.cpf = dados.cpf();
        }
        if(dados.telefone() != null) {
            this.telefone = dados.telefone();
        }
        if(dados.email() != null) {
            this.email = dados.email();
        }
        if(dados.genero() != null) {
            this.genero = dados.genero();
        }
        if(dados.dataNascimento() != null) {
            this.dataNascimento = dados.dataNascimento();
        }
        if(dados.enderecoCobranca() != null) {
            this.enderecoCobranca = dados.enderecoCobranca();
        }
        if(dados.enderecoEntrega() != null) {
            this.enderecoEntrega = dados.enderecoEntrega();
        }

    }

    public void excluir() {
        this.ativo = false;
    }
}
