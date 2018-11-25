(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_data/data.ts":
/*!*******************************!*\
  !*** ./src/app/_data/data.ts ***!
  \*******************************/
/*! exports provided: allReaders, allBooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allReaders", function() { return allReaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allBooks", function() { return allBooks; });
var allReaders = [
    {
        readerID: 1,
        name: "Marie",
        weeklyReadingGoal: 400,
        totalMinutesRead: 5600
    },
    {
        readerID: 2,
        name: "Daniel",
        weeklyReadingGoal: 210,
        totalMinutesRead: 3000
    },
    { readerID: 3, name: "Lanier", weeklyReadingGoal: 140, totalMinutesRead: 600 }
];
var allBooks = [
    {
        bookID: 1,
        title: "Goodnight Moon",
        author: "Margaret Wise Brown",
        publicationYear: 1953
    },
    {
        bookID: 2,
        title: "Green Eggs and Ham",
        author: "Dr. Seuss",
        publicationYear: 1960
    },
    {
        bookID: 3,
        title: "Where the Wild Things Are",
        author: "Maurice Sendak",
        publicationYear: 1963
    },
    {
        bookID: 4,
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        publicationYear: 1937
    },
    {
        bookID: 5,
        title: "Curious George",
        author: "H. A. Rey",
        publicationYear: 1941
    },
    {
        bookID: 6,
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        publicationYear: 1865
    }
];


/***/ }),

/***/ "./src/app/_data/menu.ts":
/*!*******************************!*\
  !*** ./src/app/_data/menu.ts ***!
  \*******************************/
/*! exports provided: menuItemsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItemsList", function() { return menuItemsList; });
var menuItemsList = [
    { label: "Home", routerLink: "/", icon: "pi pi-fw pi-home" },
    {
        label: "File",
        items: [
            {
                label: "New",
                icon: "pi pi-fw pi-plus",
                items: [
                    { label: "Project", routerLink: "/aboutus" },
                    { label: "Other", routerLink: "/contactus" }
                ]
            },
            { label: "Open" },
            { label: "Quit" }
        ]
    },
    {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
            { label: "Delete", icon: "pi pi-fw pi-trash" },
            { label: "Refresh", icon: "pi pi-fw pi-refresh" }
        ]
    },
    {
        label: "Templates",
        items: [
            { label: "Template2x2", routerLink: "/Template2x2" },
            { label: "Template3x3", routerLink: "/Template3x3" },
            { label: "Template4x4", routerLink: "/template4x4" },
            { label: "Template5x5", routerLink: "/template5x5" }
        ]
    },
    {
        label: "Books",
        items: [
            { label: "Book List", routerLink: "/book" },
            { label: "Add Book", routerLink: "/addbook" },
            { label: "Edit Book", routerLink: "/editbook" }
        ]
    },
    {
        label: "Users",
        items: [
            { label: "Users", routerLink: "/users" },
            { label: "Users List", routerLink: "/userslist" }
        ]
    },
    {
        label: "Server",
        items: [
            { label: "Server", routerLink: "/server" },
            { label: "Add Servers", routerLink: "/servers" }
        ]
    },
    { label: "About Us", routerLink: "/aboutus" },
    { label: "Contact Us", routerLink: "/contactus" },
    { label: "PrintNg Test", routerLink: "/primeTest" }
];


/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var testUser = { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' };
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                if (request.body.username === testUser.username && request.body.password === testUser.password) {
                    // if login details are valid return 200 OK with a fake jwt token
                    var body = {
                        id: testUser.id,
                        username: testUser.username,
                        firstName: testUser.firstName,
                        lastName: testUser.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: [testUser] }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http
            .post("http://localhost:1000/users/authenticate", {
            username: username,
            password: password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("currentUser", JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem("currentUser");
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return false;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/book.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/book.service.ts ***!
  \*******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_data/data */ "./src/app/_data/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookService = /** @class */ (function () {
    function BookService() {
    }
    BookService.prototype.getAllBook = function () {
        return _data_data__WEBPACK_IMPORTED_MODULE_1__["allBooks"];
    };
    BookService.prototype.getAllReader = function () {
        return _data_data__WEBPACK_IMPORTED_MODULE_1__["allReaders"];
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/_services/data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/data.service.ts ***!
  \*******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_data/data */ "./src/app/_data/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getAllReaders = function () {
        return _data_data__WEBPACK_IMPORTED_MODULE_1__["allReaders"];
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/_services/logger.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/logger.service.ts ***!
  \*********************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (message) {
        var timeString = new Date().toLocaleTimeString();
        console.log(message + " (" + timeString + ")");
    };
    LoggerService.prototype.error = function (message) {
        console.log("ERROR: " + message);
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/_services/menu.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/menu.service.ts ***!
  \*******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_data/menu */ "./src/app/_data/menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuService = /** @class */ (function () {
    function MenuService() {
    }
    MenuService.prototype.getAllMenues = function () {
        return _data_menu__WEBPACK_IMPORTED_MODULE_1__["menuItemsList"];
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get("http://localhost:1000/users");
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/aboutus/aboutus.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  aboutus works!\n</p>\n<div class=\"card border-primary\">\n  <div class=\"card-header badge-primary\">\n    Page Header\n    <button class=\"badge badge-danger badge-pill float-right\">Close</button>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"bg-light\" style=\"border-color: blue\">\n      <form>\n        <!--Textbox Example-->\n        <div class=\"row\">\n          <div class=\"col-md col-sm\">\n            <div class=\"form-group row\">\n              <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Input 1 :</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-input\" id=\"input1\" placeholder=\"Type Something...\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md col-sm\">\n            <div class=\"form-group row\">\n              <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Input 2 :</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-input\" id=\"input2\" placeholder=\"Type Something...\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md col-sm\">\n            <div class=\"form-group row\">\n              <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Input 3 :</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-input\" id=\"input3\" placeholder=\"Type Something...\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md col-sm\">\n            <div class=\"form-group row\">\n              <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Input 1 :</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-input\" id=\"input1\" placeholder=\"Type Something...\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md col-sm\">\n            <div class=\"form-group row\">\n              <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Input 2 :</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-input\" id=\"input2\" placeholder=\"Type Something...\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md col-sm\">\n            <div class=\"form-group row\">\n              <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Input 3 :</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-input\" id=\"input3\" placeholder=\"Type Something...\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md col-sm\">\n            <div class=\"form-group row\">\n              <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Input 1 :</label>\n              <div class=\"col-sm-6\">\n                <select class=\"form-control form-control-ddl\" id=\"exampleFormControlSelect2\">\n                  <option>1</option>\n                  <option>2</option>\n                  <option>3</option>\n                  <option>4</option>\n                  <option>5</option>\n                  <option>1</option>\n                  <option>2</option>\n                  <option>3</option>\n                  <option>4</option>\n                  <option>5</option>\n\n\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md col-sm\">\n            <div class=\"form-group row\">\n              <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Input 2 :</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-input\" id=\"input2\" placeholder=\"Type Something...\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md col-sm\">\n            <div class=\"form-group row\">\n              <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Input 3 :</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-input\" id=\"input3\" placeholder=\"Type Something...\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--Textbox Example End-->\n\n        <!-- <div class=\"card-footer\">\n        Footer\n      </div> -->\n\n      </form>\n    </div>\n  </div>\n\n  <div class=\"card-footer\">\n    <div class=\"row\">\n      <div class=\"col-6 text-left\">\n        <button class=\"btn btn-default btn-sm btn-space badge-pill\">Back</button> </div>\n      <div class=\"col-6 text-right\">\n        <button class=\"btn btn-primary btn-sm btn-space badge-pill\">Save</button>\n        <button class=\"btn btn-danger btn-sm btn-space badge-pill\">Cancel</button>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users/user/user.component */ "./src/app/users/user/user.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _template4x4_template4x4_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../template4x4/template4x4.component */ "./src/app/template4x4/template4x4.component.ts");
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../server/server.component */ "./src/app/server/server.component.ts");
/* harmony import */ var _servers_servers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../servers/servers.component */ "./src/app/servers/servers.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _book_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../book/add-book/add-book.component */ "./src/app/book/add-book/add-book.component.ts");
/* harmony import */ var _book_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../book/edit-book/edit-book.component */ "./src/app/book/edit-book/edit-book.component.ts");
/* harmony import */ var _security_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../security/auth.guard */ "./src/app/security/auth.guard.ts");
/* harmony import */ var _prime_test_prime_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../prime-test/prime-test.component */ "./src/app/prime-test/prime-test.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
    {
        path: "users",
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
        data: { claimType: "canAccessProducts" }
    },
    { path: "users/:id/:name", component: _users_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"] },
    { path: "aboutus", component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__["AboutusComponent"] },
    { path: "contactus", component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__["ContactusComponent"] },
    { path: "template4x4", component: _template4x4_template4x4_component__WEBPACK_IMPORTED_MODULE_7__["Template4x4Component"] },
    { path: "server", component: _server_server_component__WEBPACK_IMPORTED_MODULE_8__["ServerComponent"] },
    { path: "servers", component: _servers_servers_component__WEBPACK_IMPORTED_MODULE_9__["ServersComponent"] },
    { path: "book", component: _book_book_component__WEBPACK_IMPORTED_MODULE_10__["BookComponent"] },
    { path: "addbook", component: _book_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_11__["AddBookComponent"] },
    { path: "editbook", component: _book_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_12__["EditBookComponent"] },
    { path: "primeTest", component: _prime_test_prime_test_component__WEBPACK_IMPORTED_MODULE_14__["PrimeTestComponent"] },
    // otherwise redirect to home
    { path: "**", redirectTo: "" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* .container{\r\n    margin-left: 0px;\r\n    margin-right: 0px!important;\r\n    margin-top: 0px;\r\n}  */\r\n.container{\r\n    max-width: 1920px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <marquee behavior=\"\" direction=\"left\"> -->\n  <div class=\"text-center\">\n    <!-- <h3>Welcome to my angular application</h3> -->\n  </div>\n\n  <!-- </marquee>  -->\n\n  <app-header></app-header>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_security_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security/security.service */ "./src/app/security/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(securityService) {
        this.securityService = securityService;
        this.title = "My Angular App";
        this.securityObject = null;
        this.securityObject = securityService.securityObject;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_security_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/menubar */ "./node_modules/primeng/menubar.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_menubar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server/server.component */ "./src/app/server/server.component.ts");
/* harmony import */ var _servers_servers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./servers/servers.component */ "./src/app/servers/servers.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _users_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/user/user.component */ "./src/app/users/user/user.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _book_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./book/add-book/add-book.component */ "./src/app/book/add-book/add-book.component.ts");
/* harmony import */ var _book_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./book/edit-book/edit-book.component */ "./src/app/book/edit-book/edit-book.component.ts");
/* harmony import */ var _template4x4_template4x4_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./template4x4/template4x4.component */ "./src/app/template4x4/template4x4.component.ts");
/* harmony import */ var _security_security_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./security/security.service */ "./src/app/security/security.service.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _security_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./security/auth.guard */ "./src/app/security/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _prime_test_prime_test_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./prime-test/prime-test.component */ "./src/app/prime-test/prime-test.component.ts");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_services/menu.service */ "./src/app/_services/menu.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony import */ var _helpers_fake_backend__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_helpers/fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony import */ var _security_login_login1_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./security/login/login1.component */ "./src/app/security/login/login1.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//PrimeNg Modules


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _server_server_component__WEBPACK_IMPORTED_MODULE_6__["ServerComponent"],
                _servers_servers_component__WEBPACK_IMPORTED_MODULE_7__["ServersComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__["AboutusComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__["ContactusComponent"],
                _users_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_14__["BookComponent"],
                _book_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_15__["AddBookComponent"],
                _book_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_16__["EditBookComponent"],
                _template4x4_template4x4_component__WEBPACK_IMPORTED_MODULE_17__["Template4x4Component"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                _security_login_login1_component__WEBPACK_IMPORTED_MODULE_28__["Login1Component"],
                _prime_test_prime_test_component__WEBPACK_IMPORTED_MODULE_22__["PrimeTestComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                primeng_menubar__WEBPACK_IMPORTED_MODULE_4__["MenubarModule"]
                //RouterModule.forRoot(appRoutes)
            ],
            providers: [
                _security_security_service__WEBPACK_IMPORTED_MODULE_18__["SecurityService"],
                _security_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
                _services_menu_service__WEBPACK_IMPORTED_MODULE_23__["MenuService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_25__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_26__["ErrorInterceptor"], multi: true },
                // provider used to create fake backend
                _helpers_fake_backend__WEBPACK_IMPORTED_MODULE_27__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book/add-book/add-book.component.html":
/*!*******************************************************!*\
  !*** ./src/app/book/add-book/add-book.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add-book works!\n</p>\n<div class=\"col-lg-5\">\n  <div class=\"well bs-component\">\n    <form #addBookForm=\"ngForm\" (ngSubmit)=\"saveBook(addBookForm.value)\" class=\"form-horizontal\">\n      <fieldset>\n        <legend>Add New Book</legend>\n        <div class=\"form-group\">\n          <label for=\"inputTitle\" class=\"col-lg-3 control-label\">Title</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Title\" name=\"title\" ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAuthor\" class=\"col-lg-3 control-label\">Author</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputAuthor\" placeholder=\"Author\" name=\"author\" ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputYear\" class=\"col-lg-3 control-label\">Year</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputYear\" placeholder=\"Year Published\" name=\"publicationYear\"\n              ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-8 col-lg-offset-3\">\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book/add-book/add-book.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/book/add-book/add-book.component.ts ***!
  \*****************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddBookComponent = /** @class */ (function () {
    function AddBookComponent() {
    }
    AddBookComponent.prototype.ngOnInit = function () { };
    AddBookComponent.prototype.saveBook = function (formValues) {
        var newBook = formValues;
        newBook.bookID = 1;
        console.log(newBook);
        console.warn("save new book not implemented yet!");
    };
    AddBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-book",
            template: __webpack_require__(/*! ./add-book.component.html */ "./src/app/book/add-book/add-book.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  book works!\n</p>\n<div class=\"panel-body\">\n  <li *ngFor='let book of books'>\n    <i>{{book.title}}&nbsp;&nbsp;&nbsp;</i>\n    <i class=\"font-weight-bold\">{{book.author}},&nbsp;&nbsp;&nbsp;</i>\n    <i>Publication Year: {{book.publicationYear}}</i>\n  </li>\n</div>\n<hr>\n<div class=\"panel-body\">\n  <li *ngFor='let reader of readers'>\n    <i>{{reader.readerID}}&nbsp;&nbsp;&nbsp;</i>\n    <i class=\"font-weight-bold\">{{reader.name}},&nbsp;&nbsp;&nbsp;</i>\n    <i>Total Minutes: {{reader.totalMinutesRead}}</i>\n  </li>\n</div>\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/book.service */ "./src/app/_services/book.service.ts");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/logger.service */ "./src/app/_services/logger.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookComponent = /** @class */ (function () {
    function BookComponent(bookService, loggerService, dataService) {
        this.bookService = bookService;
        this.loggerService = loggerService;
        this.dataService = dataService;
    }
    BookComponent.prototype.ngOnInit = function () {
        this.books = this.bookService.getAllBook();
        this.readers = this.dataService.getAllReaders();
        //this.readers = this.bookService.getAllReader();
        // this.readers = this.dataService.getAllReaders().subscribe<Reader>();
        //let data = JSON.stringify(this.books);
        this.loggerService.log("Book Component Called!");
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-book",
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"],
            _services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/book/edit-book/edit-book.component.html":
/*!*********************************************************!*\
  !*** ./src/app/book/edit-book/edit-book.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>edit-book works!</p>\n<div class=\"col-lg-5\">\n  <div class=\"well bs-component\">\n    <form class=\"form-horizontal\">\n      <fieldset>\n        <legend>Edit Book</legend>\n        <div class=\"form-group\">\n          <label for=\"inputTitle\" class=\"col-lg-3 control-label\">Title</label>\n          <div class=\"col-lg-8\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputTitle\"\n              placeholder=\"Title\"\n              name=\"title\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAuthor\" class=\"col-lg-3 control-label\">Author</label>\n          <div class=\"col-lg-8\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputAuthor\"\n              placeholder=\"Author\"\n              name=\"author\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputYear\" class=\"col-lg-3 control-label\">Year</label>\n          <div class=\"col-lg-8\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputYear\"\n              placeholder=\"Year Published\"\n              name=\"publicationYear\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-8 col-lg-offset-3\">\n            <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            <button type=\"button\" class=\"btn btn-success\">\n              Set As Most Popular\n            </button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book/edit-book/edit-book.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/book/edit-book/edit-book.component.ts ***!
  \*******************************************************/
/*! exports provided: EditBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookComponent", function() { return EditBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditBookComponent = /** @class */ (function () {
    function EditBookComponent() {
    }
    EditBookComponent.prototype.ngOnInit = function () { };
    EditBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-edit-book",
            template: __webpack_require__(/*! ./edit-book.component.html */ "./src/app/book/edit-book/edit-book.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], EditBookComponent);
    return EditBookComponent;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contactus works!\n</p>\n<div class=\"card border-primary\">\n  <div class=\"card-header badge-primary\">\n    Page Header\n    <button class=\"badge badge-danger badge-pill float-right\">Close</button>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"bg-light\" style=\"border-color: blue\">\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">col-1</div>\n        <div class=\"col-4\">col-2</div>\n        <div class=\"col-4\">col-3</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-footer\">\n    <div class=\"row\">\n      <div class=\"col-6 text-left\">\n        <button class=\"btn btn-default btn-sm btn-space badge-pill\">Back</button> </div>\n      <div class=\"col-6 text-right\">\n        <button class=\"btn btn-primary btn-sm btn-space badge-pill\">Save</button>\n        <button class=\"btn btn-danger btn-sm btn-space badge-pill\">Cancel</button>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    max-width: 1920px;\r\n}\r\n.navbar{\r\n    padding: 0px;\r\n    line-height: 15px;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid\">\n  <div class=\"text-center\">\n    <!-- <marquee behavior=\"\" direction=\"left\"> -->\n    <h1 class=\"badge badge-dark badge-pill \">\n      Welcome to my Anuglar Application\n    </h1>\n    <!-- </marquee> -->\n  </div>\n  <div class=\"row\">\n    <p-menubar\n      [model]=\"items\"\n      class=\"col-xs-12 col-sm-10 col-md-12 col-sm-offset-1\"\n    >\n      <div>\n        <input type=\"text\" pInputText placeholder=\"Search\" />\n        <button\n          pButton\n          label=\"Logout\"\n          icon=\"fa fa-sign-out\"\n          style=\"margin-left:.25em\"\n        ></button>\n      </div>\n    </p-menubar>\n  </div>\n  <!--\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-10 col-md-12 col-sm-offset-1 col-md-offset-2\">\n        <nav class=\"navbar navbar-left navbar-expand-lg bg-light\">\n          <div class=\"container\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"/\">Home</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/users\">Users</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/aboutus\">About Us</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/contactus\">Contact Us</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/template4x4\">template4x4</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/server\">Server</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/servers\">Servers</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/book\">Book List</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/addbook\">Add Book</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/editbook\">Edit Book</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/primeTest\">PrimeNg Test</a>\n              </li>\n            </ul>\n            <ul class=\"nav nav-navbar navbar-right\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n              </li>\n            </ul>\n          </div>\n        </nav>\n      </div>\n    </div>\n  -->\n  <div class=\"row\">\n    <div class=\"container-fluid\">\n      <div style=\" height: 600px\"><router-outlet></router-outlet></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/menu.service */ "./src/app/_services/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(menuService) {
        this.menuService = menuService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.items = this.menuService.getAllMenues();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Home</h1>\n<p>You're logged in with Angular 6 & JWT!!</p>\n<div>\n  Users from secure api end point:\n  <ul>\n    <li *ngFor=\"let user of users\">{{ user.firstName }} {{ user.lastName }}</li>\n  </ul>\n</div>\n<p><a [routerLink]=\"['/login']\">Logout</a></p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html") }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-info\">\n  Username: test<br />\n  Password: test\n</div>\n<h2>Login</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input\n      type=\"text\"\n      formControlName=\"username\"\n      class=\"form-control\"\n      [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"\n    />\n    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.username.errors.required\">Username is required</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input\n      type=\"password\"\n      formControlName=\"password\"\n      class=\"form-control\"\n      [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n    />\n    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.password.errors.required\">Password is required</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n    <img\n      *ngIf=\"loading\"\n      src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n    />\n  </div>\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{ error }}</div>\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService
            .login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/prime-test/prime-test.component.css":
/*!*****************************************************!*\
  !*** ./src/app/prime-test/prime-test.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/prime-test/prime-test.component.html":
/*!******************************************************!*\
  !*** ./src/app/prime-test/prime-test.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>prime-test works!</p>\n<h3 class=\"first\">Basic</h3>\n<input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"text\" />\n<span id=\"text\">{{ text }}</span>\n\n<h3>Float Label</h3>\n<span class=\"ui-float-label\">\n  <input id=\"float-input\" type=\"text\" size=\"30\" pInputText />\n  <label for=\"float-input\">Username</label>\n</span>\n\n<h3>Disabled</h3>\n<input\n  id=\"disabled-input\"\n  type=\"text\"\n  size=\"30\"\n  pInputText\n  [disabled]=\"disabled\"\n/>\n\n<button\n  id=\"disabled-btn\"\n  type=\"button\"\n  (click)=\"toggleDisabled()\"\n  pButton\n  label=\"Toggle\"\n></button>\n"

/***/ }),

/***/ "./src/app/prime-test/prime-test.component.ts":
/*!****************************************************!*\
  !*** ./src/app/prime-test/prime-test.component.ts ***!
  \****************************************************/
/*! exports provided: PrimeTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeTestComponent", function() { return PrimeTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/menu.service */ "./src/app/_services/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrimeTestComponent = /** @class */ (function () {
    function PrimeTestComponent(menuService) {
        this.menuService = menuService;
        this.disabled = true;
    }
    PrimeTestComponent.prototype.ngOnInit = function () {
        this.items = this.menuService.getAllMenues();
    };
    PrimeTestComponent.prototype.toggleDisabled = function () {
        this.disabled = !this.disabled;
    };
    PrimeTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-prime-test",
            template: __webpack_require__(/*! ./prime-test.component.html */ "./src/app/prime-test/prime-test.component.html"),
            styles: [__webpack_require__(/*! ./prime-test.component.css */ "./src/app/prime-test/prime-test.component.css")]
        }),
        __metadata("design:paramtypes", [_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], PrimeTestComponent);
    return PrimeTestComponent;
}());



/***/ }),

/***/ "./src/app/security/app-user-auth.ts":
/*!*******************************************!*\
  !*** ./src/app/security/app-user-auth.ts ***!
  \*******************************************/
/*! exports provided: AppUserAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUserAuth", function() { return AppUserAuth; });
var AppUserAuth = /** @class */ (function () {
    function AppUserAuth() {
        this.userName = "";
        this.bearerToken = "";
        this.isAuthenticated = false;
        this.canAccessProducts = false;
        this.canAddProduct = false;
        this.canSaveProduct = false;
        this.canAccessCategories = false;
        this.canAddCategory = false;
    }
    return AppUserAuth;
}());



/***/ }),

/***/ "./src/app/security/app-user.ts":
/*!**************************************!*\
  !*** ./src/app/security/app-user.ts ***!
  \**************************************/
/*! exports provided: AppUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUser", function() { return AppUser; });
var AppUser = /** @class */ (function () {
    function AppUser() {
        this.userName = "";
        this.password = "";
    }
    return AppUser;
}());



/***/ }),

/***/ "./src/app/security/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/security/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security.service */ "./src/app/security/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(securityService, router) {
        this.securityService = securityService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        // Get property name on security object to check
        var claimType = next.data["claimType"];
        if (this.securityService.securityObject.isAuthenticated &&
            this.securityService.securityObject[claimType]) {
            return true;
        }
        else {
            this.router.navigate(["login"], {
                queryParams: { returnUrl: state.url }
            });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/security/login/login1.component.html":
/*!******************************************************!*\
  !*** ./src/app/security/login/login1.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div\n      class=\"alert alert-danger\"\n      *ngIf=\"securityObject && !securityObject.isAuthenticated\"\n    >\n      <p>Invalid User Name/Password.</p>\n    </div>\n  </div>\n</div>\n\n<form>\n  <div class=\"row\">\n    <div class=\"col-sm-4\"></div>\n\n    <div class=\"col-sm-4\">\n      <div class=\"card border-primary\">\n        <div class=\"card-header badge-primary\">Login Details</div>\n        <div class=\"card-body\">\n          <div class=\"form-group row\">\n            <div class=\"col-sm-4\">\n              <label class=\"col-form-label\" for=\"userName\">User Name :</label>\n            </div>\n            <div class=\"col-sm-8\">\n              <input\n                id=\"userName\"\n                name=\"userName\"\n                class=\"form-control form-control-input\"\n                required\n                [(ngModel)]=\"user.userName\"\n                autofocus=\"autofocus\"\n              />\n              <span class=\"input-group-addon\">\n                <i class=\"glyphicon glyphicon-envelope\"></i>\n              </span>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-sm-4\">\n              <label class=\"col-form-label\" for=\"password\">Password :</label>\n            </div>\n            <div class=\"col-sm-8\">\n              <input\n                id=\"password\"\n                name=\"password\"\n                class=\"form-control form-control-input\"\n                required\n                [(ngModel)]=\"user.password\"\n                type=\"password\"\n              />\n              <span class=\"input-group-addon\">\n                <i class=\"glyphicon glyphicon-lock\"></i>\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer text-right\">\n          <button\n            class=\"btn btn-primary btn-sm btn-space badge-pill\"\n            (click)=\"login()\"\n          >\n            Login\n          </button>\n          <button class=\"btn btn-danger btn-sm btn-space badge-pill\">\n            Reset\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\"></div>\n  </div>\n</form>\n<!-- TEMPORARY CODE TO VIEW SECURITY OBJECT -->\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <label>{{ securityObject | json }}</label>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/security/login/login1.component.ts":
/*!****************************************************!*\
  !*** ./src/app/security/login/login1.component.ts ***!
  \****************************************************/
/*! exports provided: Login1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login1Component", function() { return Login1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-user */ "./src/app/security/app-user.ts");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security.service */ "./src/app/security/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Login1Component = /** @class */ (function () {
    function Login1Component(securityService) {
        this.securityService = securityService;
        this.user = new _app_user__WEBPACK_IMPORTED_MODULE_1__["AppUser"]();
        this.securityObject = null;
    }
    Login1Component.prototype.ngOnInit = function () { };
    Login1Component.prototype.login = function () {
        var _this = this;
        this.securityService.login(this.user).subscribe(function (resp) {
            _this.securityObject = resp;
        });
    };
    Login1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login1",
            template: __webpack_require__(/*! ./login1.component.html */ "./src/app/security/login/login1.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"]])
    ], Login1Component);
    return Login1Component;
}());



/***/ }),

/***/ "./src/app/security/security.service.ts":
/*!**********************************************!*\
  !*** ./src/app/security/security.service.ts ***!
  \**********************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_user_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-user-auth */ "./src/app/security/app-user-auth.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API_URL = "http://localhost:3757/api/token/";
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        "Content-Type": "application/json"
    })
};
var SecurityService = /** @class */ (function () {
    function SecurityService(http) {
        this.http = http;
        this.securityObject = new _app_user_auth__WEBPACK_IMPORTED_MODULE_2__["AppUserAuth"]();
    }
    SecurityService.prototype.login = function (entity) {
        var _this = this;
        // Initialize security object
        this.resetSecurityObject();
        return this.http
            .post(API_URL + "get", entity, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (resp) {
            // Use object assign to update the current object
            // NOTE: Don't create a new AppUserAuth object
            //       because that destroys all references to object
            Object.assign(_this.securityObject, resp);
            // Store into local storage
            localStorage.setItem("bearerToken", _this.securityObject.bearerToken);
        }));
    };
    SecurityService.prototype.logout = function () {
        this.resetSecurityObject();
    };
    SecurityService.prototype.resetSecurityObject = function () {
        this.securityObject.userName = "";
        this.securityObject.bearerToken = "";
        this.securityObject.isAuthenticated = false;
        this.securityObject.canAccessProducts = false;
        this.securityObject.canAddProduct = false;
        this.securityObject.canSaveProduct = false;
        this.securityObject.canAccessCategories = false;
        this.securityObject.canAddCategory = false;
        localStorage.removeItem("bearerToken");
    };
    SecurityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SecurityService);
    return SecurityService;
}());



/***/ }),

/***/ "./src/app/server/server.component.html":
/*!**********************************************!*\
  !*** ./src/app/server/server.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<p [ngStyle]=\"{backgroundColor:getColor()}\"\r\n[ngClass]=\"{online : serverStatus === 'Online' }\">\r\n{{'Server'}} with ID {{serverId}} is {{getServerStatus()}}</p>"

/***/ }),

/***/ "./src/app/server/server.component.ts":
/*!********************************************!*\
  !*** ./src/app/server/server.component.ts ***!
  \********************************************/
/*! exports provided: ServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponent", function() { return ServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
        this.serverId = 10;
        this.serverStatus = 'Offline';
        this.serverStatus = Math.random() > .5 ? 'Online' : 'Offline';
    }
    ServerComponent.prototype.getServerStatus = function () {
        return this.serverStatus;
    };
    ServerComponent.prototype.getColor = function () {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    };
    ServerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-server',
            template: __webpack_require__(/*! ./server.component.html */ "./src/app/server/server.component.html"),
            styles: ["\n    .online {\n        color : white;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], ServerComponent);
    return ServerComponent;
}());



/***/ }),

/***/ "./src/app/servers/servers.component.css":
/*!***********************************************!*\
  !*** ./src/app/servers/servers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/servers/servers.component.html":
/*!************************************************!*\
  !*** ./src/app/servers/servers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>Server Name</label>\n<!-- <input \ntype=\"text\"\nclass=\"form-control\"\n(input)=\"onUpdateServer($event)\"\n> -->\n\n<input \ntype=\"text\"\nclass=\"form-control\"\n[(ngModel)]=\"serverName\"\n>\n\n<P>{{serverName}}</P>\n<button class=\"btn btn-primary\" \n[disabled]=\"!allowNewServer\"\n(click)=\"onCreateServer()\"\n>Add Server</button>\n<!-- <p [innerText]=\"allowNewServer\"></p> -->\n<!-- <p>{{serverCreationStatus}}</p> -->\n<p *ngIf=\"serverCreated\">Server was created! Server name is {{serverName}}</p>\n<app-server *ngFor=\"let server of servers\"></app-server>\n"

/***/ }),

/***/ "./src/app/servers/servers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/servers/servers.component.ts ***!
  \**********************************************/
/*! exports provided: ServersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServersComponent", function() { return ServersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServersComponent = /** @class */ (function () {
    function ServersComponent() {
        this.allowNewServer = false;
        this.serverCreationStatus = "No server was created!";
        this.serverName = "Test Server";
        this.serverCreated = false;
        this.servers = ["Test Server", "Test Server 2"];
        // setTimeout(() => {
        //   this.allowNewServer=true;
        // }, 2000);
        this.allowNewServer = true;
    }
    ServersComponent.prototype.ngOnInit = function () { };
    ServersComponent.prototype.onCreateServer = function () {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = "Server was created!";
    };
    ServersComponent.prototype.onUpdateServer = function (event) {
        this.serverName = event.target.value;
    };
    ServersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-servers",
            template: __webpack_require__(/*! ./servers.component.html */ "./src/app/servers/servers.component.html"),
            styles: [__webpack_require__(/*! ./servers.component.css */ "./src/app/servers/servers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServersComponent);
    return ServersComponent;
}());



/***/ }),

/***/ "./src/app/template4x4/template4x4.component.css":
/*!*******************************************************!*\
  !*** ./src/app/template4x4/template4x4.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/template4x4/template4x4.component.html":
/*!********************************************************!*\
  !*** ./src/app/template4x4/template4x4.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header badge-primary\">\n    Header\n  </div>\n  <div class=\"card-body\">\n    <!-- <h5 class=\"card-title\">Title</h5> -->\n    <!--Template 4x4 start-->\n    <div class=\"row\">\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Name :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input1\" placeholder=\"Type Something...\">\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 2 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input2\" placeholder=\"Type Something...\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 3 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input3\" placeholder=\"Type Something...\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 4 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input4\" placeholder=\"Type Something...\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 1 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input1\" placeholder=\"Type Something...\">\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 2 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input2\" placeholder=\"Type Something...\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 3 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input3\" placeholder=\"Type Something...\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 4 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input4\" placeholder=\"Type Something...\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 1 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input1\" placeholder=\"Type Something...\">\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 2 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input2\" placeholder=\"Type Something...\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 3 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input3\" placeholder=\"Type Something...\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 4 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input4\" placeholder=\"Type Something...\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 1 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input1\" placeholder=\"Type Something...\">\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 2 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input2\" placeholder=\"Type Something...\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 3 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input3\" placeholder=\"Type Something...\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md col-sm\">\n        <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-4 col-form-label\">Input 4 :</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control form-control-input\" id=\"input4\" placeholder=\"Type Something...\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--Template 4x4 end-->\n  </div>\n  <!-- <div class=\"card-footer\">\n      Footer\n    </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/template4x4/template4x4.component.ts":
/*!******************************************************!*\
  !*** ./src/app/template4x4/template4x4.component.ts ***!
  \******************************************************/
/*! exports provided: Template4x4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template4x4Component", function() { return Template4x4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Template4x4Component = /** @class */ (function () {
    function Template4x4Component() {
    }
    Template4x4Component.prototype.ngOnInit = function () {
    };
    Template4x4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template4x4',
            template: __webpack_require__(/*! ./template4x4.component.html */ "./src/app/template4x4/template4x4.component.html"),
            styles: [__webpack_require__(/*! ./template4x4.component.css */ "./src/app/template4x4/template4x4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Template4x4Component);
    return Template4x4Component;
}());



/***/ }),

/***/ "./src/app/users/user/user.component.css":
/*!***********************************************!*\
  !*** ./src/app/users/user/user.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/user/user.component.html":
/*!************************************************!*\
  !*** ./src/app/users/user/user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>User with ID {{user.id}} loaded.</p>\n<p>User with Name {{user.name}} </p>\n<hr>\n<a [routerLink]=\"['/users','10','Anna']\">Load Anna(10)   </a>\n"

/***/ }),

/***/ "./src/app/users/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/users/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(route) {
        this.route = route;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = {
            id: this.route.snapshot.params["id"],
            name: this.route.snapshot.params["name"]
        };
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            _this.user.id = params["id"];
            _this.user.name = params["name"];
        });
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-user",
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/users/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/users/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>users works!</p>\n<div class=\"card border-primary\">\n  <div class=\"card-header badge-primary\">\n    Page Header\n    <button class=\"badge badge-danger badge-pill float-right\">Close</button>\n  </div>\n  <div class=\"card-body\">\n    <form class=\"\" novalidate (ngSubmit)=\"addUser()\" [formGroup]=\"userForm\">\n      <div class=\"bg-light\" style=\"border-color: blue\">\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <div class=\"col-md-6\">\n              <label for=\"firstName\">First Name</label>\n            </div>\n            <div class=\"col-md-6\">\n              <div\n                [ngClass]=\"{\n                  'has-error':\n                    userForm.controls.firstName.invalid &&\n                    userForm.controls.firstName.dirty\n                }\"\n              >\n                <input\n                  id=\"firstName\"\n                  type=\"text\"\n                  placeholder=\"First Name\"\n                  formControlName=\"firstName\"\n                />\n                <div\n                  *ngIf=\"userForm.controls.firstName.dirty\"\n                  class=\"has-error\"\n                >\n                  <div *ngIf=\"userForm.controls.firstName.errors?.required\">\n                    Title is required.\n                  </div>\n                  <div *ngIf=\"userForm.controls.firstName.errors?.maxlength\">\n                    Title is too long.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">col-1</div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">col-1</div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">col-1</div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">col-1</div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">col-1</div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">col-1</div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">col-1</div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">col-1</div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">col-1</div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">col-1</div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">col-1</div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">col-1</div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">col-1</div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">col-1</div>\n          <div class=\"col-4\">col-2</div>\n          <div class=\"col-4\">col-3</div>\n        </div>\n      </div>\n    </form>\n\n    <div class=\"card-footer\">\n      <div class=\"row\">\n        <div class=\"col-6 text-left\">\n          <button class=\"btn btn-default btn-sm btn-space badge-pill\">\n            Back\n          </button>\n        </div>\n        <div class=\"col-6 text-right\">\n          <button class=\"btn btn-primary btn-sm btn-space badge-pill\">\n            Save\n          </button>\n          <button class=\"btn btn-danger btn-sm btn-space badge-pill\">\n            Cancel\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/logger.service */ "./src/app/_services/logger.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security/security.service */ "./src/app/security/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = /** @class */ (function () {
    function UsersComponent(loggerService, formBuilder, router, securityService) {
        this.loggerService = loggerService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.securityService = securityService;
        this.securityObject = null;
        this.securityObject = securityService.securityObject;
        loggerService.log(JSON.stringify(this.securityObject));
    }
    UsersComponent.prototype.ngOnInit = function () {
        // define the tourForm (with empty default values)
        this.userForm = this.formBuilder.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            middleName: [""],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]]
        });
        console.log(this.loggerService.log("User Component Works"));
    };
    UsersComponent.prototype.addUser = function () {
        console.log(this.userForm.value);
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-users",
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _security_security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\Angular\MyAngular6App\myAngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map