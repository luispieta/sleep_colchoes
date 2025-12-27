type MascaraFn = (value: string) => string;

export const mascaras: Record<string, MascaraFn> = {
    cpf: (v) => v
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        .slice(0, 14),

    cep: (v) => v
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .slice(0, 9),

    telefone: (v) => v
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .slice(0, 15),

    preco: (v) => {
        const numero = v.replace(/\D/g, "");
        return (Number(numero) / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    },

};
