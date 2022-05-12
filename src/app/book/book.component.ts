import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book !: FormGroup;

  
  message:any;
  bookObj:Book=new Book();
  bookList:Book[]=[];

  constructor(private formBuilder:FormBuilder, private service:BookService) { }

  ngOnInit(): void {
    
    this.getAllBook();

    this.book=this.formBuilder.group({
      id:[],
      name:[''],
      author:[''],
      price:[''],
    });
  }

  public addBook(){
    this.bookObj.id=this.book.value.id;
    this.bookObj.name=this.book.value.name;
    this.bookObj.author=this.book.value.author;
    this.bookObj.price=this.book.value.price;
     
    let resp=this.service.addBook(this.bookObj);
    resp.subscribe((data)=>this.message=data);

    this.getAllBook();
  }

  public getAllBook(){
    this.service.getAllBook().subscribe(res=>{
      this.bookList=res;
    },err=>{
      console.log("Error While fetching data! ");
    });
  }

  public editBook(std:Book){
    this.book.controls['id'].setValue(std.id);
    this.book.controls['name'].setValue(std.name);
    this.book.controls['author'].setValue(std.author);
    this.book.controls['price'].setValue(std.price);
    
  }

  public updateBook(){
    this.bookObj.id=this.book.value.id;
    this.bookObj.name=this.book.value.name;
    this.bookObj.author=this.book.value.author;
    this.bookObj.price=this.book.value.price;

    this.service.updateBook(this.bookObj).subscribe(res=>{
      console.log(res);
      this.getAllBook();
    },err=>{
      console.log(err)
    });
  }

  public deleteBook(std:Book){
    this.service.deleteBook(std).subscribe(res=>{
      console.log(res);
      alert("Book deleted successfully");
      this.getAllBook();
    },err =>{
      console.log(err);
    });
  }

}
