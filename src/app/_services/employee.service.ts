import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, pipe } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "true"
    })
  };
  url = "http://localhost:6259/";
  constructor(private http: HttpClient, private router: Router) {}

  getEmployee(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
