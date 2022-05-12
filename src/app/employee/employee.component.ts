import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee !: FormGroup;

  
  message:any;
  empObj:Employee=new Employee();
  empList:Employee[]=[];

  constructor(private formBuilder:FormBuilder, private service:EmployeeService) { }

  ngOnInit(): void {
    
    this.getAllEmployee();

    this.employee=this.formBuilder.group({
      id:[],
      contact:[''],
      dept:[''],
      email:[''],
      name:[''],
      role:['']
    });
  }

  public addEmployee(){
    this.empObj.name=this.employee.value.name;
     this.empObj.name=this.employee.value.name;
     this.empObj.email=this.employee.value.email;
     this.empObj.contact=this.employee.value.contact;
     this.empObj.dept=this.employee.value.dept;
     this.empObj.role=this.employee.value.role;

    let resp=this.service.addEmployee(this.empObj);
    resp.subscribe((data)=>this.message=data);

    this.getAllEmployee();
  }

  public getAllEmployee(){
    this.service.getAllEmployee().subscribe(res=>{
      this.empList=res;
    },err=>{
      console.log("Error While fetching data! ");
    });
  }

  public editEmployee(emp:Employee){
    this.employee.controls['id'].setValue(emp.id);
    this.employee.controls['name'].setValue(emp.name);
    this.employee.controls['email'].setValue(emp.email);
    this.employee.controls['contact'].setValue(emp.contact);
    this.employee.controls['dept'].setValue(emp.dept);
    this.employee.controls['role'].setValue(emp.role);
  }

  public updateEmployee(){
    this.empObj.id=this.employee.value.id;
    this.empObj.name=this.employee.value.name;
    this.empObj.email=this.employee.value.email;
    this.empObj.contact=this.employee.value.contact;
    this.empObj.dept=this.employee.value.dept;
    this.empObj.role=this.employee.value.role;

    this.service.updateEmployee(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployee();
    },err=>{
      console.log(err)
    });
  }

  public deleteEmployee(emp:Employee){
    this.service.deleteEmployee(emp).subscribe(res=>{
      console.log(res);
      alert("Employee deleted successfully");
      this.getAllEmployee();
    },err =>{
      console.log(err);
    });
  }
}

