import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students = [
    {id: 1, name: 'Akshay'},
    {id: 2, name: 'Ganesh'},
  ]

  onSubmit(form: NgForm){
    console.log("Inside a submit method..", form.value)
    this.students.push(form.value);
  }
}
