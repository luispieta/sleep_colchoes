import Campos from "../../componentes/Campos";
import "./cadastroLoginEmpresa.scss";

export default function CadastroLogin() {
    return(
        <div className="cadastro-login">
            <Campos tipo={"text"} nome={"campo-razao-social"} children={false} />
            <Campos tipo={"text"} nome={"campo-nome-fantasia"} children={true} />
            <Campos tipo={"text"} nome={"campo-cnpj"} children={true} />
            <Campos tipo={"date"} nome={"campo-data-abertura"} children={true} />
            <Campos tipo={"text"} nome={"campo-telefone"} children={true} />
            <Campos tipo={"text"} nome={"campo-rua"} children={true} />
            <Campos tipo={"numero"} nome={"campo-numero"} children={true} />
            <Campos tipo={"text"} nome={"campo-cidade"} children={true} />
            <Campos tipo={"text"} nome={"campo-bairro"} children={true} />
            <Campos tipo={"text"} nome={"campo-uf"} children={true} />
            <Campos tipo={"text"} nome={"campo-cep"} children={true} />
            <Campos tipo={"text"} nome={"campo-logradouro"} children={true} />
        </div>
    )
}