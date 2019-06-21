webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/lazyloading/lazyloading.module": [
		"../../../../../src/app/lazyloading/lazyloading.module.ts",
		"lazyloading.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videocenter_videocenter_component__ = __webpack_require__("../../../../../src/app/videocenter/videocenter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'videos', component: __WEBPACK_IMPORTED_MODULE_3__videocenter_videocenter_component__["a" /* VideocenterComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'admin',
        loadChildren: 'app/lazyloading/lazyloading.module#LazyloadingModule'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n.header{\n  margin-bottom: 10px;\n}\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n}\n\nli {\n    float: left;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover:not(.active) {\n    background-color: #111;\n}\n\n.active {\n    background-color: #4CAF50;\n}\np{\n width: 200px;\n background-color: lightslategrey;\n margin: 20px auto;\n font-size: 1.5em;\n text-align: center;    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n  <ul class=\"header\">\n    <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n    <li><a routerLink=\"/signup\" routerLinkActive=\"active\">Signup</a></li>\n    <li><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n    <li><a routerLink=\"/videos\" routerLinkActive=\"active\">User details</a></li>\n    <li><a routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a></li>\n  </ul>\n  <!-- <p [@myanimation]='state' (click)=\"animateme()\">I will animate</p> -->\n  <div>\n    <label for=\"names\">name</label>\n    <input type=\"text\" id=\"names\" [(ngModel)]='names'>\n  </div>\n  <button (click)=\"toggleChild()\">Toggle child component</button>\n\n  <router-outlet></router-outlet>\n  <app-footercomponent [name]=\"names\" *ngIf=\"showcomponent\"></app-footercomponent>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = "app";
        this.names = "vinod";
        this.state = "extralarge";
    }
    AppComponent.prototype.toggleChild = function () {
        // alert('ddddd');
        this.showcomponent = !this.showcomponent;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.toggleChild();
    };
    AppComponent.prototype.animateme = function () {
        this.state = this.state === "small" ? "large" : "small";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])("myanimation", [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])("small", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                        transform: "scale(1)"
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])("large", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                        transform: "scale(1.2)"
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])("extralarge", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                        transform: "scale(2)"
                    })),
                    // transition('small <=> large',animate('300ms ease-in',style({
                    //   transform:'translateY(40px)'
                    // }))),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])("* => *", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("500ms"))
                ])
            ]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footercomponent_footercomponent_component__ = __webpack_require__("../../../../../src/app/footercomponent/footercomponent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__videocenter_videocenter_component__ = __webpack_require__("../../../../../src/app/videocenter/videocenter.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__videocenter_videocenter_component__["a" /* VideocenterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footercomponent_footercomponent_component__["a" /* FootercomponentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* HashLocationStrategy */] }, __WEBPACK_IMPORTED_MODULE_11__service_user_service__["a" /* UserdataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/footercomponent/footercomponent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer{\n\tposition: fixed;\n    bottom: 0;\n    width: 100%;\n    left: 0;\n    right: 0;\n    margin: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footercomponent/footercomponent.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section>\n  <div class=\"continer\">\n    <div class=\"row footer\">\n      <div class=\"col-md-4\" style=\"background-color:lightgreen;\">\n        <h1 style=\"color: blue;text-align: center;\">Contact us</h1>\n        <p>\n          <span>mail:Hr@olivetech.net</span><br>\n          <span>phone number:9494437121</span><br>\n          <span>city: Hyderabad</span>\n        </p>\n      </div>\n      <div class=\"col-md-4\" style=\"background-color:lightgreen\">\n        <h1 style=\"color: blue;text-align: center;\">fallow Us</h1>\n        <p>\n          <span><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></span>\n          <span><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></span>\n          <span><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></span>\n        </p>\n      </div>\n      <div class=\"col-md-4\" style=\"background-color:lightgreen\">\n        <h1 style=\"color: blue\">\n          Careers</h1>\n      </div>\n      <div class=\"row\" style=\"margin: auto;color: red\">\n        <p>@ copy rights recived</p>\n      </div>\n    </div>\n  </div>\n</section> -->\n"

/***/ }),

/***/ "../../../../../src/app/footercomponent/footercomponent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootercomponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FootercomponentComponent = (function () {
    function FootercomponentComponent() {
        this.templatehide = true;
    }
    FootercomponentComponent.prototype.ngOnChanges = function (changes) {
        if (name !== "vinod") {
            this.templatehide = false;
        }
    };
    FootercomponentComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], FootercomponentComponent.prototype, "name", void 0);
    FootercomponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "app-footercomponent",
            template: __webpack_require__("../../../../../src/app/footercomponent/footercomponent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footercomponent/footercomponent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FootercomponentComponent);
    return FootercomponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnChanges = function (changes) { };
    HomeComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], HomeComponent.prototype, "name", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "app-home",
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"panel panel-default\">\n\t   \t <div class=\"panel-heading\">\n\t   \t \t<h4>Login form</h4>\n\t   \t </div>\n\t   \t <div class=\"panel-body\">\n\t   \t \t<div class=\"col-md-12\">\n\t\t\t\t<form #loginForm = \"ngForm\" (ngSubmit)=\"submituserlogindetails(loginForm.value)\" novalidate>\n\t\t\t        <div class=\"form-group\">\n\t\t            \t<label>Email id</label>\n\t\t\t    \t\t<input type=\"text\" class=\"form-control\" name=\"usermail\" ngModel>\n\t\t\t        </div>\n\t\t\t        <div class=\"form-group\">\n\t\t\t            <label>Password</label> \n\t\t\t            <input type=\"text\" class=\"form-control\" name=\"userpassword\" ngModel>\n\t\t\t        </div>\n\t\t\t     <button type=\"submit\" class=\"btn btn-primary\">submit</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t   \t </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(http, _router) {
        this.http = http;
        this._router = _router;
        this.loginobject = {};
    }
    LoginComponent.prototype.submituserlogindetails = function (logindetails) {
        var _this = this;
        this.loginobject = {
            Usermail: logindetails.usermail,
            Userpassword: logindetails.userpassword
        };
        this.http.post("/login", this.loginobject).subscribe(function (res) {
            var data = res;
            console.log(data.token);
            console.log(data.userid);
            sessionStorage.setItem("jwttoken", data.token);
            sessionStorage.setItem("uid", data.userid);
            if (data.status === false) {
                _this._router.navigate(["/login"]);
            }
            else {
                _this._router.navigate(["/videos"]);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: "app-login",
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserdataService = (function () {
    function UserdataService(http) {
        this.http = http;
        this.uid = sessionStorage.getItem('uid');
        this.token = sessionStorage.getItem('jwttoken');
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'uid': this.uid,
                'token': this.token
            })
        };
    }
    UserdataService.prototype.getUserdetails = function () {
        console.log('user data service calling', this.httpOptions);
        return this.http.get('/getuserdetails', this.httpOptions)
            .map(function (res) {
            console.log(res);
            return res;
        });
    };
    UserdataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserdataService);
    return UserdataService;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t\t   <div class=\"panel panel-default\">\n\t\t   \t <div class=\"panel-heading\">\n\t\t   \t \t<h4>Signup form, vinod target</h4>\n\t\t   \t </div>\n\t\t   \t <div class=\"panel-body\">\n\t\t   \t \t<div class=\"col-md-12\">\n\t\t\t\t\t<form #userForm = \"ngForm\" (ngSubmit)=\"submituserdetails(userForm.value)\" novalidate>\n\t\t\t\t        <div class=\"form-group\">\n\t\t\t\t            <label>name</label>\n\t\t\t\t            <input type=\"text\" class=\"form-control\" name=\"uname\" ngModel required>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"form-group\">\n\t\t\t\t            <label>mobile number</label>\n\t\t\t\t            <input type=\"text\" class=\"form-control\" name=\"umobilenum\" ngModel>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"form-group\">\n\t\t\t\t            <label>Email id</label>\n\t\t\t\t    \t\t<input type=\"text\" class=\"form-control\" name=\"usermmail\" ngModel>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"form-group\">\n\t\t\t\t            <label>Password</label> \n\t\t\t\t            <input type=\"text\" class=\"form-control\" name=\"upassword\" ngModel>\n\t\t\t\t        </div>\n\t\t\t\t     <button type=\"submit\" class=\"btn btn-primary\">submit</button>\n    \t\t\t</form>\n\t\t\t\t</div>\n\t\t   \t </div>\n\t\t   </div>\n\t</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(http, _router) {
        this.http = http;
        this._router = _router;
        this.userobj = {};
    }
    SignupComponent.prototype.submituserdetails = function (userdata) {
        var _this = this;
        userdata.umobilenum = "9494437121";
        this.userobj = {
            username: userdata.uname,
            usermobilenum: userdata.umobilenum,
            usermail: userdata.usermmail,
            userpassword: userdata.upassword
        };
        console.log(this.userobj);
        this.http.post("/userdata", this.userobj).subscribe(function (res) {
            var data = res;
            console.log(data);
            _this._router.navigate(["/login"]);
        });
    };
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: "app-signup",
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/videocenter/videocenter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/videocenter/videocenter.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n\t<div class=\"container\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3>User data</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<table>\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<th>name</th>\n\t\t\t\t\t\t<th>age</th>\n\t\t\t\t\t\t<th>url</th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor= \"let user of userdatas\">\n\t\t\t\t\t\t\t<td>{{user.username}}</td>\n\t\t\t\t\t\t\t<td>26</td>\n\t\t\t\t\t\t\t<td>{{user._id}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/videocenter/videocenter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideocenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideocenterComponent = (function () {
    function VideocenterComponent(http, _router, _userservice) {
        this.http = http;
        this._router = _router;
        this._userservice = _userservice;
    }
    VideocenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var uid = sessionStorage.getItem("uid");
        var token = sessionStorage.getItem("jwttoken");
        console.log(uid);
        console.log(token);
        this._userservice.getUserdetails().subscribe(function (userdata) {
            _this.userdatas = userdata;
            console.log(_this.userdatas);
        });
    };
    VideocenterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: "app-videocenter",
            template: __webpack_require__("../../../../../src/app/videocenter/videocenter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/videocenter/videocenter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserdataService */]])
    ], VideocenterComponent);
    return VideocenterComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseurl: 'https://user/pswd'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map