import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  signupForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute){}

  students = [
    {id: 1, name: 'Akshay', email:'akshay@tech.com' },
    {id: 2, name: 'Ganesh', email:'ganesh@tech.com'},
  ]

  ngOnInit(){
    this.signupForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'name': new FormControl('Shivam', Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    })


    this.route.params
    .subscribe((param:Params)=>{
      console.log(param['id']);
      console.log(param['name']); 
    })

    console.log(this.route.snapshot.queryParams['edit']);
    this.route.queryParams.
      subscribe((param:Params)=>{
        console.log(param);
    })

    console.log(this.route.snapshot.fragment);
    // this.user = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name']
    // }

  }

  onSubmit(){
    console.log(this.signupForm);
    this.students.push(this.signupForm.value);
    console.log(this.students);
  }

  reloadPage(){
    //absolute path
    this.router.navigate(['/report']);
  }

  openPage(){
    //relative path
    this.router.navigate(['report'], {relativeTo: this.route});
  }

  viewStudent(){
    // console.log(this.route.snapshot.params['id']);
    // console.log(this.route.snapshot.params['name']);
  }

}
