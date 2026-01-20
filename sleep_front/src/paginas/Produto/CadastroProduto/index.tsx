import { BsArrowLeftShort, BsBoxSeam, BsFileEarmark, BsFloppy } from "react-icons/bs";
import Botao from "../../../componentes/Botao";
import Campos from "../../../componentes/Campos";
import MenuLateral from "../../../layouts/MenuLateral";
import Link from "../../../componentes/Link";
import Icone from "../../../componentes/Icone";
import "./cadastroProduto.scss"
import { useNavigate, useParams } from "react-router-dom";
import { salvarProdutoApi } from "../../../services/produtoService";
import { useProdutoForm } from "../../../hooks/produto/useProdutoForm";
import { useProduto } from "../../../hooks/produto/useProduto";

export default function CadastroProduto() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const {
        estados,
        setters,
        montarPayload,
        limparFormulario,
    } = useProdutoForm();

    useProduto(id, setters);

    async function salvarProduto(e: React.FormEvent) {
        e.preventDefault();

        try {
            await salvarProdutoApi(montarPayload(), id);
            alert("Produto salva com sucesso!");

        if (id) {
            navigate("/produto/listagemproduto");
        } else {
            limparFormulario();
        }
        } catch (error) {
            console.error(error);
            alert("Erro ao salvar produto");
        }
    }

    function novo() {
        limparFormulario();
        navigate("/produto/cadastroproduto");
    }
        
    return(
        <div className="cadastro-produto">
            <MenuLateral />

            <header className="cabecalho-cadastro">
                <Link to={"/produto/listagemproduto"}>
                    <div className="icone-retornar">
                      <Icone icone={<BsArrowLeftShort size={30}/>} />
                    </div>
                </Link>
                <Icone icone={<BsBoxSeam size={40}/>} /> 
                <span>Produtos</span>
            </header>
    
            <form className="produto-conteiner" onSubmit={salvarProduto}>
                <div className="separador-com-texto">
                    <h4>Dados do Produto</h4>
                </div>        
                <div className="linha linha-2">
                    <Campos
                        tipo="text"
                        nome="campo-nome"
                        descricao="Digite o nome"
                        obrigatorio
                        valor={estados.nome}
                        onChange={setters.setNome}
                    >
                        Nome
                    </Campos>
        
                    <Campos
                        tipo="text"
                        nome="campo-marca"
                        descricao="Digite a marca"
                        obrigatorio
                        valor={estados.marca}
                        onChange={setters.setMarca}
                    >
                        Marca
                    </Campos>
                </div>

                <div className="linha linha-3">
                    <Campos
                        tipo="number"
                        nome="campo-email"
                        descricao="Digite o comprimento"
                        obrigatorio
                        valor={estados.comprimento}
                        onChange={setters.setComprimento}
                    >
                        Comprimento
                    </Campos>

                    <Campos
                        tipo="number"
                        nome="campo-largura"
                        descricao="Digite a largura"
                        obrigatorio
                        valor={estados.largura}
                        onChange={setters.setLargura}
                    >
                        Largura
                    </Campos>
        
                    <Campos
                        tipo="number"
                        nome="campo-altura"
                        descricao="Digite a altura"
                        obrigatorio
                        valor={estados.altura}
                        onChange={setters.setAltura}
                    >
                        Altura
                    </Campos>
                </div>
        
                <div className="linha linha-3">
                    
                    <Campos
                        tipo="text"
                        nome="campo-preco"
                        descricao="Digite o preço"
                        obrigatorio
                        valor={estados.preco}
                        onChange={setters.setPreco}
                        mascara="preco"
                    >
                        Preço
                    </Campos>
        
                    <Campos
                        tipo="text"
                        nome="campo-cor"
                        descricao="Digite a cor"
                        valor={estados.cor}
                        onChange={setters.setCor}
                    >
                        Cor
                    </Campos>

                    <Campos
                        tipo="text"
                        nome="campo-tipo-produto"
                        descricao="Digite o tipo do produto"
                        obrigatorio
                        valor={estados.tipoProduto}
                        onChange={setters.setTipoProduto}
                    >
                        Tipo Produto
                    </Campos>
        
                </div>        
        
                <div className="linha linha-2">
                    <Campos
                        tipo="text"
                        nome="campo-revestimento"
                        descricao="Digite o revestimento"
                        valor={estados.revestimento}
                        onChange={setters.setRevestimento}
                    >
                        Revestimento
                    </Campos>
        
                    <Campos
                        tipo="text"
                        nome="campo-densidade"
                        descricao="Digite a densidade"
                        valor={estados.densidade}
                        onChange={setters.setDensidade}
                    >
                        Densidade
                    </Campos>        
        
                </div>
        
                <div className="linha linha-2">
                    
                    <Campos
                        tipo="number"
                        nome="campo-carga-suportada"
                        descricao="Digite a carga suportada"
                        valor={estados.cargaSuportada}
                        onChange={setters.setCargaSuportada}
                    >
                        Carga suportada
                    </Campos>

                    <Campos
                        tipo="text"
                        nome="campo-tratamentos-especiais"
                        descricao="Digite o tratamento especial"
                        valor={estados.tratamentosEspeciais}
                        onChange={setters.setTratamentosEspeciais}
                    >
                        Tratamento especial
                    </Campos>  
        
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