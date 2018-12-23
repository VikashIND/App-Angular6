import { Component, OnInit } from "@angular/core";
import { MenuService } from "../_services/menu.service";
import { MenuItem } from "primeng/api";
import { EmployeeService } from "../_services/employee.service";
import { AuthService } from "../_services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor(
    private menuService: MenuService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = this.menuService.getAllMenues();
    // console.log(this.items);
  }
  redirectToLogin() {
    this.router.navigate(["/loginNew"]);
  }
}
