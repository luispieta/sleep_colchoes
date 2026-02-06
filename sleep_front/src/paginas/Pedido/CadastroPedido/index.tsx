import { BsArrowLeftShort, BsCart4, BsFileEarmark, BsFloppy } from "react-icons/bs";
import Botao from "../../../componentes/Botao";
import MenuLateral from "../../../layouts/MenuLateral";
import Link from "../../../componentes/Link";
import Icone from "../../../componentes/Icone";
import "./cadastroPedido.scss"
import { useNavigate, useParams } from "react-router-dom";
import { usePedidoForm } from "../../../hooks/pedido/usePedidoForm";
import { usePedido } from "../../../hooks/pedido/usePedido";
import { listarPedidos, salvarPedidoApi } from "../../../services/pedidoService";
import ListaSuspensaPesquisa from "../../../componentes/ListaSuspensaPesquisa";
import { useEffect, useState } from "react";
import type { PedidoData } from "../../../types/pedido/PedidoData";

export default function CadastroPedido() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const {
        estados,
        setters,
        montarPayload,
        limparFormulario,
    } = usePedidoForm();

    usePedido(id, setters);

    const [pedidos, setPedidos] = useState<PedidoData[]>([]);

    useEffect(() => {
    listarPedidos()
        .then(setPedidos)
        .catch(console.error);
    }, []);

    async function salvarPedido(e: React.FormEvent) {
        e.preventDefault();

        try {
            await salvarPedidoApi(montarPayload(), id);
            alert("Pedido salva com sucesso!");

        if (id) {
            navigate("/pedido/listagempedido");
        } else {
            limparFormulario();
        }
        } catch (error) {
            console.error(error);
            alert("Erro ao salvar pedido");
        }
    }

    function novo() {
        limparFormulario();
        navigate("/pedido/cadastropedido");
    }

    return(
        <div className="cadastro-pedido">
            <MenuLateral />

            <header className="cabecalho-cadastro">
                <Link to={"/pedido/listagempedido"}>
                    <div className="icone-retornar">
                      <Icone icone={<BsArrowLeftShort size={30}/>} />
                    </div>
                </Link>
                <Icone icone={<BsCart4 size={40}/>} /> 
                <span>Pedidos</span>
            </header>
    
            <form className="pedido-conteiner" onSubmit={salvarPedido}>
                <div className="separador-com-texto">
                    <h4>Dados do Pedido</h4>
                </div>        
                <div className="linha linha-2">
                    <ListaSuspensaPesquisa<PedidoData>
                    nome="pedido"
                    label="Pedido"
                    itens={pedidos}
                    getKey={(p) => p.id}
                    getLabel={(p) => `${p.id} - ${p.pessoa}`}
                    onSelect={(pedido) =>
                        setters.setPessoaId(pedido.id)
                    }
                />

                </div>

                <div className="linha linha-3">
                    
                </div>
        
                <div className="linha linha-3">
                    
                </div>        
        
                <div className="linha linha-2">
                    
                </div>
        
                <div className="linha linha-2">
                    
                    
                </div>
        
                <div className="linha-acoes">
                    <Botao tipo="submit" icone={<BsFloppy size={16} />}>
                        Salvar
                    </Botao>
        
                    <Botao 
                        tipo="button" 
                        icone={<BsFileEarmark size={16} />}
                        onClick={novo}
                    >
                        Novo
                    </Botao>
                </div>
            </form>
        </div>
    )
}