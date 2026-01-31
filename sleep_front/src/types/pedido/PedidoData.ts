import type { EnderecoData } from "../endereco/EnderecoData";
import type { StatusPedido } from "../enums/StatusPedido";
import type { PessoaData } from "../pessoa/PessoaData";
import type { ItemPedido } from "./ItemPedido";

export interface PedidoData {
    id: number,
    pessoa: Pick<PessoaData, "id">;
    enderecoEntrega: Pick<EnderecoData, "id">;
    itens: ItemPedido[];
    dataPrevisaoEntrega: Date;
    valorFrete: number;
    valorMercadoria: number;
    valorTotal: number;
    responsavelEntrega: string; 
    vendedor: Pick<PessoaData, "id">;
    statusPedido: StatusPedido 
    observacaoAdicionais: string; 
    observacaoInterna: string;
}