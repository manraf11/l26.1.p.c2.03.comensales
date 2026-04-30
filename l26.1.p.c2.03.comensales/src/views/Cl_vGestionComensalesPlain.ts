import { I_vGestionComensales } from "../interfaces/I_vGestionComensales.js";

export default class Cl_vGestionComensalesPlain implements I_vGestionComensales {
  private btNuevoComensal: HTMLButtonElement;
  private lblTotalComensales: HTMLElement;
  private lblTotalRecaudado: HTMLElement;
  private lblPromedioPago: HTMLElement;
  private listaPorcentajesTurno: HTMLElement;
  private listaPorcentajesDescuento: HTMLElement;

  constructor() {
    this.btNuevoComensal = document.getElementById("body_btNuevoComensal") as HTMLButtonElement;
    this.lblTotalComensales = document.getElementById("body_lblTotalComensales") as HTMLElement;
    this.lblTotalRecaudado = document.getElementById("body_lblTotalRecaudado") as HTMLElement;
    this.lblPromedioPago = document.getElementById("body_lblPromedioPago") as HTMLElement;
    this.listaPorcentajesTurno = document.getElementById("body_listaPorcentajesTurno") as HTMLElement;
    this.listaPorcentajesDescuento = document.getElementById("body_listaPorcentajesDescuento") as HTMLElement;
  }

  onNuevoComensal(callback: () => void): void {
    this.btNuevoComensal.onclick = callback;
  }

  reportar(data: {
    totalComensales: number;
    totalRecaudado: number;
    promedioPago: number;
    porcentajesTurno: { turno: string; porcentaje: number }[];
    porcentajesDescuento: { tipo: string; porcentaje: number }[];
  }): void {
    this.lblTotalComensales.innerText = `${data.totalComensales}`;
    this.lblTotalRecaudado.innerText = `${data.totalRecaudado.toFixed(2)}`;
    this.lblPromedioPago.innerText = `${data.promedioPago.toFixed(2)}`;

    this.listaPorcentajesTurno.innerHTML = data.porcentajesTurno
      .map(p => `<li>${p.turno}: ${p.porcentaje.toFixed(2)}%</li>`)
      .join("");

    this.listaPorcentajesDescuento.innerHTML = data.porcentajesDescuento
      .map(p => `<li>${p.tipo}: ${p.porcentaje.toFixed(2)}%</li>`)
      .join("");
  }
}