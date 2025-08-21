package sleep.colchoes.domain.produto;

import sleep.colchoes.domain.enums.SimNao;

public record DTODetalhamentoProduto(Long id, String nome, String marca, String tipoProduto, double medida, double altura,
                                     double preco, String cor, String revestimento, String densidade, double cargaSuportada,
                                     String tratamentosEspeciais) {

    public DTODetalhamentoProduto(Produto produto) {
        this(produto.getId(), produto.getNome(), produto.getMarca(), produto.getTipoProduto(), produto.getMedida(),
                produto.getAltura(), produto.getMedida(), produto.getCor(), produto.getRevestimento(), produto.getDensidade(),
                produto.getCargaSuportada(), produto.getTratamentosEspeciais());
    }
}