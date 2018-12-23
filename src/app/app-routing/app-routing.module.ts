import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../home/home.component";
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
import { EmployeeComponent } from "../employee/employee.component";
import { LoginNewComponent } from "../login/login-new/login-new.component";
import { NoAccessComponent } from "../no-access/no-access.component";
import { AdminAuthGuard } from "../_services/admin-auth-guard.service";
import { CategoryComponent } from "../masters/category/category.component";
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "aboutus",
    component: AboutusComponent,
    canActivate: [AdminAuthGuard]
  },
  { path: "contactus", component: ContactusComponent },
  { path: "template4x4", component: Template4x4Component },
  { path: "server", component: ServerComponent },
  { path: "servers", component: ServersComponent },
  { path: "book", component: BookComponent },
  { path: "addbook", component: AddBookComponent },
  { path: "editbook", component: EditBookComponent },
  { path: "reactiveForm", component: formValidation },
  { path: "primeTest", component: PrimeTestComponent },
  { path: "employees", component: EmployeeComponent },
  { path: "loginNew", component: LoginNewComponent },
  { path: "no-access", component: NoAccessComponent },
  { path: "category", component: CategoryComponent },

  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
