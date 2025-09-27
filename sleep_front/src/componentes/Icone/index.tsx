import type { IconType } from "react-icons";

interface PropsIcone {
  icone: IconType;
}

export default function Icone({ icone: Icone }: PropsIcone) {
  return (
    <div>
      <Icone />
    </div>
  );
}