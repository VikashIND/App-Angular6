import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";

import { UserService } from "../_services/user.service";
import { User } from "../_models/user";
import { EmployeeService } from "../_services/employee.service";
import { AuthService } from "../_services/auth.service";

@Component({ templateUrl: "home.component.html" })
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // this.userService
    //   .getAll()
    //   .pipe(first())
    //   .subscribe(users => {
    //     this.users = users;
    //   });
  }
}
