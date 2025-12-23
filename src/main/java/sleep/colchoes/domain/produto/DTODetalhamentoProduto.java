package sleep.colchoes.domain.produto;

public record DTODetalhamentoProduto(Long id, String nome, String marca, String tipoProduto, double comprimento, double largura,
                                     double altura, double preco, String cor, String revestimento, String densidade,
                                     double cargaSuportada, String tratamentosEspeciais) {

    public DTODetalhamentoProduto(Produto produto) {
        this(produto.getId(), produto.getNome(), produto.getMarca(), produto.getTipoProduto(), produto.getComprimento(),
                produto.getLargura(), produto.getAltura(), produto.getPreco(), produto.getCor(), produto.getRevestimento(), produto.getDensidade(),
                produto.getCargaSuportada(), produto.getTratamentosEspeciais());
    }
}