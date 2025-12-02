//package sleep.colchoes.domain.empresa;
//
//import java.time.LocalDate;
//
//public record DTODetalhamentoEmpresa(Long id, String razaoSocial, String nomeFantasia, String cnpj,
//                                     LocalDate dataAbertura, String telefone, String email, Long endereco) {
//
//    public DTODetalhamentoEmpresa(Empresa empresa) {
//        this(empresa.getId(), empresa.getRazaoSocial(), empresa.getNomeFantasia(), empresa.getCnpj(), empresa.getDataAbertura(),
//                empresa.getTelefone(), empresa.getEmail(), empresa.getEndereco().getId());
//
//    }
//}
