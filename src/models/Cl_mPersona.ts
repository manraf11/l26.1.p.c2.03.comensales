export default abstract class Cl_mPersona {
  protected _nombre: string;
  protected _apellido: string;
  protected _cedula: string;
  protected _sexo: "M" | "F";
  protected _fechaNac: Date;

  constructor({
    nombre,
    apellido,
    cedula,
    sexo,
    fechaNac,
  }: {
    nombre: string;
    apellido: string;
    cedula: string;
    sexo: "M" | "F";
    fechaNac: string;
  }) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._cedula = cedula;
    this._sexo = sexo;
    this._fechaNac = new Date(fechaNac);
  }

  get nombre(): string { return this._nombre; }
  get apellido(): string { return this._apellido; }
  get cedula(): string { return this._cedula; }
  get sexo(): "M" | "F" { return this._sexo; }
  get fechaNac(): Date { return this._fechaNac; }

  calcularEdad(): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - this._fechaNac.getFullYear();
    const m = hoy.getMonth() - this._fechaNac.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < this._fechaNac.getDate())) edad--;
    return edad;
  }

  esTerceraEdad(): boolean {
    const edad = this.calcularEdad();
    if (this._sexo === "F") return edad > 50;
    return edad > 60;
  }

  abstract mostrarDatos(): string;
}