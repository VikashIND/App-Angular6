import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsernameValidator } from "./username-validators";

@Component({
  templateUrl: "./form-validation.component.html"
})
export class formValidation implements OnInit {
  constructor() {}
  form = new FormGroup({
    account: new FormGroup({
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
    })
  });

  ngOnInit() {}

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
    console.log(this.form.value);
  }
  get username() {
    return this.form.get("account.username");
  }
  get password() {
    return this.form.get("account.password");
  }
}
