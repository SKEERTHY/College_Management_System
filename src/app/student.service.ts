import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }


  public addStudent(student:Student){
    return this.http.post("http://localhost:8080/student/addStudent",student,{responseType:'text' as 'json'});
  }

  public getAllStudent():Observable<Student[]>{
    return this.http.get<Student[]>("http://localhost:8080/student/getStudent");
  }

  public updateStudent(std:Student):Observable<Student>{
    return this.http.put<Student>("http://localhost:8080/student/update",std);
  }

  public deleteStudent(std:Student){
    return this.http.delete("http://localhost:8080/student/delete/"+std.id,{responseType:'text' as 'json'});
  }

  public getStudentById(id:Number):Observable<Student[]>{
    return this.http.get<Student[]>("http://localhost:8080/student/studentById/"+id);
  }
}

