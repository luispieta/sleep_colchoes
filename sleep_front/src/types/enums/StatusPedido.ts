export const StatusPedido = {
  PENDENTE: "PENDENTE",
  APROVADO: "APROVADO",
  CANCELADO: "CANCELADO",
} as const;

export type StatusPedido = typeof StatusPedido[keyof typeof StatusPedido];

export const StatusPedidoLabel: Record<StatusPedido, string> = {
  PENDENTE: "Pedndente",
  APROVADO: "Aprovado",
  CANCELADO: "Cancelado",
};
