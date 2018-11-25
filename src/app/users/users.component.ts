import { Component, OnInit } from "@angular/core";

import { LoggerService } from "../_services/logger.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppUserAuth } from "../security/app-user-auth";
import { Router } from "@angular/router";
import { SecurityService } from "../security/security.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  public userForm: FormGroup;
  securityObject: AppUserAuth = null;

  constructor(
    private loggerService: LoggerService,
    private formBuilder: FormBuilder,
    private router: Router,
    private securityService: SecurityService
  ) {
    this.securityObject = securityService.securityObject;
    loggerService.log(JSON.stringify(this.securityObject));
  }

  ngOnInit() {
    // define the tourForm (with empty default values)
    this.userForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      middleName: [""],
      lastName: ["", [Validators.required, Validators.maxLength(200)]]
    });

    console.log(this.loggerService.log("User Component Works"));
  }
  addUser(): void {
    console.log(this.userForm.value);
  }
}
