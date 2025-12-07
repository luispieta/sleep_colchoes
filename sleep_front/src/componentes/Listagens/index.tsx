import "./listagens.scss";

interface Colunas {
    cabecalho: string;     // Nome da coluna
    acessador?: string;  // Campo direto do objeto (opcional)
}

interface ListagensProps {
    titulo: string;
    colunas: Colunas[];
    data: any[];
    renderizarLinha?: (item: any) => React.ReactNode; 
}

export default function Listagens({
    titulo,
    colunas,
    data,
    renderizarLinha
}: ListagensProps) {

    return (
        <div className="conteudo-principal">
            <h1>{titulo}</h1>
            <table className="tabela">
                <thead>
                    <tr>
                        {colunas.map((col, index) => (
                            <th key={index}>{col.cabecalho}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) =>
                        renderizarLinha
                            ? renderizarLinha(item)
                            : (
                                <tr key={index}>
                                    {colunas.map((col, i) => (
                                        <td key={i}>{item[col.acessador ?? ""]}</td>
                                    ))}
                                </tr>
                            )
                    )}
                </tbody>
            </table>
        </div>
    );
}
