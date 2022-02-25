export const MENSAJES: string[] = [
  'El texto es muy corto',
  'El texto es muy largo1'
];

export function obtenerError(numError: number): string {

  return MENSAJES[numError];
};