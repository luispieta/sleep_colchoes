package sleep.colchoes.domain.enums;

import lombok.Getter;

@Getter
public enum SimNao {
    SIM(1),
    NAO(0);

    private final Integer codigo;

    SimNao(Integer codigo) {
        this.codigo = codigo;
    }

    public static SimNao fromCodigo(Integer codigo) {
        if (codigo == null) return null;
        return switch (codigo) {
            case 1 -> SIM;
            case 0 -> NAO;
            default -> throw new IllegalArgumentException("Código inválido: " + codigo);
        };
    }
}
