import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function acessar(e: React.FormEvent) {
    e.preventDefault();

    try {
      const { token } = await autenticacao(login, senha);
      localStorage.setItem("token", token);
      navigate("/paginaprincipal");
    } catch {
      alert("Usuário ou senha inválidos");
    }
  }


  return (
    <form onSubmit={acessar}>
      <input
        placeholder="Login"
        value={login}
        onChange={e => setLogin(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={e => setSenha(e.target.value)}
      />

      <button 
        type="submit">Entrar</button>
    </form>
  );
}
