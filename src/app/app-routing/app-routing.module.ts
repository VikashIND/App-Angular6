import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../home/home.component";

import { UsersComponent } from "../users/users.component";
import { UserComponent } from "../users/user/user.component";
import { AboutusComponent } from "../aboutus/aboutus.component";
import { ContactusComponent } from "../contactus/contactus.component";
import { Template4x4Component } from "../template4x4/template4x4.component";
import { ServerComponent } from "../server/server.component";
import { ServersComponent } from "../servers/servers.component";
import { BookComponent } from "../book/book.component";
import { AddBookComponent } from "../book/add-book/add-book.component";
import { EditBookComponent } from "../book/edit-book/edit-book.component";
import { AuthGuard } from "../security/auth.guard";
import { PrimeTestComponent } from "../prime-test/prime-test.component";
import { LoginComponent } from "../login/login.component";
import { formValidation } from "../reactiv-form/form-validation.component";
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "users",
    component: UsersComponent,
    canActivate: [AuthGuard],
    data: { claimType: "canAccessProducts" }
  },
  { path: "users/:id/:name", component: UserComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "contactus", component: ContactusComponent },
  { path: "template4x4", component: Template4x4Component },
  { path: "server", component: ServerComponent },
  { path: "servers", component: ServersComponent },
  { path: "book", component: BookComponent },
  { path: "addbook", component: AddBookComponent },
  { path: "editbook", component: EditBookComponent },
  { path: "reactiveForm", component: formValidation },
  { path: "primeTest", component: PrimeTestComponent },

  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
