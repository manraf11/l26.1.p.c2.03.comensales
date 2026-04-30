import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mComensal extends Cl_mPersona {
  private _turno: 1 | 2 | 3;

  constructor({
    nombre,
    apellido,
    cedula,
    sexo,
    fechaNac,
    turno,
  }: {
    nombre: string;
    apellido: string;
    cedula: string;
    sexo: "M" | "F";
    fechaNac: string;
    turno: 1 | 2 | 3;
  }) {
    super({ nombre, apellido, cedula, sexo, fechaNac });
    this._turno = turno;
  }

  get turno(): 1 | 2 | 3 { return this._turno; }
  set turno(value: 1 | 2 | 3) { this._turno = value; }

  calcularCostoBase(): number {
    switch (this._turno) {
      case 1: return 5;
      case 2: return 7;
      case 3: return 10;
      default: return 0;
    }
  }

  calcularDescuento(): number {
    return this.esTerceraEdad() ? 0.5 : 0;
  }

  calcularPagoFinal(): number {
    return this.calcularCostoBase() * (1 - this.calcularDescuento());
  }

  obtenerNombreTurno(): string {
    switch (this._turno) {
      case 1: return "Desayuno";
      case 2: return "Almuerzo";
      case 3: return "Ambos";
      default: return "";
    }
  }

  mostrarDatos(): string {
    return `${this.nombre} ${this.apellido} (${this.cedula}) - Turno: ${this.obtenerNombreTurno()} - Paga: $${this.calcularPagoFinal().toFixed(2)}`;
  }
}