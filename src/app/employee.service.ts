import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }


  public addEmployee(employee:Employee){
    return this.http.post("http://localhost:8080/employee/addEmployee",employee,{responseType:'text' as 'json'});
  }

  public getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:8080/employee/employees");
  }

  public updateEmployee(emp:Employee):Observable<Employee>{
    return this.http.put<Employee>("http://localhost:8080/employee/update",emp);
  }

  public deleteEmployee(emp:Employee){
    return this.http.delete("http://localhost:8080/employee/delete/"+emp.id,{responseType:'text' as 'json'});
  }
}

