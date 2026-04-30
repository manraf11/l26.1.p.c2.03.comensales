export default class Cl_vComensalBootstrap {
    inNombre;
    inApellido;
    inCedula;
    inSexoM;
    inSexoF;
    inFechaNac;
    inTurno;
    btAceptar;
    btCancelar;
    modal;
    constructor() {
        this.inNombre = document.getElementById("comensal_nombre");
        this.inApellido = document.getElementById("comensal_apellido");
        this.inCedula = document.getElementById("comensal_cedula");
        this.inSexoM = document.getElementById("comensal_sexoM");
        this.inSexoF = document.getElementById("comensal_sexoF");
        this.inFechaNac = document.getElementById("comensal_fechaNac");
        this.inTurno = document.getElementById("comensal_turno");
        this.btAceptar = document.getElementById("comensal_btAceptar");
        this.btCancelar = document.getElementById("comensal_btCancelar");
        this.modal = new bootstrap.Modal(document.getElementById("comensalModal"));
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
        this.modal.show();
    }
    ocultar() { this.modal.hide(); }
}
//# sourceMappingURL=Cl_vComensalBootstrap.js.map