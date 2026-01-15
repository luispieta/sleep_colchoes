import { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { autenticacao } from "../../services/loginService";
import Campos from "../../componentes/Campos";
import Botao from "../../componentes/Botao";

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
    <div className="pagina-login">
      <div className="secao-login">
        <form onSubmit={acessar}>
          <Campos 
            nome={"login"}
            children={"Login"}
            descricao="Login"
            obrigatorio
            valor={login}
            onChange={setLogin}
          />
          
          <Campos 
            tipo="password"
            nome={"senha"} 
            children={"Senha"}
            descricao="Senha"
            obrigatorio 
            valor={senha} 
            onChange={setSenha} 
          />

          <Botao 
            children={"Entrar"} 
            tipo={"submit"}
          />
        </form>
      </div>

      <div className="imagem">
      </div>
    </div>
  );
}
