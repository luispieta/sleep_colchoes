import { BsArrowLeftShort, BsBoxSeam, BsFileEarmark, BsFloppy } from "react-icons/bs";
import Botao from "../../../componentes/Botao";
import Campos from "../../../componentes/Campos";
import MenuLateral from "../../../layouts/MenuLateral";
import { useState } from "react";
import Link from "../../../componentes/Link";
import Icone from "../../../componentes/Icone";
import "./cadastroProduto.scss"

export default function CadastroProduto() {
    const [nome, setNome] = useState("");
    const [marca, setMarca] = useState("");
    const [tipoProduto, setTipoProduto] = useState("");
    const [comprimento, setComprimento] = useState("");
    const [largura, setLargura] = useState("");
    const [altura, setAltura] = useState("");
    const [preco, setPreco] = useState("");
    const [cor, setCor] = useState("");
    const [revestimento, setRevestimento] = useState("");
    const [densidade, setDensidade] = useState("");
    const [cargaSuportada, setCargaSuportada] = useState("");
    const [tratamentosEspeciais, setTratamentosEspeciais] = useState("");

    async function cadastrarProduto(e: React.FormEvent) {
        e.preventDefault();

        const payload = {
            nome,
            marca,
            tipoProduto,
            comprimento,
            largura,
            altura,
            preco,
            cor,
            revestimento,
            densidade,
            cargaSuportada,
            tratamentosEspeciais
        }

        try {
            const response = await fetch("http://localhost:8090/produtos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Erro ao cadastrar produto");
            }

            alert("Produto cadastrada com sucesso!");
        } catch (error) {
            console.error(error);
            alert("Erro no cadastro");
        }
    }

    async function novo() {
        setNome("");
        setMarca("");
        setTipoProduto("");
        setComprimento("");
        setLargura("");
        setAltura("");
        setPreco("");
        setCor("");
        setRevestimento("");
        setDensidade("");
        setCargaSuportada("");
        setTratamentosEspeciais("");
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
    
            <form className="produto-conteiner" onSubmit={cadastrarProduto}>
                <div className="separador-com-texto">
                    <h4>Dados do Produto</h4>
                </div>        
                <div className="linha linha-2">
                    <Campos
                        tipo="text"
                        nome="campo-nome"
                        descricao="Digite o nome"
                        obrigatorio
                        valor={nome}
                        onChange={setNome}
                    >
                        Nome
                    </Campos>
        
                    <Campos
                        tipo="text"
                        nome="campo-marca"
                        descricao="Digite a marca"
                        valor={marca}
                        onChange={setMarca}
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
                        valor={comprimento}
                        onChange={setComprimento}
                    >
                        Comprimento
                    </Campos>

                    <Campos
                        tipo="number"
                        nome="campo-largura"
                        descricao="Digite a largura"
                        obrigatorio
                        valor={largura}
                        onChange={setLargura}
                    >
                        Largura
                    </Campos>
        
                    <Campos
                        tipo="number"
                        nome="campo-altura"
                        descricao="Digite a altura"
                        obrigatorio
                        valor={altura}
                        onChange={setAltura}
                    >
                        Altura
                    </Campos>
                </div>
        
                <div className="linha linha-3">
                    
                    <Campos
                        tipo="number"
                        nome="campo-preco"
                        descricao="Digite o preço"
                        obrigatorio
                        valor={preco}
                        onChange={setPreco}
                    >
                        Preço
                    </Campos>
        
                    <Campos
                        tipo="text"
                        nome="campo-cor"
                        descricao="Digite a cor"
                        valor={cor}
                        onChange={setCor}
                    >
                        Cor
                    </Campos>

                    <Campos
                        tipo="text"
                        nome="campo-tipo-produto"
                        descricao="Digite o tipo do produto"
                        obrigatorio
                        valor={tipoProduto}
                        onChange={setTipoProduto}
                    >
                        Tipo Produto
                    </Campos>
        
                </div>        
        
                <div className="linha linha-2">
                    <Campos
                        tipo="text"
                        nome="campo-revestimento"
                        descricao="Digite o revestimento"
                        valor={revestimento}
                        onChange={setRevestimento}
                    >
                        Revestimento
                    </Campos>
        
                    <Campos
                        tipo="text"
                        nome="campo-densidade"
                        descricao="Digite a densidade"
                        valor={densidade}
                        onChange={setDensidade}
                    >
                        Densidade
                    </Campos>        
        
                </div>
        
                <div className="linha linha-2">
                    
                    <Campos
                        tipo="number"
                        nome="campo-carga-suportada"
                        descricao="Digite a carga suportada"
                        valor={cargaSuportada}
                        onChange={setCargaSuportada}
                    >
                        Carga suportada
                    </Campos>

                    <Campos
                        tipo="text"
                        nome="campo-tratamentos-especiais"
                        descricao="Digite o tratamento especial"
                        valor={tratamentosEspeciais}
                        onChange={setTratamentosEspeciais}
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