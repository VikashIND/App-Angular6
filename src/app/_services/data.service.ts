import { Injectable } from "@angular/core";
import { Reader } from "../_data/reader";
import { allReaders } from "../_data/data";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  getAllReaders(): Reader[] {
    return allReaders;
  }
}
