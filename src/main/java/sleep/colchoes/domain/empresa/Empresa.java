//package sleep.colchoes.domain.empresa;
//
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.EqualsAndHashCode;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import sleep.colchoes.domain.endereco.Endereco;
//
//import java.time.LocalDate;
//
//@Table(name = "empresas")
//@Entity(name = "Empresa")
//@Getter
//@NoArgsConstructor
//@AllArgsConstructor
//@EqualsAndHashCode(of = "id")
//public class Empresa {
//
//    private Long id;
//    private String razaoSocial;
//    private String nomeFantasia;
//    private String cnpj;
//    private LocalDate dataAbertura;
//    private String telefone;
//    private String email;
//
//    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @JoinColumn(name = "")
//    private Endereco endereco;
//    private Boolean ativo;
//
//    public Empresa(DTOCadastrarEmpresa dados) {
//        this.razaoSocial = dados.razaoSocial();
//        this.nomeFantasia = dados.nomeFantasia();
//        this.cnpj = dados.cnpj();
//        this.dataAbertura = dados.dataAbertura();
//        this.telefone = dados.telefone();
//        this.email = dados.email();
//        this.endereco = dados.endereco();
//    }
//
//    public void atualizarInformacoes(DTOAtualizarEmpresa dados) {
//        if(dados.razaoSocial() != null) {
//            this.razaoSocial = dados.razaoSocial();
//
//        }
//        if(dados.cnpj() != null) {
//            this.cnpj = dados.cnpj();
//
//        }
//        if(dados.dataAbertura() != null) {
//            this.dataAbertura = dados.dataAbertura();
//
//        }
//        if(dados.endereco() != null) {
//            this.endereco = dados.endereco();
//
//        }
//
//    }
//
//    public void excluir() {
//        this.ativo = false;
//    }
//}
