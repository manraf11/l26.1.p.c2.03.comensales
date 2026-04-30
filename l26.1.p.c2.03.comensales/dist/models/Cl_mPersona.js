export default class Cl_mPersona {
    _nombre;
    _apellido;
    _cedula;
    _sexo;
    _fechaNac;
    constructor({ nombre, apellido, cedula, sexo, fechaNac, }) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._cedula = cedula;
        this._sexo = sexo;
        this._fechaNac = new Date(fechaNac);
    }
    get nombre() { return this._nombre; }
    get apellido() { return this._apellido; }
    get cedula() { return this._cedula; }
    get sexo() { return this._sexo; }
    get fechaNac() { return this._fechaNac; }
    calcularEdad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this._fechaNac.getFullYear();
        const m = hoy.getMonth() - this._fechaNac.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < this._fechaNac.getDate()))
            edad--;
        return edad;
    }
    esTerceraEdad() {
        const edad = this.calcularEdad();
        if (this._sexo === "F")
            return edad > 50;
        return edad > 60;
    }
}
//# sourceMappingURL=Cl_mPersona.js.map