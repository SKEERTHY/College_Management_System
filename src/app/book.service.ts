import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }


  public addBook(book:Book){
    return this.http.post("http://localhost:8080/book/addBook",book,{responseType:'text' as 'json'});
  }

  public getAllBook():Observable<Book[]>{
    return this.http.get<Book[]>("http://localhost:8080/book/getBook");
  }

  public updateBook(std:Book):Observable<Book>{
    return this.http.put<Book>("http://localhost:8080/book/update",std);
  }

  public deleteBook(std:Book){
    return this.http.delete("http://localhost:8080/book/delete/"+std.id,{responseType:'text' as 'json'});
  }

  public getBookById(id:Number):Observable<Book[]>{
    return this.http.get<Book[]>("http://localhost:8080/book/bookById/"+id);
  }
}
