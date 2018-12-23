import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../_models/category";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  url = "http://localhost:6259/Category/";
  constructor(private http: HttpClient) {}

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + "get");
  }

  saveCategory(category: Category) {
    return this.http.post(this.url + "post", category);
  }
}
