import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student !: FormGroup;

  
  message:any;
  stdObj:Student=new Student();
  stdList:Student[]=[];

  constructor(private formBuilder:FormBuilder, private service:StudentService) { }

  ngOnInit(): void {
    
    this.getAllStudent();

    this.student=this.formBuilder.group({
      id:[],
      contact:[''],
      dept:[''],
      email:[''],
      name:[''],
      batch:['']
    });
  }

  public addStudent(){
    this.stdObj.id=this.student.value.id;
    this.stdObj.name=this.student.value.name;
    this.stdObj.email=this.student.value.email;
    this.stdObj.contact=this.student.value.contact;
    this.stdObj.dept=this.student.value.dept;
    this.stdObj.batch=this.student.value.batch;

    let resp=this.service.addStudent(this.stdObj);
    resp.subscribe((data)=>this.message=data);

    this.getAllStudent();
  }

  public getAllStudent(){
    this.service.getAllStudent().subscribe(res=>{
      this.stdList=res;
    },err=>{
      console.log("Error While fetching data! ");
    });
  }

  public editStudent(std:Student){
    this.student.controls['id'].setValue(std.id);
    this.student.controls['name'].setValue(std.name);
    this.student.controls['email'].setValue(std.email);
    this.student.controls['contact'].setValue(std.contact);
    this.student.controls['dept'].setValue(std.dept);
    this.student.controls['batch'].setValue(std.batch);
  }

  public updateStudent(){
    this.stdObj.id=this.student.value.id;
    this.stdObj.name=this.student.value.name;
    this.stdObj.email=this.student.value.email;
    this.stdObj.contact=this.student.value.contact;
    this.stdObj.dept=this.student.value.dept;
    this.stdObj.batch=this.student.value.batch;

    this.service.updateStudent(this.stdObj).subscribe(res=>{
      console.log(res);
      this.getAllStudent();
    },err=>{
      console.log(err)
    });
  }

  public deleteStudent(std:Student){
    this.service.deleteStudent(std).subscribe(res=>{
      console.log(res);
      alert("Student deleted successfully");
      this.getAllStudent();
    },err =>{
      console.log(err);
    });
  }

}

