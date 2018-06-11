import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno/Alumno';
import { AlumnoService } from '../alumno/alumno.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrls: ['./modificar-alumno.component.css']
})
export class ModificarAlumnoComponent implements OnInit {
  id: number;
  alumno: Alumno;
  constructor( private location: Location,private alumnoservice: AlumnoService) { }

  ngOnInit() {
   
   console.log("Entra en el modo update" + this.alumnoservice.id);
   this.alumno=this.alumnoservice.getAlumno(this.alumnoservice.id);

  }

   public mod() {
     console.log("Entra en el modo mod");
     console.log("Add alumno" + this.alumno.nombre);
     this.alumnoservice.update( this.alumno);
   }
   goBack(): void {
    this.location.back();
  }

}
