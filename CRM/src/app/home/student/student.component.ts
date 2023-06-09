import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students = [
    {id: 1, name: 'Akshay', email: 'akshay@tech.com', course:'Angular'},
    {id: 2, name: 'Ganesh', email: 'ganesh@tech.com', course:'Python'},
  ]

  studentId = 3;
  genders = ['Male', 'Female'];
  onSubmit(form: NgForm){

    console.log("Inside a submit method..", form);
    console.log(form.value.studentData.id);
    console.log(form.value.studentData.name);
    console.log(form.value.email);
    console.log(form.value.course);
    console.log(form.value.gender);

    let data = {
      id: form.value.studentData.id, name: form.value.studentData.name, 
      email: form.value.email, course:form.value.course
    }
    this.students.push(data);
    form.reset();
  }
}
