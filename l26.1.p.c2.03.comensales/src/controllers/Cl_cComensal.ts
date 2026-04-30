import { I_vComensal } from "../interfaces/I_vComensal.js";
import Cl_mComensal from "../models/Cl_mComensal.js";

export default class Cl_cComensal {
  private vista: I_vComensal;
  private callback!: (comensal: Cl_mComensal | null) => void;

  constructor(vista: I_vComensal) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarComensal(callback: (comensal: Cl_mComensal | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick() {
    this.callback(
      new Cl_mComensal({
        nombre: this.vista.nombre,
        apellido: this.vista.apellido,
        cedula: this.vista.cedula,
        sexo: this.vista.sexo,
        fechaNac: this.vista.fechaNac,
        turno: this.vista.turno,
      })
    );
    this.vista.ocultar();
  }
}