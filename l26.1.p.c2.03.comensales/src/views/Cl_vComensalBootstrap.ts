import { I_vComensal } from "../interfaces/I_vComensal.js";
declare var bootstrap: any;

export default class Cl_vComensalBootstrap implements I_vComensal {
  private inNombre: HTMLInputElement;
  private inApellido: HTMLInputElement;
  private inCedula: HTMLInputElement;
  private inSexoM: HTMLInputElement;
  private inSexoF: HTMLInputElement;
  private inFechaNac: HTMLInputElement;
  private inTurno: HTMLSelectElement;
  private btAceptar: HTMLButtonElement;
  private btCancelar: HTMLButtonElement;
  private modal: any;

  constructor() {
    this.inNombre = document.getElementById("comensal_nombre") as HTMLInputElement;
    this.inApellido = document.getElementById("comensal_apellido") as HTMLInputElement;
    this.inCedula = document.getElementById("comensal_cedula") as HTMLInputElement;
    this.inSexoM = document.getElementById("comensal_sexoM") as HTMLInputElement;
    this.inSexoF = document.getElementById("comensal_sexoF") as HTMLInputElement;
    this.inFechaNac = document.getElementById("comensal_fechaNac") as HTMLInputElement;
    this.inTurno = document.getElementById("comensal_turno") as HTMLSelectElement;
    this.btAceptar = document.getElementById("comensal_btAceptar") as HTMLButtonElement;
    this.btCancelar = document.getElementById("comensal_btCancelar") as HTMLButtonElement;
    this.modal = new bootstrap.Modal(document.getElementById("comensalModal"));
  }

  get nombre(): string { return this.inNombre.value.trim(); }
  get apellido(): string { return this.inApellido.value.trim(); }
  get cedula(): string { return this.inCedula.value.trim(); }
  get sexo(): "M" | "F" { return this.inSexoM.checked ? "M" : "F"; }
  get fechaNac(): string { return this.inFechaNac.value; }
  get turno(): 1 | 2 | 3 { return parseInt(this.inTurno.value) as 1 | 2 | 3; }

  onAceptar(callback: () => void): void { this.btAceptar.onclick = callback; }
  onCancelar(callback: () => void): void { this.btCancelar.onclick = callback; }

  mostrar(): void {
    this.inNombre.value = "";
    this.inApellido.value = "";
    this.inCedula.value = "";
    this.inSexoM.checked = true;
    this.inFechaNac.value = "";
    this.inTurno.value = "1";
    this.modal.show();
  }
  ocultar(): void { this.modal.hide(); }
}