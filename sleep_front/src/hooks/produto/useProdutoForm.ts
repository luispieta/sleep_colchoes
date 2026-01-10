import { useState } from "react";
import type { ProdutoData } from "../../types/produto/ProdutoData";

export function useProdutoForm() {
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

  const toNumber = (value: string) => value === "" ? 0 : Number(value);

  function montarPayload(): Omit<ProdutoData, "id" | "ativo"> {
    return {
      nome,
      marca,
      tipoProduto,
      comprimento: toNumber(comprimento),
      largura: toNumber(largura),
      altura: toNumber(altura),
      preco: toNumber(preco),
      cor,
      revestimento,
      densidade,
      cargaSuportada: toNumber(preco),
      tratamentosEspeciais
    };
  }

  function limparFormulario() {
    setNome("");
    setMarca("");
    setTipoProduto("");
    setComprimento("");
    setLargura("");
    setAltura("");
    setPreco("");
    setCor("");
    setRevestimento("");
    setDensidade("");
    setCargaSuportada("");
    setTratamentosEspeciais("");
  }

  return {
    estados: {
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
    },
    setters: {
      setNome,
      setMarca,
      setTipoProduto,
      setComprimento,
      setLargura,
      setAltura,
      setPreco,
      setCor,
      setRevestimento,
      setDensidade,
      setCargaSuportada,
      setTratamentosEspeciais
    },
    montarPayload,
    limparFormulario,
  };
}
