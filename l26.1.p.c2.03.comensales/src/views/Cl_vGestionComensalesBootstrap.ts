import { I_vGestionComensales } from "../interfaces/I_vGestionComensales.js";

export default class Cl_vGestionComensalesBootstrap implements I_vGestionComensales {
  private btNuevo: HTMLButtonElement;
  private lblTotalComensales: HTMLElement;
  private lblTotalRecaudado: HTMLElement;
  private lblPromedio: HTMLElement;
  private divPorcentajesTurno: HTMLElement;
  private divPorcentajesDescuento: HTMLElement;

  constructor() {
    this.btNuevo = document.getElementById("btnNuevoComensal") as HTMLButtonElement;
    this.lblTotalComensales = document.getElementById("totalComensales") as HTMLElement;
    this.lblTotalRecaudado = document.getElementById("totalRecaudado") as HTMLElement;
    this.lblPromedio = document.getElementById("promedioPago") as HTMLElement;
    this.divPorcentajesTurno = document.getElementById("porcentajesTurno") as HTMLElement;
    this.divPorcentajesDescuento = document.getElementById("porcentajesDescuento") as HTMLElement;
  }

  onNuevoComensal(callback: () => void): void {
    this.btNuevo.onclick = callback;
  }

  reportar(data: any): void {
    this.lblTotalComensales.innerText = `${data.totalComensales}`;
    this.lblTotalRecaudado.innerText = `$${data.totalRecaudado.toFixed(2)}`;
    this.lblPromedio.innerText = `$${data.promedioPago.toFixed(2)}`;
    this.divPorcentajesTurno.innerHTML = data.porcentajesTurno
      .map((p: any) => `<li class="list-group-item">${p.turno}: ${p.porcentaje.toFixed(2)}%</li>`)
      .join("");
    this.divPorcentajesDescuento.innerHTML = data.porcentajesDescuento
      .map((p: any) => `<li class="list-group-item">${p.tipo}: ${p.porcentaje.toFixed(2)}%</li>`)
      .join("");
  }
}