import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  user:string=""

  constructor(public router:Router) { }

  ngOnInit():void {
      let user=sessionStorage.getItem("user");
      if (user!=null) {
        this.user=user;
      }
  }

  logout() {
    sessionStorage.removeItem("user");
    this.router.navigate(["login"]);
  }
}
