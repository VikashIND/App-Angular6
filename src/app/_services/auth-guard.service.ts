import { Injectable } from "@angular/core";
import { CanActivate, Route, Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  canActivate() {
    if (this.authService.isLoggedIn()) return true;
    this.router.navigate(["/login"]);
    return false;
  }
}
