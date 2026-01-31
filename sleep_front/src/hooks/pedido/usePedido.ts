import { useEffect } from "react";
import { buscarPedidoPorId } from "../../services/pedidoService";

export function usePedido(id?: string, setters?: any) {
  useEffect(() => {
    if (!id || !setters) return;

    buscarPedidoPorId(id)
      .then(data => {
        setters.setPessoaId(data.pessoa ?? "");
        setters.setEnderecoEntregaId(data.enderecoEntrega ?? "");
        setters.setItens(data.itens ?? "");
        setters.setDataPrevisaoEntrega(data.dataPrevisaoEntrega ?? "");
        setters.setValorFrete(data.valorFrete ?? "");
        setters.setResponsavelEntrega(data.responsavelEntrega ?? "");
        setters.setVendedorId(data.vendedor ?? "");
        setters.setStatusPedido(data.statusPedido ?? "");
        setters.setObservacaoAdicionais(data.observacaoAdicionais ?? "");
        setters.setObservacaoInterna(data.observacaoInterna ?? "");

      })
      .catch(console.error);
  }, [id]);
}
