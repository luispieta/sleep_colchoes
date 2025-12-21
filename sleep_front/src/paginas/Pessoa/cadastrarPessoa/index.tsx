import { BsFileEarmark, BsFloppy } from "react-icons/bs";
import Botao from "../../../componentes/Botao";
import Campos from "../../../componentes/Campos";
import ListaSuspensa from "../../../componentes/ListaSuspensa";
import MenuLateral from "../../../layouts/MenuLateral";
import { Genero, GeneroLabel } from "../../../types/enums/Genero";
import { useState } from "react";
import "./cadastrarPessoa.scss"
import Tab from "../../../layouts/Tab/indes";

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

  async function novo() {
    setNome("");
    setCpf("");
    setTelefone("");
    setEmail("");
    setGenero("");
    setDataNascimento("");
    setRua("");
    setNumero("");
    setCidade("");
    setBairro("");
    setUf("");
    setCep("");
    setLogradouro("");
  }

  return (
    <div className="cadastro-pessoa">
      <MenuLateral />

      <Tab abas={[    
        { label: "Cadastro Gerais", rota: "/pessoa/cadastropessoa" },
        ]}>
      </Tab>

      <form className="pessoa-conteiner" onSubmit={cadastrarPessoa}>
        <div className="separador-com-texto">
          <h4>Dados do Cliente</h4>
        </div>        
        <div className="linha linha-2">
          <Campos
            tipo="text"
            nome="campo-nome"
            descricao="Digite seu nome"
            obrigatorio
            valor={nome}
            onChange={e => setNome(e.target.value)}
          >
            Nome
          </Campos>

          <Campos
            tipo="text"
            nome="campo-cpf"
            descricao="000.000.000-00"
            valor={cpf}
            onChange={e => setCpf(e.target.value)}
          >
            CPF
          </Campos>
        </div>

        <div className="linha linha-2">
          <Campos
            tipo="tel"
            nome="campo-telefone"
            descricao="(00) 00000-0000"
            obrigatorio
            valor={telefone}
            onChange={e => setTelefone(e.target.value)}
          >
            Telefone
          </Campos>

          <Campos
            tipo="email"
            nome="campo-email"
            descricao="Digite seu e-mail"
            obrigatorio
            valor={email}
            onChange={e => setEmail(e.target.value)}
          >
            E-mail
          </Campos>
        </div>

        <div className="linha linha-2">
          <ListaSuspensa
            nome="genero"
            children="Gênero"
            itens={Object.values(Genero)}
            labels={GeneroLabel}
            valor={genero}
            onChange={e => setGenero(e.target.value as Genero)}
          />

          <Campos
            tipo="date"
            nome="campo-data-nascimento"
            obrigatorio
            valor={dataNascimento}
            onChange={e => setDataNascimento(e.target.value)}
          >
            Data de Nascimento
          </Campos>
        </div>

        <div className="separador-com-texto">
          <h4>Endereço</h4>
        </div>

        <div className="linha linha-2">
          <Campos
            tipo="text"
            nome="campo-cep"
            descricao="00000-000"
            obrigatorio
            valor={cep}
            onChange={e => setCep(e.target.value)}
          >
            CEP
          </Campos>

          <Campos
            tipo="text"
            nome="campo-rua"
            descricao="Digite sua rua"
            obrigatorio
            valor={rua}
            onChange={e => setRua(e.target.value)}
          >
            Rua
          </Campos>

        </div>

        <div className="linha linha-3">
          <Campos
            tipo="text"
            nome="campo-bairro"
            descricao="Digite o bairro"
            obrigatorio
            valor={bairro}
            onChange={e => setBairro(e.target.value)}
          >
            Bairro
          </Campos>

          <Campos
            tipo="text"
            nome="campo-numero"
            descricao="Digite o número"
            obrigatorio
            valor={numero}
            onChange={e => setNumero(e.target.value)}
          >
            Número
          </Campos>        

          <Campos
            tipo="text"
            nome="campo-uf"
            descricao="UF"
            obrigatorio
            valor={uf}
            onChange={e => setUf(e.target.value)}
          >
            UF
          </Campos>
        </div>

        <div className="linha linha-2">
          <Campos
            tipo="text"
            nome="campo-cidade"
            descricao="Digite a cidade"
            obrigatorio
            valor={cidade}
            onChange={e => setCidade(e.target.value)}
          >
            Cidade
          </Campos>  

          <Campos
            tipo="text"
            nome="campo-logradouro"
            descricao="Digite o logradouro"
            obrigatorio
            valor={logradouro}
            onChange={e => setLogradouro(e.target.value)}
          >
            Logradouro
          </Campos>
        </div>

        <div className="linha-acoes">
          <Botao tipo="submit" icone={<BsFloppy size={16} />}>
            Salvar
          </Botao>

          <Botao 
            tipo="button" 
            icone={<BsFileEarmark size={16} />}
            onClick={novo}
          >
            Novo
          </Botao>
        </div>

      </form>

    </div>
  )
}