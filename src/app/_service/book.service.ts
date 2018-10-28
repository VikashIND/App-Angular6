import { Injectable } from "@angular/core";
import { Book } from "../_model/book";
import { allBooks, allReaders } from "../_data/data";
import { Reader } from "../_data/reader";

@Injectable({
  providedIn: "root"
})
export class BookService {
  constructor() {}

  getAllBook(): Book[] {
    return allBooks;
  }

  getAllReader(): Reader[] {
    return allReaders;
  }
}
