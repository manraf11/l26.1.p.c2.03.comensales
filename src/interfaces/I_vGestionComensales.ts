export interface I_vGestionComensales {
  onNuevoComensal(callback: () => void): void;
  reportar(data: {
    totalComensales: number;
    totalRecaudado: number;
    promedioPago: number;
    porcentajesTurno: { turno: string; porcentaje: number }[];
    porcentajesDescuento: { tipo: string; porcentaje: number }[];
  }): void;
}