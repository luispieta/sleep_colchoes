const API_URL = "http://localhost:8090";

export async function autenticacao(login: string, senha: string) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ login, senha }),
  });

  if (!response.ok) {
    throw new Error("Login inválido");
  }

  return response.json();
}