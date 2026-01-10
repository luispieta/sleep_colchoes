import { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { autenticacao } from "../../services/loginService";

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
