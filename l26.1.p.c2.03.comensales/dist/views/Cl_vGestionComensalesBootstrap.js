export default class Cl_vGestionComensalesBootstrap {
    btNuevo;
    lblTotalComensales;
    lblTotalRecaudado;
    lblPromedio;
    divPorcentajesTurno;
    divPorcentajesDescuento;
    constructor() {
        this.btNuevo = document.getElementById("btnNuevoComensal");
        this.lblTotalComensales = document.getElementById("totalComensales");
        this.lblTotalRecaudado = document.getElementById("totalRecaudado");
        this.lblPromedio = document.getElementById("promedioPago");
        this.divPorcentajesTurno = document.getElementById("porcentajesTurno");
        this.divPorcentajesDescuento = document.getElementById("porcentajesDescuento");
    }
    onNuevoComensal(callback) {
        this.btNuevo.onclick = callback;
    }
    reportar(data) {
        this.lblTotalComensales.innerText = `${data.totalComensales}`;
        this.lblTotalRecaudado.innerText = `$${data.totalRecaudado.toFixed(2)}`;
        this.lblPromedio.innerText = `$${data.promedioPago.toFixed(2)}`;
        this.divPorcentajesTurno.innerHTML = data.porcentajesTurno
            .map((p) => `<li class="list-group-item">${p.turno}: ${p.porcentaje.toFixed(2)}%</li>`)
            .join("");
        this.divPorcentajesDescuento.innerHTML = data.porcentajesDescuento
            .map((p) => `<li class="list-group-item">${p.tipo}: ${p.porcentaje.toFixed(2)}%</li>`)
            .join("");
    }
}
//# sourceMappingURL=Cl_vGestionComensalesBootstrap.js.map