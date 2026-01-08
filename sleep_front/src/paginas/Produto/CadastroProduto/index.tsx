import { BsArrowLeftShort, BsBoxSeam, BsFileEarmark, BsFloppy } from "react-icons/bs";
import Botao from "../../../componentes/Botao";
import Campos from "../../../componentes/Campos";
import MenuLateral from "../../../layouts/MenuLateral";
import { useEffect, useState } from "react";
import Link from "../../../componentes/Link";
import Icone from "../../../componentes/Icone";
import "./cadastroProduto.scss"
import { useParams } from "react-router-dom";

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
    const { id } = useParams<{ id: string }>()
    const isEdicao = !!id

    useEffect(() => {
        if (!id) return

        async function carregarProduto() {
            const token = localStorage.getItem("token");
            if (!token) return;

            const response = await fetch(
                `http://localhost:8090/produtos/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Erro ao carregar produto");
            }

            const data = await response.json();

            setNome(data.nome ?? "");
            setMarca(data.marca ?? "");
            setTipoProduto(data.tipoProduto ?? "");
            setComprimento(data.comprimento ?? "");
            setLargura(data.largura ?? "");
            setAltura(data.altura ?? "");
            setPreco(data.preco ?? "");
            setCor(data.cor ?? "");
            setRevestimento(data.revestimento ?? "");
            setDensidade(data.densidade ?? "");
            setCargaSuportada(data.cargaSuportada ?? "");
            setTratamentosEspeciais(data.tratamentosEspeciais ?? "");
        }
        carregarProduto()
    }, [id])

    async function salvarProduto(e: React.FormEvent) {
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

        const url = isEdicao
            ? `http://localhost:8090/produtos/${id}`
            : "http://localhost:8090/produtos"

    const method = isEdicao ? "PUT" : "POST"

        try {
            const token = localStorage.getItem("token");

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
            },
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
                        valor={nome}
                        onChange={setNome}
                    >
                        Nome
                    </Campos>
        
                    <Campos
                        tipo="text"
                        nome="campo-marca"
                        descricao="Digite a marca"
                        obrigatorio
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