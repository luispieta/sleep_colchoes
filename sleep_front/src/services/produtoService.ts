import type { ProdutoData } from "../types/produto/ProdutoData";

const api = "http://localhost:8090";

function getAuthHeaders() {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Token não encontrado");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function listarProdutos(): Promise<ProdutoData[]> {
  const response = await fetch(`${api}/produtos`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Erro ao listar produtos");
  }

  const data = await response.json();
  return data.content ?? data;
}

export async function buscarProdutoPorId(id: string): Promise<ProdutoData> {
  const response = await fetch(`${api}/produtos/${id}`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar produto");
  }

  return response.json();
}

export async function salvarProdutoApi(
  payload: Omit<ProdutoData, "id" | "ativo">,
  id?: string
): Promise<ProdutoData> {
  
  const url = id ? `${api}/produtos/${id}` : `${api}/produtos`;
  const method = id ? "PUT" : "POST";

  const response = await fetch(url, {
    method,
    headers: getAuthHeaders(),
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Erro ao salvar produto");
  }

  return response.json();
}
