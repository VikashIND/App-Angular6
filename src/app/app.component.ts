import { Component } from "@angular/core";
import { SecurityService } from "./security/security.service";
import { AppUserAuth } from "./security/app-user-auth";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My Angular App";
  securityObject: AppUserAuth = null;

  constructor(private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }
}
