export default class Cl_vComensalPlain {
    inNombre;
    inApellido;
    inCedula;
    inSexoM;
    inSexoF;
    inFechaNac;
    inTurno;
    btAceptar;
    btCancelar;
    vista;
    constructor() {
        this.vista = document.getElementById("comensal");
        this.inNombre = document.getElementById("comensal_inNombre");
        this.inApellido = document.getElementById("comensal_inApellido");
        this.inCedula = document.getElementById("comensal_inCedula");
        this.inSexoM = document.getElementById("comensal_inSexoM");
        this.inSexoF = document.getElementById("comensal_inSexoF");
        this.inFechaNac = document.getElementById("comensal_inFechaNac");
        this.inTurno = document.getElementById("comensal_inTurno");
        this.btAceptar = document.getElementById("comensal_btAceptar");
        this.btCancelar = document.getElementById("comensal_btCancelar");
    }
    get nombre() { return this.inNombre.value.trim(); }
    get apellido() { return this.inApellido.value.trim(); }
    get cedula() { return this.inCedula.value.trim(); }
    get sexo() { return this.inSexoM.checked ? "M" : "F"; }
    get fechaNac() { return this.inFechaNac.value; }
    get turno() { return parseInt(this.inTurno.value); }
    onAceptar(callback) { this.btAceptar.onclick = callback; }
    onCancelar(callback) { this.btCancelar.onclick = callback; }
    mostrar() {
        this.inNombre.value = "";
        this.inApellido.value = "";
        this.inCedula.value = "";
        this.inSexoM.checked = true;
        this.inFechaNac.value = "";
        this.inTurno.value = "1";
        if (this.vista)
            this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista)
            this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vComensalPlain.js.map