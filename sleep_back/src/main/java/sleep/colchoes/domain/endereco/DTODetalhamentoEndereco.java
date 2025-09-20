package sleep.colchoes.domain.endereco;

public record DTODetalhamentoEndereco(Long id, String rua, String numero, String cidade,
                                      String bairro, String uf, String cep, String logradouro) {

    public DTODetalhamentoEndereco(Endereco endereco) {
        this(endereco.getId(), endereco.getRua(), endereco.getNumero(), endereco.getCidade(), endereco.getBairro(), endereco.getUf(),
                endereco.getCep(), endereco.getLogradouro());
    }
}