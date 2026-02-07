import { useEffect } from "react";
import { buscarPessoaPorId } from "../../services/pessoaService";

export function usePessoa(id?: string, setters?: any) {
  useEffect(() => {
    if (!id || !setters) return;

    buscarPessoaPorId(id)
      .then(data => {
          console.log("RAW vendedor:", data.vendedor, typeof data.vendedor);
  console.log("RAW ativo:", data.ativo, typeof data.ativo);

        setters.setNome(data.nome ?? "");
        setters.setCpf(data.cpf ?? "");
        setters.setTelefone(data.telefone ?? "");
        setters.setEmail(data.email ?? "");
        setters.setGenero(data.genero ?? "");
        setters.setDataNascimento(
          data.dataNascimento
            ? new Date(data.dataNascimento).toISOString().substring(0, 10)
            : ""
        );

        setters.setRua(data.enderecoEntrega?.rua ?? "");
        setters.setNumero(data.enderecoEntrega?.numero ?? "");
        setters.setCidade(data.enderecoEntrega?.cidade ?? "");
        setters.setBairro(data.enderecoEntrega?.bairro ?? "");
        setters.setUf(data.enderecoEntrega?.uf ?? "");
        setters.setCep(data.enderecoEntrega?.cep ?? "");
        setters.setLogradouro(data.enderecoEntrega?.logradouro ?? "");
        setters.setVendedor(Boolean(data.vendedor ?? false));
        setters.setAtivo(Boolean(data.ativo ?? false));
      })
      .catch(console.error);
  }, [id]);
}
