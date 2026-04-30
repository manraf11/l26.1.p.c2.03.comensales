import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mComensal extends Cl_mPersona {
    _turno;
    constructor({ nombre, apellido, cedula, sexo, fechaNac, turno, }) {
        super({ nombre, apellido, cedula, sexo, fechaNac });
        this._turno = turno;
    }
    get turno() { return this._turno; }
    set turno(value) { this._turno = value; }
    calcularCostoBase() {
        switch (this._turno) {
            case 1: return 5;
            case 2: return 7;
            case 3: return 10;
            default: return 0;
        }
    }
    calcularDescuento() {
        return this.esTerceraEdad() ? 0.5 : 0;
    }
    calcularPagoFinal() {
        return this.calcularCostoBase() * (1 - this.calcularDescuento());
    }
    obtenerNombreTurno() {
        switch (this._turno) {
            case 1: return "Desayuno";
            case 2: return "Almuerzo";
            case 3: return "Ambos";
            default: return "";
        }
    }
    mostrarDatos() {
        return `${this.nombre} ${this.apellido} (${this.cedula}) - Turno: ${this.obtenerNombreTurno()} - Paga: $${this.calcularPagoFinal().toFixed(2)}`;
    }
}
//# sourceMappingURL=Cl_mComensal.js.map