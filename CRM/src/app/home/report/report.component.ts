import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  constructor(private router: Router, private route: ActivatedRoute){}

  students = [
    {id: 1, name: 'Akshay'},
    {id: 2, name: 'Ganesh'},
  ]

  ngOnInit(){
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.params['name']);
    
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
