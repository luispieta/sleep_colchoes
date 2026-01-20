export async function viaCep(cep?: string) {
    try {
        const cepLimpo = cep?.replace(/\D/g, "");

        const response = await fetch(
            `https://viacep.com.br/ws/${cepLimpo}/json/`
        );

        if (!response.ok) {
            throw new Error("Erro ao consultar o CEP");
        }

        const data = await response.json();

        if (data.erro) {
            throw new Error("CEP inválido");
        }
        return data;

    } catch (error) {
        console.error(error);
        return null;
    }
}