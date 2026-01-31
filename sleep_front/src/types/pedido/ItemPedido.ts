import type { ProdutoData } from "../produto/ProdutoData";

export interface ItemPedido {
    produto: ProdutoData;
    quantidade: number;
    valorUnitario: number;
}