import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-stud-profile',
  templateUrl: './stud-profile.component.html',
  styleUrls: ['./stud-profile.component.css']
})
export class StudProfileComponent implements OnInit {

  student !: FormGroup;

  
  message:any;
  stdObj:Student=new Student();
  stdList:Student[]=[];

  constructor(private formBuilder:FormBuilder, private service:StudentService) { }

  ngOnInit(): void {
    let user=sessionStorage.getItem("user");
console.log(user);
    // this.getStudentById(userNum);

    this.student=this.formBuilder.group({
      id:[],
      contact:[''],
      dept:[''],
      email:[''],
      name:[''],
      batch:['']
    });
  }
  getStudentById(id:Number){
    this.service.getStudentById(id).subscribe(res=>{
      this.stdList=res;
    },err=>{
      console.log("Error While fetching data! ");
    });
  }
  
}
