package sleep.colchoes.domain.endereco;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "enderecos")
@Entity(name = "Endereco")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String rua;
    private String numero;
    private String cidade;
    private String bairro;
    private String uf;
    private String cep;
    private String logradouro;

    public Endereco(DTOCadastrarEndereco dados) {
        this.rua = dados.rua();
        this.numero = dados.numero();
        this.cidade = dados.cidade();
        this.bairro = dados.bairro();
        this.uf = dados.uf();
        this.cep = dados.cep();
        this.logradouro = dados.logradouro();
    }

    public void atualizarInformacoes(DTOAtualizarEndereco dados) {
        if(dados.rua() != null) {
            this.rua = dados.rua();
        }
        if(dados.numero() != null) {
            this.numero = dados.numero();
        }
        if(dados.cidade() != null) {
            this.cidade = dados.cidade();
        }
        if(dados.bairro() != null) {
            this.bairro = dados.bairro();
        }
        if(dados.uf() != null) {
            this.uf = dados.uf();
        }
        if(dados.cep() != null) {
            this.cep = dados.cep();
        }
        if(dados.logradouro() != null) {
            this.logradouro = dados.logradouro();
        }

    }
}
