import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsernameValidator } from "./username-validators";
import { EmployeeService } from "../_services/employee.service";
import { AuthService } from "../_services/auth.service";

@Component({
  templateUrl: "./form-validation.component.html"
})
export class formValidation implements OnInit {
  constructor(private authServie: AuthService) {}
  form = new FormGroup({
    username: new FormControl(
      "",
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidator.cannotContainSpace
      ],
      UsernameValidator.shouldBeUnique
    ),
    password: new FormControl("", Validators.required)
  });

  ngOnInit() {}

  login() {
    // this.form.setErrors({
    //   invalidLogin: true
    // });
    let fdata = this.form.value;
    console.log(fdata);
    this.authServie.signIn(fdata).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
  }
  get username() {
    return this.form.get("account.username");
  }
  get password() {
    return this.form.get("account.password");
  }
}
