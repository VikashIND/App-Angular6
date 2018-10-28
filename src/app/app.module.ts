import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

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
import { LoginComponent } from "./security/login/login.component";
import { SecurityService } from "./security/security.service";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AuthGuard } from "./security/auth.guard";
import { HttpClientModule } from "@angular/common/http";

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [SecurityService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
