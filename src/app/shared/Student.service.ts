import {Injectable} from '@angular/core';
import { Student } from './Student';
import { Observable,BehaviorSubject} from 'rxjs';

@Injectable()
export class StudentService{
   
    students:Student[] = [
        new Student("Student1", "Student1","12345678"),
        new Student("Student2", "Student2","34567890"),
        new Student("Student3", "Student3","66666655")
    ];
     private studentSubject = new BehaviorSubject([]);
    constructor(){}

    addStudent(student:Student){
        this.students = [...this.students, student];
        this.studentSubject.next(this.students);
    }

    getStudents(): Observable<Student[]>{

        return this.studentSubject.asObservable();
    }
}