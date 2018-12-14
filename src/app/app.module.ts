import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

//PrimeNg Modules
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { UserComponent } from "./users/user/user.component";
import { BookComponent } from "./book/book.component";
import { AddBookComponent } from "./book/add-book/add-book.component";
import { EditBookComponent } from "./book/edit-book/edit-book.component";
import { Template4x4Component } from "./template4x4/template4x4.component";
import { SecurityService } from "./security/security.service";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AuthGuard } from "./security/auth.guard";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { PrimeTestComponent } from "./prime-test/prime-test.component";
import { MenuService } from "./_services/menu.service";
import { LoginComponent } from "./login/login.component";
import { JwtInterceptor } from "./_helpers/jwt.interceptor";
import { ErrorInterceptor } from "./_helpers/error.interceptor";
import { fakeBackendProvider } from "./_helpers/fake-backend";
import { Login1Component } from "./security/login/login1.component";
import { formValidation } from "./reactiv-form/form-validation.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    AboutusComponent,
    ContactusComponent,
    UserComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    Template4x4Component,
    LoginComponent,
    Login1Component,
    PrimeTestComponent,
    formValidation
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule

    //RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SecurityService,
    AuthGuard,
    MenuService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
