import { useState } from "react";
import type { PedidoData } from "../../types/pedido/PedidoData";
import type { StatusPedido } from "../../types/enums/StatusPedido";
import type { ItemPedido } from "../../types/pedido/ItemPedido";

export function usePedidoForm() {
  const [pessoaId, setPessoaId] = useState<number | null>(null);
  const [enderecoEntregaId, setEnderecoEntregaId] = useState<number | null>(null);
  const [itens, setItens] = useState<ItemPedido[]>([]);
  const [dataPrevisaoEntrega, setDataPrevisaoEntrega] = useState("");
  const [valorFrete, setValorFrete] = useState("");
  const [responsavelEntrega, setResponsavelEntrega] = useState("");
  const [vendedorId, setVendedorId] = useState<number | null>(null);
  const [statusPedido, setStatusPedido] = useState<StatusPedido | "">("");
  const [observacaoAdicionais, setObservacaoAdicionais] = useState("");
  const [observacaoInterna, setObservacaoInterna] = useState("");

  const toNumber = (value: string) => value === "" ? 0 : Number(value);

  function montarPayload(): Omit<
    PedidoData, 
    "id" | 
    "ativo" | 
    "valorMercadoria" | 
    "valorTotal" | 
    "dataEmissao" 
    > {
      
    if (!pessoaId || !enderecoEntregaId || !vendedorId) {
      throw new Error("Campos obrigatórios não preenchidos");
    }
    return {
      pessoa: {id: pessoaId},
      enderecoEntrega: {id: enderecoEntregaId},
      itens,
      dataPrevisaoEntrega: new Date(dataPrevisaoEntrega),
      valorFrete: toNumber(valorFrete),
      responsavelEntrega,
      vendedor: {id: vendedorId},
      statusPedido: statusPedido as StatusPedido,
      observacaoAdicionais,
      observacaoInterna
    };
  }

  function limparFormulario() {
    setPessoaId(null);
    setEnderecoEntregaId(null);
    setItens([]);
    setDataPrevisaoEntrega("");
    setValorFrete("");
    setResponsavelEntrega("");
    setVendedorId(null);
    setStatusPedido("");
    setObservacaoAdicionais("");
    setObservacaoInterna("");

  }

  return {
    estados: {
      pessoaId,
      enderecoEntregaId,
      itens,
      dataPrevisaoEntrega,
      valorFrete,
      responsavelEntrega,
      vendedorId,
      statusPedido,
      observacaoAdicionais,
      observacaoInterna,
    },
    setters: {
      setPessoaId,
      setEnderecoEntregaId,
      setItens,
      setDataPrevisaoEntrega,
      setValorFrete,
      setResponsavelEntrega,
      setVendedorId,
      setStatusPedido,
      setObservacaoAdicionais,
      setObservacaoInterna
    },
    montarPayload,
    limparFormulario,
  };
}
