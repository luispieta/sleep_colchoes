import type { ReactNode } from "react";

interface PropsIcone {
  icone: ReactNode;
}

export default function Icone({ icone }: PropsIcone) {
  return( 
    <div className="icone">
      <span >{icone}</span>
    </div>
  )
}