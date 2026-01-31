package sleep.colchoes.domain.enums;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class StatusPedidoConverter implements AttributeConverter<StatusPedido, String> {

    @Override
    public String convertToDatabaseColumn (StatusPedido atributo) {

        return (atributo == null) ? null : atributo.getCodigo();
    }

    @Override
    public StatusPedido convertToEntityAttribute(String codigo) {
        return StatusPedido.fromCodigo(codigo);
    }

}
