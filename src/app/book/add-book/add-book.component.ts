import { Component, OnInit } from "@angular/core";
import { Book } from "../../_model/book";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html"
  // styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  saveBook(formValues: any): void {
    let newBook: Book = <Book>formValues;
    newBook.bookID = 1;
    console.log(newBook);
    console.warn("save new book not implemented yet!");
  }
}
