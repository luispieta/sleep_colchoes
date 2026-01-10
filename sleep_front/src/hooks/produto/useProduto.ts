import { useEffect } from "react";
import { buscarProdutoPorId } from "../../services/produtoService";

export function useProduto(id?: string, setters?: any) {
  useEffect(() => {
    if (!id || !setters) return;

    buscarProdutoPorId(id)
      .then(data => {
        setters.setNome(data.nome ?? "");
        setters.setMarca(data.marca ?? "");
        setters.setTipoProduto(data.tipoProduto ?? "");
        setters.setComprimento(data.comprimento ?? "");
        setters.setLargura(data.largura ?? "");
        setters.setAltura(data.altura ?? "");
        setters.setPreco(data.preco ?? "");
        setters.setCor(data.cor ?? "");
        setters.setRevestimento(data.revestimento ?? "");
        setters.setDensidade(data.densidade ?? "");
        setters.setCargaSuportada(data.cargaSuportada ?? "");
        setters.setTratamentosEspeciais(data.tratamentosEspeciais ?? "");

      })
      .catch(console.error);
  }, [id]);
}
