export default class Cl_vGestionComensalesPlain {
    btNuevoComensal;
    lblTotalComensales;
    lblTotalRecaudado;
    lblPromedioPago;
    listaPorcentajesTurno;
    listaPorcentajesDescuento;
    constructor() {
        this.btNuevoComensal = document.getElementById("body_btNuevoComensal");
        this.lblTotalComensales = document.getElementById("body_lblTotalComensales");
        this.lblTotalRecaudado = document.getElementById("body_lblTotalRecaudado");
        this.lblPromedioPago = document.getElementById("body_lblPromedioPago");
        this.listaPorcentajesTurno = document.getElementById("body_listaPorcentajesTurno");
        this.listaPorcentajesDescuento = document.getElementById("body_listaPorcentajesDescuento");
    }
    onNuevoComensal(callback) {
        this.btNuevoComensal.onclick = callback;
    }
    reportar(data) {
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
//# sourceMappingURL=Cl_vGestionComensalesPlain.js.map