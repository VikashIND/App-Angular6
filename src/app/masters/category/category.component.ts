import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CategoryService } from "src/app/_services/category.service";
import { Category } from "src/app/_models/category";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit, OnDestroy {
  categories: Category[];
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {}
  form = this.fb.group({
    categoryId: 0,
    categoryName: ""
  });

  ngOnInit() {
    this.getCategories();
  }
  ngOnDestroy() {}
  getCategories() {
    this.categoryService.getCategory().subscribe(
      category => {
        this.categories = category;
        console.log(this.categories);
      },
      error => console.log(error)
    );
  }
  save() {
    this.categoryService
      .saveCategory(this.form.value)
      .subscribe(
        category => console.log("sucess", JSON.stringify(category)),
        error => console.log("error", error)
      );
    this.getCategories();
  }
}
