export interface I_vComensal {
  get nombre(): string;
  get apellido(): string;
  get cedula(): string;
  get sexo(): "M" | "F";
  get fechaNac(): string;
  get turno(): 1 | 2 | 3;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}