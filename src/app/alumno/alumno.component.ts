import { Component, OnInit } from '@angular/core';
import { AlumnoService } from './alumno.service';
import { Alumno } from './Alumno';

import { Router,ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  id: number;
  public listAlumnos: Array<Alumno>;
  public loading: boolean = false;

  constructor( private router: Router,private alumnoservice: AlumnoService) { }

  ngOnInit() {
     this.refreshAlumnos();
  }

   refreshAlumnos() {
    console.log("Entra en el modo refreshAlumnos");
    this.loading=true;
    this.alumnoservice.getAlumnosList().then(_ => this.loading=false)
  }

  delete(alumno: Alumno) {
    this.alumnoservice.delete2(alumno.id);
    this.refreshAlumnos();
  }
  goToAlumnoDetails(id: number) {
    this.alumnoservice.id=id;
    this.router.navigate(['alumno/modificar-alumno']);
  }

  goToAlumnoNew(id: number) {
    this.router.navigate(['alumno/agregar-alumno']);
  }

  doSearch(term: string) {
    this.alumnoservice.doSearch(term);
  }
}
