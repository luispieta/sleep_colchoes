package sleep.colchoes.domain.enums;

public enum StatusPedido {
    PENDENTE("P"),
    APROVADO("A"),
    CANCELADO("C");

    private final String codigo;

    StatusPedido(String codigo) {
        this.codigo = codigo;
    }

    public String getCodigo() {
        return codigo;
    }

    public static StatusPedido fromCodigo(String codigo) {
        if (codigo == null) return null;
        return switch (codigo.toUpperCase()) {
            case "P" -> PENDENTE;
            case "A" -> APROVADO;
            case "C" -> CANCELADO;
            default -> throw new IllegalArgumentException("Código inválido: " + codigo);
        };

    }
}