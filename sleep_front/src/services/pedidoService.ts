import type { PedidoData } from "../types/pedido/PedidoData";

const api = "http://localhost:8090";

function getAuthHeaders() {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Token não encontrado");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function listarPedidos(): Promise<PedidoData[]> {
  const response = await fetch(`${api}/pedidos`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Erro ao listar pedidos");
  }

  const data = await response.json();
  return data.content ?? data;
}

export async function buscarPedidoPorId(id: string): Promise<PedidoData> {
  const response = await fetch(`${api}/pedidos/${id}`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar pedido");
  }

  return response.json();
}

export async function salvarPedidoApi(
  payload: Omit<PedidoData,
    "id" | 
    "ativo" | 
    "valorMercadoria" | 
    "valorTotal" | 
    "dataEmissao"
  >,
  id?: string
): Promise<PedidoData> {
  
  const url = id ? `${api}/pedidos/${id}` : `${api}/pedidos`;
  const method = id ? "PUT" : "POST";

  const response = await fetch(url, {
    method,
    headers: getAuthHeaders(),
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Erro ao salvar pedido");
  }

  return response.json();
}
