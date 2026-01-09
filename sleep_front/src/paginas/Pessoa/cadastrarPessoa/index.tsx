import { BsArrowLeftShort, BsFileEarmark, BsFloppy, BsPersonCircle } from "react-icons/bs";
import Botao from "../../../componentes/Botao";
import Campos from "../../../componentes/Campos";
import ListaSuspensa from "../../../componentes/ListaSuspensa";
import MenuLateral from "../../../layouts/MenuLateral";
import { Genero, GeneroLabel } from "../../../types/enums/Genero";
import { useEffect, useState } from "react";
import "./cadastrarPessoa.scss"
import Tab from "../../../layouts/Tab";
import Icone from "../../../componentes/Icone";
import Link from "../../../componentes/Link";
import { viaCep } from "../../../services/viaCep";
import { useParams } from "react-router-dom";
import { salvarPessoa } from "../../../services/pessoaService";

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
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (!id) return

    async function carregarPessoa() {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch(
          `http://localhost:8090/pessoas/${id}`,
          {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          }
      );

      if (!response.ok) {
          throw new Error("Erro ao carregar pessoa");
      }

      const data = await response.json();

      setNome(data.nome ?? "")
      setCpf(data.cpf ?? "")
      setTelefone(data.telefone ?? "")
      setEmail(data.email ?? "")
      setGenero(data.genero ?? "")
      setDataNascimento(data.dataNascimento ?? "")

      setRua(data.enderecoEntrega?.rua ?? "")
      setNumero(data.enderecoEntrega?.numero ?? "")
      setCidade(data.enderecoEntrega?.cidade ?? "")
      setBairro(data.enderecoEntrega?.bairro ?? "")
      setUf(data.enderecoEntrega?.uf ?? "")
      setCep(data.enderecoEntrega?.cep ?? "")
      setLogradouro(data.enderecoEntrega?.logradouro ?? "")
    }

    carregarPessoa()
  }, [id])

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

      <header className="cabecalho-cadastro">
        <Link to={"/pessoa/listagempessoa"}>
          <div className="icone-retornar">
            <Icone icone={<BsArrowLeftShort size={30}/>} />
          </div>
        </Link>
        <Icone icone={<BsPersonCircle size={40}/>} /> 
        <span>Clientes</span>
      </header>

      <Tab abas={[
        { label: "Cadastro Gerais", rota: "/pessoa/cadastropessoa" },]}>
      </Tab>

      <form className="pessoa-conteiner" onSubmit={salvarPessoa}>
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
            onChange={setNome}
          >
            Nome
          </Campos>

          <Campos
            tipo="text"
            nome="campo-cpf"
            descricao="000.000.000-00"
            obrigatorio
            valor={cpf}
            onChange={setCpf}
            mascara="cpf"
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
            onChange={setTelefone}
            mascara="telefone"
          >
            Telefone
          </Campos>

          <Campos
            tipo="email"
            nome="campo-email"
            descricao="Digite seu e-mail"
            obrigatorio
            valor={email}
            onChange={setEmail}
          >
            E-mail
          </Campos>
        </div>

        <div className="linha linha-2">
          <ListaSuspensa
            nome="genero"
            children="Gênero *"
            obrigatorio
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
            onChange={setDataNascimento}
          >
            Data de Nascimento
          </Campos>
        </div>

        <div className="separador-com-texto">
          <h4>Dados do Endereço</h4>
        </div>

        <div className="linha linha-2">
          <Campos
            tipo="text"
            nome="campo-cep"
            descricao="00000-000"
            obrigatorio
            valor={cep}
            onChange={setCep}
            mascara="cep"
            onBlur={async () => {
              const endereco = await viaCep(cep);

              setRua(endereco.logradouro);
              setBairro(endereco.bairro);
              setCidade(endereco.localidade);
              setUf(endereco.uf);
            }}
          >
            CEP
          </Campos>

          <Campos
            tipo="text"
            nome="campo-rua"
            descricao="Digite sua rua"
            obrigatorio
            valor={rua}
            onChange={setRua}
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
            onChange={setBairro}
          >
            Bairro
          </Campos>

          <Campos
            tipo="text"
            nome="campo-numero"
            descricao="Digite o número"
            obrigatorio
            valor={numero}
            onChange={setNumero}
          >
            Número
          </Campos>        

          <Campos
            tipo="text"
            nome="campo-uf"
            descricao="UF"
            obrigatorio
            valor={uf}
            onChange={setUf}
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
            onChange={setCidade}
          >
            Cidade
          </Campos>  

          <Campos
            tipo="text"
            nome="campo-logradouro"
            descricao="Digite o logradouro"
            obrigatorio
            valor={logradouro}
            onChange={setLogradouro}
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