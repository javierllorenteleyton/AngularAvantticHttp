import { Injectable } from '@angular/core';
import { Alumno } from './Alumno';

@Injectable()
export class AlumnoService {
   
      id : number; 
     private listAlumnos: Array<Alumno>= [
        new Alumno('Simon','I','111111'), 
        new Alumno('Simon','II','111112'),
        new Alumno('Simon','III','111113'),
        new Alumno('Juan','I','111114'),
        new Alumno('Mateo','I','111115'),
        new Alumno('Carlos','I','111116'),
        new Alumno('Pedro','I','111117'),
        new Alumno('Santiago','II','111118'),  
        new Alumno('Pedro','II','111119'),
        new Alumno('Santiago','V','111120')                
     ];
     
     constructor() {}

     public getAlumnosList(): Array<Alumno> {
        console.log("Entra en el modo get alumno"+this.listAlumnos.length);
         return   this.listAlumnos;

     }

     
     addAlumno(alumno:Alumno){
        console.log("Entra en el modo add alumno"+this.listAlumnos.length);
        this.listAlumnos = [...this.listAlumnos, alumno];
        console.log("Entra en el modo add alumno"+this.listAlumnos.length);
    }

    getAlumno(id: number) : Alumno {
      return this.listAlumnos[id];
    }

    delete(alumno : Alumno) {
        for(var  i=0; i < this.listAlumnos.length;i++) {
           if (this.listAlumnos[i]['nombre']== alumno.nombre) {
            this.listAlumnos.splice(i,1);
           }
        }
    }
    modAlumno(id: number ,alumno : Alumno) {
        for(var  i=0; i < this.listAlumnos.length;i++) {
           if (i== id) {
            this.listAlumnos[i].nombre=alumno.nombre;

            this.listAlumnos[i].dni=alumno.dni;
            this.listAlumnos[i].apellidos=alumno.apellidos;
                }
        }
    }
}