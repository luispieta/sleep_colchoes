import "./listagens.scss";

interface Colunas {
    cabecalho: string;
    acessador?: string;
}

interface ListagensProps {
    colunas: Colunas[];
    data: any[];
    renderizarLinha?: (item: any) => React.ReactNode; 
}

export default function Listagens({
    colunas,
    data,
    renderizarLinha
}: ListagensProps) {
    
    return (
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
    );
}
