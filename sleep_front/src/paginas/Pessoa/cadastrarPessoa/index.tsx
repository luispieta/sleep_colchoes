import { BsFloppy } from "react-icons/bs";
import Botao from "../../../componentes/Botao";
import Campos from "../../../componentes/Campos";
import ListaSuspensa from "../../../componentes/ListaSuspensa";
import MenuLateral from "../../../layouts/MenuLateral";
import { Genero, GeneroLabel } from "../../../types/enums/Genero";
import { useState } from "react";
import "./cadastrarPessoa.scss"

export default function CadastrarPessoa() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [genero, setGenero] = useState<Genero | "">("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [uf, setUf] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");

  async function cadastrarPessoa(e: React.FormEvent) {
    e.preventDefault();

    const payload = {
      nome,
      cpf,
      telefone,
      email,
      genero,
      dataNascimento,

      enderecoEntrega: {
        rua,
        numero,
        cidade,
        bairro,
        uf,
        cep,
        logradouro,
      },

      enderecoCobranca: {
        rua,
        numero,
        cidade,
        bairro,
        uf,
        cep,
        logradouro,
      },
    };

    try {
      const response = await fetch("http://localhost:8090/pessoas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar pessoa");
      }

      alert("Pessoa cadastrada com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro no cadastro");
    }
  }

  return (
    <div className="cadastro-pessoa">
      <MenuLateral />

      <form className="pessoa-conteiner" onSubmit={cadastrarPessoa}>
        <Campos
          tipo={"text"} 
          nome={"campo-nome"} 
          children={"Nome"} 
          descricao="Digite seu nome" 
          obrigatorio
          valor={nome} 
          onChange={e => setNome(e.target.value)} 
        />

        <Campos
          tipo={"text"} 
          nome={"campo-cpf"} 
          children={"CPF"} 
          descricao="Digite seu CPF" 
          valor={cpf}
          onChange={e => setCpf(e.target.value )}
        />

        <Campos
          tipo={"tel"} 
          nome={"campo-telefone"} 
          children={"Telefone"} 
          descricao="Digite seu telefone" 
          obrigatorio
          valor={telefone}
          onChange={e => setTelefone(e.target.value )}
        />

        <Campos
          tipo={"email"} 
          nome={"campo-email"} 
          children={"E-mail"} 
          descricao="Digite seu email" 
          obrigatorio
          valor={email}
          onChange={e => setEmail(e.target.value )}
        />

        <ListaSuspensa
          nome="genero"
          children="Gênero"
          itens={Object.values(Genero)}
          labels={GeneroLabel}
          valor={genero}
          onChange={e => setGenero(e.target.value as Genero)}
        />

        <Campos
          tipo={"date"} 
          nome={"campo-data-nascimento"} 
          children={"Data de Nascimento"} 
          obrigatorio
          valor={dataNascimento}
          onChange={e => setDataNascimento(e.target.value )}
        />

        <Campos
          tipo={"text"} 
          nome={"campo-rua"} 
          children={"Rua"} 
          obrigatorio
          valor={rua}
          onChange={e => setRua(e.target.value )}
        />

        <Campos
          tipo={"text"} 
          nome={"campo-numero"} 
          children={"Número"} 
          obrigatorio
          valor={numero}
          onChange={e => setNumero(e.target.value )}
        />

        <Campos
          tipo={"text"} 
          nome={"campo-cidade"} 
          children={"Cidade"} 
          obrigatorio
          valor={cidade}
          onChange={e => setCidade(e.target.value )}
        />

        <Campos
          tipo={"text"} 
          nome={"campo-bairro"} 
          children={"Bairro"} 
          obrigatorio
          valor={bairro}
          onChange={e => setBairro(e.target.value )}
        />
        
        <Campos
          tipo={"text"} 
          nome={"campo-uf"} 
          children={"UF"} 
          obrigatorio
          valor={uf}
          onChange={e => setUf(e.target.value )}
        />
        
        <Campos
          tipo={"text"} 
          nome={"campo-cep"} 
          children={"CEP"} 
          obrigatorio
          valor={cep}
          onChange={e => setCep(e.target.value )}
        />

        <Campos
          tipo={"text"} 
          nome={"campo-logradouro"} 
          children={"Logradouro"} 
          obrigatorio
          valor={logradouro}
          onChange={e => setLogradouro(e.target.value )}
        />

        <Botao tipo="submit" icone={<BsFloppy size={16} />}>
          Salvar
        </Botao>
      </form>
    </div>
  );
}