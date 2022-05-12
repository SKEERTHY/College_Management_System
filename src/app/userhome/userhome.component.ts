import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  user:string=""
  constructor(public router:Router) { }

  ngOnInit(): void {
    let user=sessionStorage.getItem("user");
    if(user!=null){
      this.user=user;
    }
  }

  logout() {
    this.router.navigate(["login"]);
  }

}
