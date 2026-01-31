import { BsPencilFill } from "react-icons/bs"
import "./listagemPedido.scss"
import MenuLateral from "../../../layouts/MenuLateral"
import Listagens from "../../../componentes/Listagens"
import Filtro from "../../../componentes/Filtro"
import { useNavigate } from "react-router-dom"
import { listarPedidos } from "../../../services/pedidoService"
import { useEffect, useState } from "react"
import type { PedidoData } from "../../../types/pedido/PedidoData"

export default function ListagemPedido() {

    const navigate = useNavigate();

    function editarPedido(id: number) {
        navigate(`/pedido/cadastropedido/${id}`);
    }
        
    const [pedido, setPedido] = useState<PedidoData[]>([]);

    useEffect(() => {
        listarPedidos()
        .then(setPedido)
        .catch(console.error);
    }, []);

        const [filtro, setFiltro] = useState({
        codigo: "",
        texto: "",
        lista: ""
    });

    const pedidoFiltradas = pedido.filter(pedido => {
        return (
            (filtro.codigo === "" || pedido.id === Number(filtro.codigo)) &&
            (filtro.texto === "" || pedido.pessoa &&
            (filtro.lista === "" || pedido.statusPedido))
        );
    });

    const statusPedido = Array.from(
        new Set(
            pedido
            .map(pedido => pedido.statusPedido.toLowerCase())
            .filter(Boolean)
        )
    );

    return(
        <div className="listagem-pedido">
            <MenuLateral/>
            <div className="pedido-conteiner">
                <Filtro 
                    placeholder={"pedido"}
                    labelTexto={"Pedido"}
                    idTexto={"pedido"}
                    labelLista={"Status do pedido"}
                    idLista={"tipo-pedido"}
                    descricao={"Novo pedido"}
                    to={"/pedido/cadastropedido"} 
                    pesquisa={filtro} 
                    setPesquisa={setFiltro}
                    itens={statusPedido}                
                />  
                <Listagens
                    colunas={[
                        { cabecalho: "Código" },
                        { cabecalho: "Nome da Pessoa" },
                        { cabecalho: "Marca" },
                        { cabecalho: "Tipo do pedido" },
                        { cabecalho: "Medida" },
                        { cabecalho: "Preço" },
                        { cabecalho: "Ações" }
                    ]}
                    data={pedidoFiltradas}
                    renderizarLinha={(pedido) => (
                        <tr key={pedido.id}>
                            <td>{pedido.id}</td>
                            <td>{pedido.pessoa.nome}</td>
                            <td>{pedido.vendedor.nome}</td>
                            <td>{pedido.statusPedido}</td>
                            <td>R$ {pedido.valorTotal}</td>
                            <td>{pedido.enderecoEntrega.cidade} - {pedido.enderecoEntrega.uf}</td>
                            <td className="acoes">
                                <BsPencilFill 
                                    size={16}
                                    onClick={() => editarPedido(pedido.id)}
                                 />
                            </td>
                        </tr>
                    )}
                />
            </div>
        </div>

    )
} 