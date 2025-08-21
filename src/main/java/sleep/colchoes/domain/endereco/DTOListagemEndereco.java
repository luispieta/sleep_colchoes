package sleep.colchoes.domain.endereco;

public record DTOListagemEndereco(Long id, String rua, String numero, String cidade,
                                  String bairro, String uf, String cep, String logradouro) {

    public DTOListagemEndereco(Endereco endereco) {
        this(endereco.getId() ,endereco.getRua(), endereco.getNumero(), endereco.getCidade(), endereco.getBairro(),
                endereco.getUf(), endereco.getCep(), endereco.getLogradouro());
    }

}
