import { Component, OnInit } from "@angular/core";
import { BookService } from "../_services/book.service";
import { LoggerService } from "../_services/logger.service";
import { Book } from "../_models/book";
import { Reader } from "../_data/reader";
import { DataService } from "../_services/data.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  books: Book[];
  readers: Reader[];

  constructor(
    private bookService: BookService,
    private loggerService: LoggerService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.books = this.bookService.getAllBook();
    this.readers = this.dataService.getAllReaders();
    //this.readers = this.bookService.getAllReader();
    // this.readers = this.dataService.getAllReaders().subscribe<Reader>();
    //let data = JSON.stringify(this.books);
    this.loggerService.log("Book Component Called!");
  }
}
