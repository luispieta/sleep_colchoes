//package sleep.colchoes.domain.pedido;
//
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.EqualsAndHashCode;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import org.springframework.data.annotation.Id;
//import sleep.colchoes.domain.endereco.Endereco;
//import sleep.colchoes.domain.pessoa.Pessoa;
//import sleep.colchoes.domain.produto.Produto;
//import java.time.LocalDate;
//
//@Table(name = "pedidos")
//@Entity(name = "Pedido")
//@Getter
//@AllArgsConstructor
//@NoArgsConstructor
//@EqualsAndHashCode(of = "id")
//public class Pedido {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//    private LocalDate dataEmissao;
//    //private StatusPedido status;
//    //private FormaPagamento formaPagamento;
//    //private FormaParcelamento formaParcelamento;
//
//    private Pessoa pessoa;
//    private Endereco enderecoEntregue;
//
//    private Produto produto;
//    private int quantidade;
//    private double valorFrete;
//    private double valorTotal;
//    private double valorMercadoria;
//
//    private String observacao;
//
//}
//
///*
//
//Informações de Entrega
//- Previsão de entrega
//- Responsável pela entrega (Própria loja, transportadora, retirada no local)
//- Custo de frete
//- Observações adicionais (ex: acesso difícil, agendamento de horário)
//
//Documentos e Fiscais
//- Nota fiscal
//- Garantia (prazo e termos)
//- Política de troca e devolução
//
//Outros campos úteis (opcional)
//- Observações do cliente (cores preferidas, instruções especiais)
//- Observações do vendedor
//- Vendedor responsável
//- Assinatura eletrônica ou aceite digital (em caso de pedidos feitos via sistema ou WhatsApp)
//*/