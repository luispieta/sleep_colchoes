package sleep.colchoes.domain.enums;

public enum SimNao {
    SIM("S"),
    NAO("N");

    private String codigo;

    SimNao(String codigo) {
        this.codigo = codigo;
    }

    public String getCodigo() {
        return codigo;
    }

    public static SimNao fromCodigo(String codigo) {
        if (codigo == null) return null;
        return switch (codigo.toUpperCase()) {
            case "S" -> SIM;
            case "N" -> NAO;
            default -> throw new IllegalArgumentException("Código inválido: " + codigo);
        };
    }
}
