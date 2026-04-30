import { I_vComensal } from "../interfaces/I_vComensal.js";

export default class Cl_vComensalPlain implements I_vComensal {
  private inNombre: HTMLInputElement;
  private inApellido: HTMLInputElement;
  private inCedula: HTMLInputElement;
  private inSexoM: HTMLInputElement;
  private inSexoF: HTMLInputElement;
  private inFechaNac: HTMLInputElement;
  private inTurno: HTMLSelectElement;
  private btAceptar: HTMLButtonElement;
  private btCancelar: HTMLButtonElement;
  private vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("comensal") as HTMLElement;
    this.inNombre = document.getElementById("comensal_inNombre") as HTMLInputElement;
    this.inApellido = document.getElementById("comensal_inApellido") as HTMLInputElement;
    this.inCedula = document.getElementById("comensal_inCedula") as HTMLInputElement;
    this.inSexoM = document.getElementById("comensal_inSexoM") as HTMLInputElement;
    this.inSexoF = document.getElementById("comensal_inSexoF") as HTMLInputElement;
    this.inFechaNac = document.getElementById("comensal_inFechaNac") as HTMLInputElement;
    this.inTurno = document.getElementById("comensal_inTurno") as HTMLSelectElement;
    this.btAceptar = document.getElementById("comensal_btAceptar") as HTMLButtonElement;
    this.btCancelar = document.getElementById("comensal_btCancelar") as HTMLButtonElement;
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
    if (this.vista) this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}