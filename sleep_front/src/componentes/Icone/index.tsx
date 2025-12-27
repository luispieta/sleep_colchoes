import type { ReactNode } from "react";

interface PropsIcone {
  icone: ReactNode;
}

export default function Icone({ icone }: PropsIcone) {
  return <span >{icone}</span>
}