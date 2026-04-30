import Cl_mComensal from "../models/Cl_mComensal.js";
import { I_vGestionComensales } from "../interfaces/I_vGestionComensales.js";
import Cl_cComensal from "./Cl_cComensal.js";

export default class Cl_cGestionComensales {
  private comensales: Cl_mComensal[] = []; // ← acumulador aquí
  private vista: I_vGestionComensales;
  private cComensal: Cl_cComensal;

  constructor(vista: I_vGestionComensales, controladorComensal: Cl_cComensal) {
    this.vista = vista;
    this.cComensal = controladorComensal;
    this.vista.onNuevoComensal(() => this.procesarNuevoComensal());
    //this.cargarDatosIniciales();
    this.actualizarReportes();
  }

  private cargarDatosIniciales(): void {
    const datos = [
      {
        nombre: "Ana",
        apellido: "Lopez",
        cedula: "111",
        sexo: "F" as const,
        fechaNac: "1970-01-01",
        turno: 2 as const,
      },
      {
        nombre: "Luis",
        apellido: "Perez",
        cedula: "222",
        sexo: "M" as const,
        fechaNac: "1960-05-20",
        turno: 3 as const,
      },
      {
        nombre: "Carlos",
        apellido: "Gomez",
        cedula: "333",
        sexo: "M" as const,
        fechaNac: "1990-10-10",
        turno: 1 as const,
      },
      {
        nombre: "Marta",
        apellido: "Rios",
        cedula: "444",
        sexo: "F" as const,
        fechaNac: "2000-07-15",
        turno: 2 as const,
      },
      {
        nombre: "Jose",
        apellido: "Diaz",
        cedula: "555",
        sexo: "M" as const,
        fechaNac: "1955-03-25",
        turno: 1 as const,
      },
      {
        nombre: "Elena",
        apellido: "Suarez",
        cedula: "666",
        sexo: "F" as const,
        fechaNac: "1968-11-30",
        turno: 3 as const,
      },
      {
        nombre: "Pedro",
        apellido: "Morales",
        cedula: "777",
        sexo: "M" as const,
        fechaNac: "1985-09-09",
        turno: 2 as const,
      },
      {
        nombre: "Lucia",
        apellido: "Fernandez",
        cedula: "888",
        sexo: "F" as const,
        fechaNac: "1995-12-01",
        turno: 1 as const,
      },
      {
        nombre: "Miguel",
        apellido: "Torres",
        cedula: "999",
        sexo: "M" as const,
        fechaNac: "1978-06-18",
        turno: 3 as const,
      },
      {
        nombre: "Sofia",
        apellido: "Ramirez",
        cedula: "101",
        sexo: "F" as const,
        fechaNac: "2005-04-22",
        turno: 2 as const,
      },
      {
        nombre: "Manuel",
        apellido: "Perez",
        cedula: "323",
        sexo: "M" as const,
        fechaNac: "1990-03-25",
        turno: 1 as const,
      },
      {
        nombre: "Sabas",
        apellido: "Diaz",
        cedula: "342",
        sexo: "F" as const,
        fechaNac: "1955-03-25",
        turno: 1 as const,
      },
    ];
    for (const d of datos) {
      this.comensales.push(new Cl_mComensal(d));
    }
  }

  private procesarNuevoComensal(): void {
    this.cComensal.solicitarComensal((comensal) => {
      if (comensal) {
        this.comensales.push(comensal);
        this.actualizarReportes();
      }
    });
  }

  private actualizarReportes(): void {
  const total = this.comensales.length;
  const totalRecaudado = this.comensales.reduce((sum, c) => sum + c.calcularPagoFinal(), 0);
  const promedio = total === 0 ? 0 : totalRecaudado / total;

  const conteoTurno = { 1: 0, 2: 0, 3: 0 };
  for (const c of this.comensales) conteoTurno[c.turno]++;

  const porcentajesTurno = [
    { turno: "Desayuno", porcentaje: total === 0 ? 0 : (conteoTurno[1] / total) * 100 },
    { turno: "Almuerzo", porcentaje: total === 0 ? 0 : (conteoTurno[2] / total) * 100 },
    { turno: "Ambos", porcentaje: total === 0 ? 0 : (conteoTurno[3] / total) * 100 },
  ];

  let conDescuento = 0;
  for (const c of this.comensales) if (c.calcularDescuento() > 0) conDescuento++;

  const porcentajesDescuento = [
    { tipo: "Con descuento (3ra edad)", porcentaje: total === 0 ? 0 : (conDescuento / total) * 100 },
    { tipo: "Sin descuento", porcentaje: total === 0 ? 0 : ((total - conDescuento) / total) * 100 },
  ];

  this.vista.reportar({
    totalComensales: total,
    totalRecaudado,
    promedioPago: promedio,
    porcentajesTurno,
    porcentajesDescuento,
  });
}
}
