import { Injectable } from "@angular/core";

import { allBooks, allReaders } from "../_data/data";
import { Reader } from "../_data/reader";
import { Book } from "../_models/book";

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
