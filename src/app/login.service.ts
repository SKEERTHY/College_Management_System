import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

  signIn(login:Login):Observable<String> {
    return this.http.post("http://localhost:8080/login/signIn",login, {responseType:'text'});
  }
  signUp(login:Login):Observable<String> {
    return this.http.post("http://localhost:8080/login/signUp",login, {responseType:'text'});
}
}
