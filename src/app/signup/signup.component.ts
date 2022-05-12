import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  msg:String=""

  constructor(public lser:LoginService) { }

  ngOnInit(): void {
  }
  signUp(loginRef:NgForm) {
    let login=loginRef.value;
    this.lser.signUp(login).subscribe(result=> {
      console.log(result);

    }),(error: any)=>console.log(error),()=>console.log("completed");
    loginRef.reset();

  }

}
