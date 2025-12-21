import { NavLink } from "react-router-dom";
import "./tab.scss";

export interface Aba {
  label: string;
  rota: string;
}

interface TabsProps {
  abas: Aba[];
}

export default function Tab({ abas }: TabsProps) {
  return (
    <div className="tabs-cadastro">
      {abas.map((aba) => (
        <NavLink
          key={aba.rota}
          to={aba.rota}
          className={({ isActive }) =>
            `aba ${isActive ? "ativa" : ""}`
          }
        >
          {aba.label}
        </NavLink>
      ))}
    </div>
  );
}
