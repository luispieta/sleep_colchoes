//package sleep.colchoes.domain.empresa;
//
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.NotNull;
//import sleep.colchoes.domain.endereco.Endereco;
//
//import java.time.LocalDate;
//
//public record DTOCadastrarEmpresa(
//                                    @NotNull
//                                    Long id,
//                                    @NotBlank
//                                    String razaoSocial,
//                                    @NotBlank
//                                    String nomeFantasia,
//                                    @NotBlank
//                                    String cnpj,
//                                    @NotBlank
//                                    LocalDate dataAbertura,
//                                    @NotBlank
//                                    String telefone,
//                                    @NotBlank
//                                    String email,
//                                    @NotBlank
//                                    Endereco endereco) {
//}
