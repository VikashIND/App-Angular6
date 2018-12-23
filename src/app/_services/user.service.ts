import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../_models/user";

@Injectable({ providedIn: "root" })
export class UserService {
  url = "http://localhost:6259/api/Security/";
  constructor(private http: HttpClient) {}

  createUser(user: any) {
    return this.http.post(this.url + "Create", user);
  }
}
