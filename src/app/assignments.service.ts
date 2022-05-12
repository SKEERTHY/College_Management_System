import { Injectable } from '@angular/core';
import { Assignment } from './assignment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private http:HttpClient) { }


  public addAssignment(assignment:Assignment){
    return this.http.post("http://localhost:8080/assignment/addAssignment",assignment,{responseType:'text' as 'json'});
  }

  public getAllAssignment():Observable<Assignment[]>{
    return this.http.get<Assignment[]>("http://localhost:8080/assignment/getAssignment");
  }

  public updateAssignment(std:Assignment):Observable<Assignment>{
    return this.http.put<Assignment>("http://localhost:8080/assignment/update",std);
  }

  public deleteAssignment(std:Assignment){
    return this.http.delete("http://localhost:8080/assignment/delete/"+std.id,{responseType:'text' as 'json'});
  }

  public getAssignmentById(id:Number):Observable<Assignment[]>{
    return this.http.get<Assignment[]>("http://localhost:8080/assignment/assignmentById/"+id);
  }
}
