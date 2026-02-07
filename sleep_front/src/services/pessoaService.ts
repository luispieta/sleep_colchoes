import type { PessoaData } from "../types/pessoa/PessoaData";

const api = "http://localhost:8090";

function getAuthHeaders() {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Token não encontrado");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function listarPessoas(): Promise<PessoaData[]> {
  const response = await fetch(`${api}/pessoas`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Erro ao listar pessoas");
  }

  const data = await response.json();
  return data.content ?? data;
}

export async function buscarPessoaPorId(id: string): Promise<PessoaData> {
  const response = await fetch(`${api}/pessoas/${id}`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar pessoa");
  }

  return response.json();
}

export async function salvarPessoaApi(
  payload: Omit<PessoaData, "id" >,
  id?: string
): Promise<PessoaData> {
  
  const url = id ? `${api}/pessoas/${id}` : `${api}/pessoas`;
  const method = id ? "PUT" : "POST";

  const response = await fetch(url, {
    method,
    headers: getAuthHeaders(),
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Erro ao salvar pessoa");
  }

  return response.json();
}
