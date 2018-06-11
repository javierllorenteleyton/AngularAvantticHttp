import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Student }    from '../shared/Student';
import { Location } from '@angular/common';
import { StudentService }    from '../shared/Student.Service';

@Component({
  selector: 'app-add-student-component',
  templateUrl: './add-student-component.component.html',
  styleUrls: ['./add-student-component.component.css']
})
export class AddStudentComponentComponent implements OnInit {
  model = new Student('', '','');
  submitted = false;
  students:Student[];
  active = true;

  newStudent(){
    this.model = new Student('', '', '');
    this.active = false;
    setTimeout(()=>{this.active = true;}, 0);
  }

  onSubmit() { this.submitted = true;
    console.log('submit');
    this.service.addStudent(this.model);
    this.newStudent();
  }

  goBack(): void {
    this.location.back();
  }

  constructor(private location: Location,private service: StudentService) {
    
   }

  ngOnInit() {
    this.students=this.service.students;
    this.service.getStudents().subscribe(students => this.students = students);
  }

}
