import { useState } from "react";
import { useParams } from "react-router-dom";

const api = "http://localhost:8090";

export async function buscarProdutos() {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("Token não encontrado");
    }

    const response = await fetch(`${api}/produtos`, {
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

export async function salvarProduto(e: React.FormEvent) {
    const [nome, setNome] = useState("");
    const [marca, setMarca] = useState("");
    const [tipoProduto, setTipoProduto] = useState("");
    const [comprimento, setComprimento] = useState("");
    const [largura, setLargura] = useState("");
    const [altura, setAltura] = useState("");
    const [preco, setPreco] = useState("");
    const [cor, setCor] = useState("");
    const [revestimento, setRevestimento] = useState("");
    const [densidade, setDensidade] = useState("");
    const [cargaSuportada, setCargaSuportada] = useState("");
    const [tratamentosEspeciais, setTratamentosEspeciais] = useState("");
    const { id } = useParams<{ id: string }>()
    const isEdicao = !!id
    
    e.preventDefault();

    const payload = {
        nome,
        marca,
        tipoProduto,
        comprimento,
        largura,
        altura,
        preco,
        cor,
        revestimento,
        densidade,
        cargaSuportada,
        tratamentosEspeciais
    }

    const url = isEdicao
        ? `http://localhost:8090/produtos/${id}`
        : "http://localhost:8090/produtos"

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
            throw new Error("Erro ao cadastrar produto");
        }

        alert("Produto cadastrada com sucesso!");
    } catch (error) {
        console.error(error);
        alert("Erro no cadastro");
    }
}