import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { StudProfileComponent } from './stud-profile/stud-profile.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { BookComponent } from './book/book.component';
import { BookReqComponent } from './book-req/book-req.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminhomeComponent,
    UserhomeComponent,
    SignupComponent,
    EmployeeComponent,
    StudentComponent,
    HomeComponent,
    StudProfileComponent,
    AssignmentsComponent,
    BookComponent,
    BookReqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
