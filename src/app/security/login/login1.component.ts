import { Component, OnInit } from "@angular/core";
import { AppUserAuth } from "../app-user-auth";
import { AppUser } from "../app-user";
import { SecurityService } from "../security.service";

@Component({
  selector: "app-login1",
  templateUrl: "./login1.component.html",
  styles: []
})
export class Login1Component implements OnInit {
  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;

  constructor(private securityService: SecurityService) {}

  ngOnInit() {}
  login() {
    this.securityService.login(this.user).subscribe(resp => {
      this.securityObject = resp;
    });
  }
}
