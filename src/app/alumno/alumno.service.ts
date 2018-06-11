import { Injectable } from '@angular/core';
import { Alumno } from './Alumno';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlumnoService {
    results: Alumno[];
    id: number;
    private listAlumnos: Array<Alumno> = [
        new Alumno(1, 'Simon', 'I', '111111'),
        new Alumno(2, 'Simon', 'II', '111112'),
        new Alumno(3, 'Simon', 'III', '111113'),
        new Alumno(4, 'Juan', 'I', '111114'),
        new Alumno(5, 'Mateo', 'I', '111115'),
        new Alumno(6, 'Carlos', 'I', '111116'),
        new Alumno(7, 'Pedro', 'I', '111117'),
        new Alumno(8, 'Santiago', 'II', '111118'),
        new Alumno(9, 'Pedro', 'II', '111119'),
        new Alumno(10, 'Santiago', 'V', '111120')
    ];
    private apiUrl: string = 'http://localhost:3000/alumnos';
    private apiUrl2: string = 'http://localhost:3000/';
    private headers = new Headers({ 'Content-Type': 'application/json'});
    constructor(private http: Http) {
       this.results = [];
    }

    public getAlumnosList() {
        let promise = new Promise((resolve, reject) => {
            let apiURL = this.apiUrl;
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => { //Succes
                        this.results = res.json().map(item => {
                            return new Alumno(
                                item.id,
                                item.nombre,
                                item.apellidos,
                                item.dni
                            );

                        });
                        //this.results = res.json().results;
                        resolve();
                    },
                    msg => { //Error
                        reject(msg);
                    }
                );
        });
        return promise;
    }

    create(alumno: Alumno): Promise<Alumno> {
        return this.http
          .post(this.apiUrl, JSON.stringify(alumno), {headers: this.headers})
          .toPromise()
          .then(res => res.json() as Alumno)
          .catch(this.handleError);
      }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }   
    addAlumno(alumno: Alumno) {

        console.log("Entra en el modo add alumno" + this.listAlumnos.length);
        this.listAlumnos = [...this.listAlumnos, alumno];
        console.log("Entra en el modo add alumno" + this.listAlumnos.length);
    }

    getAlumno(id: number): Alumno {
        return this.listAlumnos[id];
    }

    delete(alumno: Alumno) {
        for (var i = 0; i < this.listAlumnos.length; i++) {
            if (this.listAlumnos[i]['nombre'] == alumno.nombre) {
                this.listAlumnos.splice(i, 1);
            }
        }
    }
    modAlumno(id: number, alumno: Alumno) {
        for (var i = 0; i < this.listAlumnos.length; i++) {
            if (i == id) {
                this.listAlumnos[i].nombre = alumno.nombre;

                this.listAlumnos[i].dni = alumno.dni;
                this.listAlumnos[i].apellidos = alumno.apellidos;
            }
        }
    }

}