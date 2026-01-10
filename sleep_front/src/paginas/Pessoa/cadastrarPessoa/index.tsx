import { BsArrowLeftShort, BsFileEarmark, BsFloppy, BsPersonCircle } from "react-icons/bs";
import Botao from "../../../componentes/Botao";
import Campos from "../../../componentes/Campos";
import ListaSuspensa from "../../../componentes/ListaSuspensa";
import MenuLateral from "../../../layouts/MenuLateral";
import { Genero, GeneroLabel } from "../../../types/enums/Genero";
import "./cadastrarPessoa.scss"
import Tab from "../../../layouts/Tab";
import Icone from "../../../componentes/Icone";
import Link from "../../../componentes/Link";
import { viaCep } from "../../../services/viaCep";
import { useNavigate, useParams } from "react-router-dom";
import { salvarPessoaApi } from "../../../services/pessoaService";
import { usePessoaForm } from "../../../hooks/pessoa/usePessoaForm";
import { usePessoa } from "../../../hooks/pessoa/usePessoa";

export default function CadastrarPessoa() {
  
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    estados,
    setters,
    montarPayload,
    limparFormulario,
  } = usePessoaForm();

  usePessoa(id, setters);

  async function salvarPessoa(e: React.FormEvent) {
    e.preventDefault();

    try {
      await salvarPessoaApi(montarPayload(), id);
      alert("Pessoa salva com sucesso!");

      if (id) {
        navigate("/pessoa/listagempessoa");
      } else {
        limparFormulario();
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar pessoa");
    }
  }

  function novo() {
    limparFormulario();
    navigate("/pessoa/cadastropessoa");
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
            valor={estados.nome}
            onChange={setters.setNome}
          >
            Nome
          </Campos>

          <Campos
            tipo="text"
            nome="campo-cpf"
            descricao="000.000.000-00"
            obrigatorio
            valor={estados.cpf}
            onChange={setters.setCpf}
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
            valor={estados.telefone}
            onChange={setters.setTelefone}
            mascara="telefone"
          >
            Telefone
          </Campos>

          <Campos
            tipo="email"
            nome="campo-email"
            descricao="Digite seu e-mail"
            obrigatorio
            valor={estados.email}
            onChange={setters.setEmail}
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
            valor={estados.genero}
            onChange={e => setters.setGenero(e.target.value as Genero)}
          />

          <Campos
            tipo="date"
            nome="campo-data-nascimento"
            obrigatorio
            valor={estados.dataNascimento}
            onChange={setters.setDataNascimento}
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
            valor={estados.cep}
            onChange={setters.setCep}
            mascara="cep"
            onBlur={async () => {
              const endereco = await viaCep(estados.cep);

              setters.setRua(endereco.logradouro);
              setters.setBairro(endereco.bairro);
              setters.setCidade(endereco.localidade);
              setters.setUf(endereco.uf);
            }}
          >
            CEP
          </Campos>

          <Campos
            tipo="text"
            nome="campo-rua"
            descricao="Digite sua rua"
            obrigatorio
            valor={estados.rua}
            onChange={setters.setRua}
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
            valor={estados.bairro}
            onChange={setters.setBairro}
          >
            Bairro
          </Campos>

          <Campos
            tipo="text"
            nome="campo-numero"
            descricao="Digite o número"
            obrigatorio
            valor={estados.numero}
            onChange={setters.setNumero}
          >
            Número
          </Campos>        

          <Campos
            tipo="text"
            nome="campo-uf"
            descricao="UF"
            obrigatorio
            valor={estados.uf}
            onChange={setters.setUf}
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
            valor={estados.cidade}
            onChange={setters.setCidade}
          >
            Cidade
          </Campos>  

          <Campos
            tipo="text"
            nome="campo-logradouro"
            descricao="Digite o logradouro"
            obrigatorio
            valor={estados.logradouro}
            onChange={setters.setLogradouro}
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