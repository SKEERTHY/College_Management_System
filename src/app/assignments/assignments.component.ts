import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Assignment } from '../assignment';
import { AssignmentsService } from '../assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  assignment !: FormGroup;

  message:any;
  assObj:Assignment=new Assignment();
  assList:Assignment[]=[];

  constructor( private formbuilder: FormBuilder, private service:AssignmentsService){ }

  ngOnInit(): void {
    this.assignment=this.formbuilder.group({
      id:[''],
      name:[''],
      subject:[''],
      date:['']
    })
  }

  
  public addAssignment(){
    this.assObj.id=parseInt(this.assignment.value.id);
    this.assObj.name=this.assignment.value.name;
    this.assObj.subject=this.assignment.value.subject;
    this.assObj.date=this.assignment.value.date;
     
    let resp=this.service.addAssignment(this.assObj);
    resp.subscribe((data)=>this.message=data);

    console.log(this.assObj);

    this.getAllAssignment();
  }

  public getAllAssignment(){
    this.service.getAllAssignment().subscribe(res=>{
      this.assList=res;
    },err=>{
      console.log("Error While fetching data! ");
    });
  }

  public editAssignment(ass:Assignment){
    this.assignment.controls['id'].setValue(ass.id);
    this.assignment.controls['name'].setValue(ass.name);
    this.assignment.controls['subject'].setValue(ass.subject);
    this.assignment.controls['date'].setValue(ass.date);
  }

  public updateAssignment(){

    
    this.assObj.id=this.assignment.value.id;
    this.assObj.name=this.assignment.value.name;
    this.assObj.subject=this.assignment.value.subject;
    this.assObj.date=this.assignment.value.date;
    

    this.service.updateAssignment(this.assObj).subscribe(res=>{
      console.log(res);
      this.getAllAssignment();
    },err=>{
      console.log(err)
    });
  }

  public deleteAssignment(std:Assignment){
    this.service.deleteAssignment(std).subscribe(res=>{
      console.log(res);
      alert("Assignment deleted successfully");
      this.getAllAssignment();
    },err =>{
      console.log(err);
    });
  }
}
