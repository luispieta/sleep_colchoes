import { useState } from "react";
import type { Genero } from "../../types/enums/Genero";
import type { PessoaData } from "../../types/pessoa/PessoaData";

export function usePessoaForm() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [genero, setGenero] = useState<Genero | "">("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [vendedor, setVendedor] = useState<boolean>(false);
  const [ativo, setAtivo] = useState<boolean>(true);

  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [uf, setUf] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");

  function montarPayload(): Omit<PessoaData, "id"> {
    return {
      nome,
      cpf,
      telefone,
      email,
      genero: genero as Genero,
      dataNascimento: new Date(dataNascimento),
      vendedor,
      ativo,
      enderecoEntrega: {
        id: 0,
        rua,
        numero,
        cidade,
        bairro,
        uf,
        cep,
        logradouro,
      },
      enderecoCobranca: {
        id: 0,
        rua,
        numero,
        cidade,
        bairro,
        uf,
        cep,
        logradouro,
      },
    };
  }

  function limparFormulario() {
    setNome("");
    setCpf("");
    setTelefone("");
    setEmail("");
    setGenero("");
    setDataNascimento("");
    setVendedor(false);
    setAtivo(false);

    setRua("");
    setNumero("");
    setCidade("");
    setBairro("");
    setUf("");
    setCep("");
    setLogradouro("");
  }

  return {
    estados: {
      nome,
      cpf,
      telefone,
      email,
      genero,
      dataNascimento,
      rua,
      numero,
      cidade,
      bairro,
      uf,
      cep,
      logradouro,
      vendedor,
      ativo
    },
    setters: {
      setNome,
      setCpf,
      setTelefone,
      setEmail,
      setGenero,
      setDataNascimento,
      setRua,
      setNumero,
      setCidade,
      setBairro,
      setUf,
      setCep,
      setLogradouro,
      setVendedor,
      setAtivo
    },
    montarPayload,
    limparFormulario,
  };
}
