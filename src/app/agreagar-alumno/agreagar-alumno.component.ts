import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno/Alumno';
import { AlumnoService } from '../alumno/alumno.service';
@Component({
  selector: 'app-agreagar-alumno',
  templateUrl: './agreagar-alumno.component.html',
  styleUrls: ['./agreagar-alumno.component.css']
})
export class AgreagarAlumnoComponent implements OnInit {
  alumno: Alumno;
  active = true;
  constructor( private alumnoservice: AlumnoService) { }

  ngOnInit() {
      this.alumno=new Alumno("","","");
      this.active = true;
  }

   public add() {
     console.log("Entra en el modo add");
     console.log("Add alumno" + this.alumno.nombre);
     this.alumnoservice.addAlumno(this.alumno);
   }
}
