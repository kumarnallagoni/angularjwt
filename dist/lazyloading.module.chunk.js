webpackJsonp(["lazyloading.module"],{

/***/ "../../../../../src/app/lazyloading/lazycomponent/lazycomponent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lazyloading/lazycomponent/lazycomponent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t\t   <div class=\"panel panel-default\">\n\t\t   \t <div class=\"panel-heading\">\n\t\t   \t \t<h4>Login Admin</h4>\n\t\t   \t </div>\n\t\t   </div>\n\t</div>\n<ul>\n  <li><a routerLink=\"./lazysub\" routerLinkActive=\"active\">sublazyloading</a></li>\n</ul>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/lazyloading/lazycomponent/lazycomponent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazycomponentComponent; });
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

var LazycomponentComponent = (function () {
    function LazycomponentComponent() {
    }
    LazycomponentComponent.prototype.ngOnInit = function () {
    };
    LazycomponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-lazycomponent',
            template: __webpack_require__("../../../../../src/app/lazyloading/lazycomponent/lazycomponent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lazyloading/lazycomponent/lazycomponent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LazycomponentComponent);
    return LazycomponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lazyloading/lazyloading-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyloadingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lazycomponent_lazycomponent_component__ = __webpack_require__("../../../../../src/app/lazyloading/lazycomponent/lazycomponent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sublazycomponent_sublazycomponent_component__ = __webpack_require__("../../../../../src/app/lazyloading/sublazycomponent/sublazycomponent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__lazycomponent_lazycomponent_component__["a" /* LazycomponentComponent */],
        children: [
            {
                path: 'lazysub',
                component: __WEBPACK_IMPORTED_MODULE_3__sublazycomponent_sublazycomponent_component__["a" /* SublazycomponentComponent */]
            }
        ]
    }];
var LazyloadingRoutingModule = (function () {
    function LazyloadingRoutingModule() {
    }
    LazyloadingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], LazyloadingRoutingModule);
    return LazyloadingRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/lazyloading/lazyloading.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyloadingModule", function() { return LazyloadingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lazyloading_routing_module__ = __webpack_require__("../../../../../src/app/lazyloading/lazyloading-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lazycomponent_lazycomponent_component__ = __webpack_require__("../../../../../src/app/lazyloading/lazycomponent/lazycomponent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sublazycomponent_sublazycomponent_component__ = __webpack_require__("../../../../../src/app/lazyloading/sublazycomponent/sublazycomponent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LazyloadingModule = (function () {
    function LazyloadingModule() {
    }
    LazyloadingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__lazyloading_routing_module__["a" /* LazyloadingRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__lazycomponent_lazycomponent_component__["a" /* LazycomponentComponent */], __WEBPACK_IMPORTED_MODULE_4__sublazycomponent_sublazycomponent_component__["a" /* SublazycomponentComponent */]]
        })
    ], LazyloadingModule);
    return LazyloadingModule;
}());



/***/ }),

/***/ "../../../../../src/app/lazyloading/sublazycomponent/sublazycomponent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lazyloading/sublazycomponent/sublazycomponent.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sublazycomponent works!\n</p>\n<a routerLink='/home'>Redirect to home</a>"

/***/ }),

/***/ "../../../../../src/app/lazyloading/sublazycomponent/sublazycomponent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SublazycomponentComponent; });
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

var SublazycomponentComponent = (function () {
    function SublazycomponentComponent() {
    }
    SublazycomponentComponent.prototype.ngOnInit = function () {
    };
    SublazycomponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sublazycomponent',
            template: __webpack_require__("../../../../../src/app/lazyloading/sublazycomponent/sublazycomponent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lazyloading/sublazycomponent/sublazycomponent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SublazycomponentComponent);
    return SublazycomponentComponent;
}());



/***/ })

});
//# sourceMappingURL=lazyloading.module.chunk.js.map