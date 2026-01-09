import { useState } from "react";
import { useParams } from "react-router-dom";
import type { Genero } from "../types/enums/Genero";

const api = "http://localhost:8090";

export async function buscarPessoas() {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("Token não encontrado");
    }

    const response = await fetch(`${api}/pessoas`, {
        headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Erro ${response.status} ao buscar produtos`);
    }

    return response.json();
}

export async function salvarPessoa(e: React.FormEvent) {

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
    const isEdicao = !!id

    e.preventDefault()

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
    }

  const url = isEdicao
    ? `http://localhost:8090/pessoas/${id}`
    : "http://localhost:8090/pessoas"

  const method = isEdicao ? "PUT" : "POST"

      try {
          const token = localStorage.getItem("token");

          const response = await fetch(url, {
              method,
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
          },
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