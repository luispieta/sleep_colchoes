export const Genero = {
  MASCULINO: "MASCULINO",
  FEMININO: "FEMININO",
  PREFIRO_NAO_INFORMAR: "PREFIRO_NAO_INFORMAR",
  OUTRO: "OUTRO",
} as const;

export type Genero = typeof Genero[keyof typeof Genero];

export const GeneroLabel: Record<Genero, string> = {
  MASCULINO: "Masculino",
  FEMININO: "Feminino",
  PREFIRO_NAO_INFORMAR: "Prefiro não informar",
  OUTRO: "Outro"
};
