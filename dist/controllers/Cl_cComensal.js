import Cl_mComensal from "../models/Cl_mComensal.js";
export default class Cl_cComensal {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarComensal(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mComensal({
            nombre: this.vista.nombre,
            apellido: this.vista.apellido,
            cedula: this.vista.cedula,
            sexo: this.vista.sexo,
            fechaNac: this.vista.fechaNac,
            turno: this.vista.turno,
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cComensal.js.map