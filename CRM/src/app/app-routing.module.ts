import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './home/report/report.component';
import { StudentComponent } from './home/student/student.component';
import { AuthGuard } from './AuthGuard/auth-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'report', component: ReportComponent},
  {path: 'student',  canActivateChild: [AuthGuard], component:StudentComponent,
    children:[
      {path: ':id/:name', component: StudentComponent},
      {path: 'edit', component: StudentComponent},
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
