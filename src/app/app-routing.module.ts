import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { StudProfileComponent } from './stud-profile/stud-profile.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {path:'bookList',component:BookComponent},
  {path:'assignment',component:AssignmentsComponent},
  {path:'profile',component:StudProfileComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"student",component:StudentComponent},
  {path:'',redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
