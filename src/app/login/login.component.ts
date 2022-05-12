import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg:string=""
  constructor(public lser:LoginService,public router:Router) { } //DI for Service class

  ngOnInit(): void {
  }
  checkUser(loginRef:NgForm): void {
    let login = loginRef.value;
    //console.log(login);
    this.lser.signIn(login).subscribe(result=>{

      if(result=="admin login successfully") {
        sessionStorage.setItem("user",login.emailid)
        this.router.navigate(["adminhome"],{skipLocationChange:true});
      }else if(result=="user login successfully") {
        sessionStorage.setItem("user",login.emailid)
        this.router.navigate(["userhome",{skipLocationChange:true}]);
      }else{
        this.msg="Failure try once again";

      }
    },
    error=>console.log(error),() => console.log("completed"));
    loginRef.reset();

  }

}
function result(result: any) {
  throw new Error('Function not implemented.');
}

