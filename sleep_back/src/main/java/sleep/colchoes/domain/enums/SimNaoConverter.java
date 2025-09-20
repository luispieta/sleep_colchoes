package sleep.colchoes.domain.enums;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class SimNaoConverter implements AttributeConverter<SimNao, String> {

    @Override
    public String convertToDatabaseColumn (SimNao atributo) {
        return (atributo == null) ? null : atributo.getCodigo();
    }

    @Override
    public SimNao convertToEntityAttribute(String codigo) {
        return SimNao.fromCodigo(codigo);
    }

}
