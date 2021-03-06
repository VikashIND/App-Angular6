import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

//PrimeNg Modules
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { MessageModule } from "primeng/message";
import { DropdownModule } from "primeng/dropdown";
import { PanelModule } from "primeng/panel";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";
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
import { Login1Component } from "./security/login/login1.component";
import { formValidation } from "./reactiv-form/form-validation.component";
import { EmployeeComponent } from "./employee/employee.component";
import { LoginNewComponent } from "./login/login-new/login-new.component";
import { JwtModule } from "@auth0/angular-jwt";
import { NoAccessComponent } from "./no-access/no-access.component";
import { CategoryComponent } from "./masters/category/category.component";
import { UserComponent } from "./master/user/user.component";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import {
  LoggerBase,
  ConsoleLogger,
  FileLogger,
  DBLogger
} from "./_utility/LoggerUtility";
import { DIComponent } from './di/di.component';

var providersCollection: any = [];
providersCollection.push({ provide: LoggerBase, useClass: ConsoleLogger });
providersCollection.push({ provide: "console", useClass: ConsoleLogger });
providersCollection.push({ provide: "db", useClass: DBLogger });
providersCollection.push({ provide: "file", useClass: FileLogger });

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    Template4x4Component,
    LoginComponent,
    Login1Component,
    PrimeTestComponent,
    formValidation,
    EmployeeComponent,
    LoginNewComponent,
    NoAccessComponent,
    CategoryComponent,
    UserComponent,
    DIComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    ToastModule,
    MessageModule,
    DropdownModule,
    PanelModule,
    MenubarModule,
    JwtModule

    //RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SecurityService,
    AuthGuard,
    MenuService,
    MessageService,
    providersCollection
    /// { provide: LoggerBase, useClass: ConsoleLogger }
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
