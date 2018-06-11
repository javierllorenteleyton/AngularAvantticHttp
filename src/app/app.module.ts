import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.router';
import { HttpModule} from '@angular/http'; // hacer peticiones rest

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { AddStudentComponentComponent } from './add-student-component/add-student-component.component'; // <-- NgModel lives here
import { AlumnoService } from '../app/alumno/alumno.service';
import { StudentService }    from '../app/shared/Student.Service';
import { ProductService }    from '../app/shared/Product.Service';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { AlumnoComponent } from './alumno/alumno.component';
import { AgreagarAlumnoComponent } from './agreagar-alumno/agreagar-alumno.component';
import { ModificarAlumnoComponent } from './modificar-alumno/modificar-alumno.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    AddStudentComponentComponent,
    ProductComponent,
    AlumnoComponent,
    AgreagarAlumnoComponent,
    ModificarAlumnoComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [StudentService,ProductService,AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
