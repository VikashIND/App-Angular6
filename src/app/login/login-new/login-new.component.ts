import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { EmployeeService } from "src/app/_services/employee.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/_services/auth.service";

@Component({
  selector: "app-login-new",
  templateUrl: "./login-new.component.html"
})
export class LoginNewComponent implements OnInit {
  invalidLogin: boolean;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  form = this.fb.group({
    username: "",
    password: ""
  });

  ngOnInit() {}

  login() {
    console.log(this.form.value);
    this.authService.signIn(this.form.value).subscribe(
      result => {
        let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
        if (result) this.router.navigate([returnUrl || "/"]);
        else this.invalidLogin = true;
        //console.log(result);
      },
      error => console.log(error)
    );
  }
}
