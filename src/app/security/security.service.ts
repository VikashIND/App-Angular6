import { Injectable } from "@angular/core";
import { Observable, of, pipe } from "rxjs";
import { tap } from "rxjs/operators";

import { AppUserAuth } from "./app-user-auth";
import { AppUser } from "./app-user";
import { LOGIN_MOCKS } from "./login.mocks";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const API_URL = "http://localhost:3757/api/token/";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();
  constructor(private http: HttpClient) {}
  login(entity: AppUser): Observable<AppUserAuth> {
    // Initialize security object
    this.resetSecurityObject();

    return this.http
      .post<AppUserAuth>(API_URL + "get", entity, httpOptions)
      .pipe(
        tap(resp => {
          // Use object assign to update the current object
          // NOTE: Don't create a new AppUserAuth object
          //       because that destroys all references to object
          Object.assign(this.securityObject, resp);
          // Store into local storage
          localStorage.setItem("bearerToken", this.securityObject.bearerToken);
        })
      );
  }
  logout(): void {
    this.resetSecurityObject();
  }

  resetSecurityObject(): void {
    this.securityObject.userName = "";
    this.securityObject.bearerToken = "";
    this.securityObject.isAuthenticated = false;

    this.securityObject.canAccessProducts = false;
    this.securityObject.canAddProduct = false;
    this.securityObject.canSaveProduct = false;
    this.securityObject.canAccessCategories = false;
    this.securityObject.canAddCategory = false;

    localStorage.removeItem("bearerToken");
  }
}
