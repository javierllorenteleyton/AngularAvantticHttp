export class Alumno {
    nombre: string;
    apellidos: string;
    dni: string;

    constructor(
        nombre: string,
        apellidos: string,
        dni: string
    ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
    }
}