import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map } from "rxjs/internal/operators/map";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  url = "http://localhost:6259/";
  constructor(private http: HttpClient, private router: Router) {}
  signIn(credentials: any) {
    return this.http.post(this.url + "api/security/login", credentials).pipe(
      map(user => {
        if (user) {
          localStorage.setItem("token", JSON.stringify(user));
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/loginNew"]);
  }

  isLoggedIn() {
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem("token");
    if (!token) return false;

    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);
    //console.log("Expiration", expirationDate);
    //console.log("IsExpired", isExpired);

    return !isExpired;
  }
  currentUser() {
    return true;
  }
}
