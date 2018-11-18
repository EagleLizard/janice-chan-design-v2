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

/***/ "./src/app/about-page/about-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/about-page/about-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-page page\">\n  About Page\n</div>\n"

/***/ }),

/***/ "./src/app/about-page/about-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/about-page/about-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-page/about-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
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

var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jc-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.scss */ "./src/app/about-page/about-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _scenic_page_scenic_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenic-page/scenic-page.component */ "./src/app/scenic-page/scenic-page.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _art_page_art_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./art-page/art-page.component */ "./src/app/art-page/art-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'scenic'
    },
    {
        path: 'scenic',
        component: _scenic_page_scenic_page_component__WEBPACK_IMPORTED_MODULE_2__["ScenicPageComponent"]
    },
    {
        path: 'art',
        component: _art_page_art_page_component__WEBPACK_IMPORTED_MODULE_4__["ArtPageComponent"]
    },
    {
        path: 'janice',
        component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__["AboutPageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-root\">\n  <div class=\"nav-container\">\n    <jc-nav>\n    </jc-nav>\n  </div>\n  <div class=\"app-content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-root .nav-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3); }\n\n.app-root .app-content {\n  margin-top: 92px; }\n\n@media only screen and (max-device-width: 480px) {\n    .app-root .app-content {\n      margin-top: 40px; } }\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'janice-chan-design-v2';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jc-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/fesm5/ngx-masonry.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _scenic_page_scenic_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scenic-page/scenic-page.component */ "./src/app/scenic-page/scenic-page.component.ts");
/* harmony import */ var _art_page_art_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./art-page/art-page.component */ "./src/app/art-page/art-page.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _scenic_page_page_tile_page_tile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scenic-page/page-tile/page-tile.component */ "./src/app/scenic-page/page-tile/page-tile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var icons = [
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faBars"]
];
icons.forEach(function (icon) { return _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["library"].add(icon); });
var MatComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _scenic_page_scenic_page_component__WEBPACK_IMPORTED_MODULE_11__["ScenicPageComponent"],
                _art_page_art_page_component__WEBPACK_IMPORTED_MODULE_12__["ArtPageComponent"],
                _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_13__["AboutPageComponent"],
                _scenic_page_page_tile_page_tile_component__WEBPACK_IMPORTED_MODULE_14__["PageTileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
            ].concat(MatComponents, [
                ngx_masonry__WEBPACK_IMPORTED_MODULE_2__["NgxMasonryModule"],
            ]),
            exports: MatComponents.slice(),
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/art-page/art-page.component.html":
/*!**************************************************!*\
  !*** ./src/app/art-page/art-page.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"art-page page\">\n  Art page\n</div>\n"

/***/ }),

/***/ "./src/app/art-page/art-page.component.scss":
/*!**************************************************!*\
  !*** ./src/app/art-page/art-page.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/art-page/art-page.component.ts":
/*!************************************************!*\
  !*** ./src/app/art-page/art-page.component.ts ***!
  \************************************************/
/*! exports provided: ArtPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtPageComponent", function() { return ArtPageComponent; });
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

var ArtPageComponent = /** @class */ (function () {
    function ArtPageComponent() {
    }
    ArtPageComponent.prototype.ngOnInit = function () {
    };
    ArtPageComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes.galleryImage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArtPageComponent.prototype, "galleryImage", void 0);
    ArtPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jc-art-page',
            template: __webpack_require__(/*! ./art-page.component.html */ "./src/app/art-page/art-page.component.html"),
            styles: [__webpack_require__(/*! ./art-page.component.scss */ "./src/app/art-page/art-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ArtPageComponent);
    return ArtPageComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jc-nav\">\n  <mat-toolbar>\n    <div class=\"img-container\">\n      <img src=\"{{headerImg}}\">\n    </div>\n    <div class=\"nav-links nav-items\">\n      <a \n        class=\"nav-link\"\n        *ngFor=\"let link of links;\"\n        routerLink=\"{{link.route}}\">\n        <div class=\"link-text\">\n          {{link.title}}\n        </div>\n      </a>\n    </div>\n    <div class=\"nav-items menu-button-container\">\n      <div \n        class=\"menu-button\"\n        (click)=\"onMenuButtonClick()\">\n        <fa-icon icon=\"bars\"></fa-icon>\n      </div>\n    </div>\n  </mat-toolbar>\n</div>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jc-nav .mat-toolbar {\n  height: 92px;\n  padding: 20px;\n  background: #FFF; }\n  .jc-nav .mat-toolbar .img-container {\n    height: 100%; }\n  .jc-nav .mat-toolbar .img-container img {\n      max-height: 100%; }\n  .jc-nav .mat-toolbar .nav-items {\n    display: flex;\n    flex: 1 1;\n    justify-content: flex-end; }\n  .jc-nav .mat-toolbar .nav-links {\n    padding-right: 10px; }\n  .jc-nav .mat-toolbar .nav-links .nav-link {\n      color: inherit;\n      font-size: 26px;\n      text-decoration: none;\n      cursor: pointer;\n      padding-left: 20px;\n      transition: color 0.1s; }\n  .jc-nav .mat-toolbar .nav-links .nav-link:hover {\n        color: #d07e5f; }\n  .jc-nav .mat-toolbar .nav-links .nav-link .link-text {\n        font-weight: 100; }\n  .jc-nav .mat-toolbar .menu-button-container {\n    max-width: 0; }\n  .jc-nav .mat-toolbar .menu-button-container .menu-button {\n      display: none; }\n  @media only screen and (max-device-width: 480px) {\n  .jc-nav .mat-toolbar {\n    padding: 5px;\n    height: 40px; }\n    .jc-nav .mat-toolbar .nav-links {\n      display: none; }\n    .jc-nav .mat-toolbar .menu-button-container {\n      max-width: initial; }\n      .jc-nav .mat-toolbar .menu-button-container .menu-button {\n        display: initial; } }\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/image-uris */ "./src/app/shared/image-uris.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LINKS = [
    {
        title: 'scenic',
        route: '/scenic'
    },
    {
        title: 'art',
        route: '/art'
    },
    {
        title: 'janice',
        route: '/janice'
    }
];
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
        var request, options;
        options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
            url: src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].LOGO,
            method: 'GET',
            params: {
                width: 183
            }
        });
        request = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Request"](options);
        this.headerImg = request.url;
        this.links = LINKS;
    };
    NavComponent.prototype.onMenuButtonClick = function () {
        console.log('menu button clicked');
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jc-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/scenic-page/page-tile/page-tile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/scenic-page/page-tile/page-tile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-tile\">\n  <img [src]=\"galleryPage.image.uri\">\n  <a \n    class=\"image-overlay\"\n    href=\"/\"\n    >\n    <div class=\"overlay-text-container\">\n      {{ galleryPage.title }}\n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/scenic-page/page-tile/page-tile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/scenic-page/page-tile/page-tile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-tile {\n  position: relative;\n  text-align: center; }\n  .page-tile .image-overlay {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0; }\n  .page-tile .image-overlay:hover {\n      background-color: rgba(255, 255, 255, 0.5);\n      opacity: 1;\n      cursor: pointer; }\n  .page-tile .image-overlay .overlay-text-container {\n      position: absolute;\n      color: #000;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      font-weight: 400; }\n"

/***/ }),

/***/ "./src/app/scenic-page/page-tile/page-tile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/scenic-page/page-tile/page-tile.component.ts ***!
  \**************************************************************/
/*! exports provided: PageTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTileComponent", function() { return PageTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_gallery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/gallery-page */ "./src/app/shared/gallery-page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageTileComponent = /** @class */ (function () {
    function PageTileComponent() {
    }
    PageTileComponent.prototype.ngOnInit = function () {
        console.log(this.galleryPage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_shared_gallery_page__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], PageTileComponent.prototype, "galleryPage", void 0);
    PageTileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jc-page-tile',
            template: __webpack_require__(/*! ./page-tile.component.html */ "./src/app/scenic-page/page-tile/page-tile.component.html"),
            styles: [__webpack_require__(/*! ./page-tile.component.scss */ "./src/app/scenic-page/page-tile/page-tile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageTileComponent);
    return PageTileComponent;
}());



/***/ }),

/***/ "./src/app/scenic-page/scenic-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/scenic-page/scenic-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scenic-page page\">\n  <div>\n      scenic page\n  </div>\n  <div class=\"page-tile-container\" #pageTileContainer>\n    <ngx-masonry \n      [options]=\"masonryOptions\"\n      [useImagesLoaded]=\"true\">\n      <ngxMasonryItem \n        *ngFor=\"let page of galleryPages;\" \n        class=\"masonry-item\">\n        <div class=\"gallery-item\">\n          <jc-page-tile [galleryPage]=\"page\">\n          </jc-page-tile>\n        </div>\n      </ngxMasonryItem>\n    </ngx-masonry>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/scenic-page/scenic-page.component.scss":
/*!********************************************************!*\
  !*** ./src/app/scenic-page/scenic-page.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scenic-page .page-tile-container {\n  margin: 0 auto; }\n  .scenic-page .page-tile-container ngx-masonry {\n    margin: 0 auto; }\n  .scenic-page .page-tile-container ngx-masonry .masonry-item {\n      margin-bottom: 20px;\n      width: 350px; }\n  .scenic-page .page-tile-container ngx-masonry .masonry-item img {\n        width: 100%; }\n"

/***/ }),

/***/ "./src/app/scenic-page/scenic-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/scenic-page/scenic-page.component.ts ***!
  \******************************************************/
/*! exports provided: ScenicPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScenicPageComponent", function() { return ScenicPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_gallery_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/gallery-page.service */ "./src/app/shared/gallery-page.service.ts");
/* harmony import */ var _shared_gallery_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/gallery-enum */ "./src/app/shared/gallery-enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SCENIC_GALLERIES = [
    _shared_gallery_enum__WEBPACK_IMPORTED_MODULE_2__["default"].THE_DRAG,
    _shared_gallery_enum__WEBPACK_IMPORTED_MODULE_2__["default"].NEXT_FALL,
    _shared_gallery_enum__WEBPACK_IMPORTED_MODULE_2__["default"].AGAMEMNON,
    _shared_gallery_enum__WEBPACK_IMPORTED_MODULE_2__["default"].TRIBES,
    _shared_gallery_enum__WEBPACK_IMPORTED_MODULE_2__["default"].FAT_PIG,
    _shared_gallery_enum__WEBPACK_IMPORTED_MODULE_2__["default"].UVU,
    _shared_gallery_enum__WEBPACK_IMPORTED_MODULE_2__["default"].SUNDANCE,
    _shared_gallery_enum__WEBPACK_IMPORTED_MODULE_2__["default"].RENAISSANCE_NOW,
    _shared_gallery_enum__WEBPACK_IMPORTED_MODULE_2__["default"].BYU,
    _shared_gallery_enum__WEBPACK_IMPORTED_MODULE_2__["default"].CABARET,
];
var ScenicPageComponent = /** @class */ (function () {
    function ScenicPageComponent(galleryPageService) {
        this.galleryPageService = galleryPageService;
    }
    ScenicPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.masonryOptions = {
            horizontalOrder: true,
            resize: true,
            gutter: 20,
            fitWidth: true,
            columnWidth: 350
        };
        this.galleryPages = SCENIC_GALLERIES.map(function (galleryKey) {
            return _this.galleryPageService.getPage(galleryKey);
        });
    };
    ScenicPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jc-scenic-page',
            template: __webpack_require__(/*! ./scenic-page.component.html */ "./src/app/scenic-page/scenic-page.component.html"),
            styles: [__webpack_require__(/*! ./scenic-page.component.scss */ "./src/app/scenic-page/scenic-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_gallery_page_service__WEBPACK_IMPORTED_MODULE_1__["GalleryPageService"]])
    ], ScenicPageComponent);
    return ScenicPageComponent;
}());



/***/ }),

/***/ "./src/app/shared/gallery-enum.ts":
/*!****************************************!*\
  !*** ./src/app/shared/gallery-enum.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var GALLERY;
(function (GALLERY) {
    GALLERY["THE_DRAG"] = "THE_DRAG";
    GALLERY["NEXT_FALL"] = "NEXT_FALL";
    GALLERY["AGAMEMNON"] = "AGAMEMNON";
    GALLERY["TRIBES"] = "TRIBES";
    GALLERY["FAT_PIG"] = "FAT_PIG";
    GALLERY["UVU"] = "UVU";
    GALLERY["SUNDANCE"] = "SUNDANCE";
    GALLERY["RENAISSANCE_NOW"] = "RENAISSANCE_NOW";
    GALLERY["BYU"] = "BYU";
    GALLERY["RENAISSANCE_FAIRE"] = "RENAISSANCE_FAIRE";
    GALLERY["CABARET"] = "CABARET";
})(GALLERY || (GALLERY = {}));
/* harmony default export */ __webpack_exports__["default"] = (GALLERY);


/***/ }),

/***/ "./src/app/shared/gallery-image.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/gallery-image.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var GalleryImage = /** @class */ (function () {
    function GalleryImage(uri, galleryKey) {
        this.uri = uri;
        this.galleryKey = galleryKey;
    }
    GalleryImage.prototype.load = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var img, self;
            self = _this;
            if (self.imgElem !== undefined) {
                observer.next(self);
                return;
            }
            img = new Image;
            img.onload = function () {
                var _img;
                _img = this;
                self.width = _img.width;
                self.height = _img.height;
                self.imgElem = img;
                observer.next(self);
            };
            img.src = _this.uri;
        });
    };
    GalleryImage.copy = function (galleryImage) {
        return new GalleryImage(galleryImage.uri, galleryImage.galleryKey);
    };
    return GalleryImage;
}());
/* harmony default export */ __webpack_exports__["default"] = (GalleryImage);


/***/ }),

/***/ "./src/app/shared/gallery-page.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/gallery-page.service.ts ***!
  \************************************************/
/*! exports provided: GalleryPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageService", function() { return GalleryPageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-enum */ "./src/app/shared/gallery-enum.ts");
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-page */ "./src/app/shared/gallery-page.ts");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image.service */ "./src/app/shared/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GALLERY_PAGES = [
    new _gallery_page__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].THE_DRAG, 'The Drag'),
    new _gallery_page__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].CABARET, 'Cabaret'),
    new _gallery_page__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].NEXT_FALL, 'Next Fall'),
    new _gallery_page__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].AGAMEMNON, 'Agamemnon'),
    new _gallery_page__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].TRIBES, 'Tribes'),
    new _gallery_page__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].FAT_PIG, 'Fat Pig'),
    new _gallery_page__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].UVU, 'A Year with Frog & Toad'),
    new _gallery_page__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].SUNDANCE, 'Joseph and the Amazing Technicolor Dreamcoat'),
    new _gallery_page__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].RENAISSANCE_NOW, 'The Taming of the Shrew'),
    new _gallery_page__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].BYU, 'Hamlet'),
    new _gallery_page__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].RENAISSANCE_FAIRE, 'Utah Renaissance Faire'),
];
var GalleryPageService = /** @class */ (function () {
    function GalleryPageService(imageService) {
        this.imageService = imageService;
    }
    GalleryPageService.prototype.getPage = function (galleryKey) {
        var foundPage = GALLERY_PAGES.find(function (page) {
            return page.galleryKey === galleryKey;
        });
        if (foundPage === undefined) {
            throw new Error("No page found for key " + galleryKey);
        }
        foundPage.setImage(this.imageService.getScenicImage(galleryKey, 350));
        return foundPage;
    };
    GalleryPageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]])
    ], GalleryPageService);
    return GalleryPageService;
}());



/***/ }),

/***/ "./src/app/shared/gallery-page.ts":
/*!****************************************!*\
  !*** ./src/app/shared/gallery-page.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var GalleryPage = /** @class */ (function () {
    function GalleryPage(galleryKey, title) {
        this.galleryKey = galleryKey;
        this.title = title;
    }
    GalleryPage.prototype.setImage = function (image) {
        this.image = image;
    };
    return GalleryPage;
}());
/* harmony default export */ __webpack_exports__["default"] = (GalleryPage);


/***/ }),

/***/ "./src/app/shared/image-uris.ts":
/*!**************************************!*\
  !*** ./src/app/shared/image-uris.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BASEPATH = 'https://eaglelizard-files.herokuapp.com/';
var LOGO = imageUri('WebsiteLogo-min.png');
var HOME = imageUri('projects-home.png');
var JANU = imageUri('janu.jpg');
var PLACEHOLDER = imageUri('bigbird.jpg');
var RENAISSANCE_FAIRE = imageUri('utahrenaissancefaire.png');
var BYU = imageUri('brighamyounguniversity.jpg');
var SUNDANCE = imageUri('sundancesummertheatre.jpg');
var RENAISSANCE_NOW = imageUri('renaissancenow.jpg');
var UVU = imageUri('utahvalleyuniversity.jpg');
var FAT_PIG = imageUri('fatpig.jpg');
var TRIBES = imageUri('tribes.jpg');
var AGAMEMNON = imageUri('agamemnon.jpg');
var NEXT_FALL = imageUri('nextfall.jpg');
var CABARET = imageUri('cabaret.jpg');
var THE_DRAG = imageUri('thedrag.jpg');
var THE_DRAG_GRALLERY = imageUris([
    'thedrag/thedrag1.jpg',
    'thedrag/thedrag2.jpg',
    'thedrag/thedrag3.jpg',
    'thedrag/thedrag4.jpg',
    'thedrag/thedrag5.jpg',
    'thedrag/thedrag6.jpg',
    'thedrag/thedrag7.jpg',
    'thedrag/thedrag8.jpg',
    'thedrag/thedrag9.jpg',
    'thedrag/thedrag10.jpg',
]);
var CABARET_GALLERY = imageUris([
    'cabaret/cabaret1.jpg',
    'cabaret/cabaret2.jpg',
    'cabaret/cabaret3.jpg',
    'cabaret/cabaret4.jpg',
    'cabaret/cabaret5.jpg',
    'cabaret/cabaret6.jpg',
    'cabaret/cabaret7.jpg',
]);
var NEXT_FALL_GALLERY = imageUris([
    'nextfall/nextfall1.jpg',
    'nextfall/nextfall2.jpg',
    'nextfall/nextfall3.jpg',
    'nextfall/nextfall4.jpg',
    'nextfall/nextfall5.jpg',
    'nextfall/nextfall6.jpg',
    'nextfall/nextfall7.jpg',
    'nextfall/nextfall8.jpg',
    'nextfall/nextfall9.jpg',
    'nextfall/nextfall10.jpg',
]);
var AGAMEMNON_GALLERY = imageUris([
    'agamemnon/agamemnon1.jpg',
    'agamemnon/agamemnon2.jpg',
    'agamemnon/agamemnon3.jpg',
    'agamemnon/agamemnon4.jpg',
    'agamemnon/agamemnon5.jpg',
    'agamemnon/agamemnon6.jpg',
    'agamemnon/agamemnon7.jpg',
    'agamemnon/agamemnon8.jpg',
    'agamemnon/agamemnon9.jpg',
    'agamemnon/agamemnon10.jpg',
    'agamemnon/agamemnon11.jpg',
    'agamemnon/agamemnon12.jpg',
    'agamemnon/agamemnon13.jpg',
    'agamemnon/agamemnon14.jpg',
]);
var TRIBES_GALLERY = imageUris([
    'tribes/tribes1.jpg',
    'tribes/tribes2.jpg',
    'tribes/tribes3.jpg',
    'tribes/tribes4.jpg',
    'tribes/tribes5.jpg',
    'tribes/tribes6.jpg',
    'tribes/tribes7.jpg',
    'tribes/tribes8.jpg',
    'tribes/tribes9.jpg',
    'tribes/tribes10.jpg',
    'tribes/tribes11.jpg',
    'tribes/tribes12.jpg',
    'tribes/tribes13.jpg',
    'tribes/tribes14.jpg',
]);
var FAT_PIG_GALLERY = imageUris([
    'fatpig/fatpig1.jpg',
    'fatpig/fatpig2.jpg',
    'fatpig/fatpig3.jpg',
    'fatpig/fatpig4.jpg',
    'fatpig/fatpig5.jpg',
    'fatpig/fatpig6.jpg',
    'fatpig/fatpig7.jpg',
    'fatpig/fatpig8.jpg',
    'fatpig/fatpig9.jpg',
    'fatpig/fatpig10.jpg',
    'fatpig/fatpig11.jpg',
    'fatpig/fatpig12.jpg',
]);
var UVU_GALLERY = imageUris([
    'uvu/uvu1.jpg',
    'uvu/uvu2.jpg',
    'uvu/uvu3.jpg',
    'uvu/uvu4.jpg',
    'uvu/uvu5.jpg',
    'uvu/uvu6.jpg',
    'uvu/uvu7.jpg',
    'uvu/uvu8.jpg',
    'uvu/uvu9.jpg',
    'uvu/uvu10.jpg',
    'uvu/uvu11.jpg',
    'uvu/uvu12.jpg',
    'uvu/uvu13.jpg',
    'uvu/uvu14.jpg',
]);
var SUNDANCE_GALLERY = imageUris([
    'sundance/sundance1.jpg',
    'sundance/sundance2.jpg',
    'sundance/sundance3.jpg',
    'sundance/sundance4.jpg',
    'sundance/sundance5.jpg',
    'sundance/sundance6.jpg',
    'sundance/sundance7.jpg',
    'sundance/sundance8.jpg',
    'sundance/sundance9.jpg',
    'sundance/sundance10.jpg',
    'sundance/sundance11.jpg',
]);
var RENAISSANCE_NOW_GALLERY = imageUris([
    'renaissancenow/renaissancenow1.jpg',
    'renaissancenow/renaissancenow2.jpg',
    'renaissancenow/renaissancenow3.jpg',
    'renaissancenow/renaissancenow4.jpg',
    'renaissancenow/renaissancenow5.jpg',
]);
var BYU_GALLERY = imageUris([
    'byu/BYU1.jpg',
    'byu/BYU2.jpg',
    'byu/BYU3.jpg',
    'byu/BYU4.jpg',
    'byu/BYU5.jpg',
    'byu/BYU6.jpg',
    'byu/BYU7.jpg',
    'byu/BYU8.jpg',
    'byu/BYU9.jpg',
]);
var RENAISSANCE_FAIRE_GALLERY = imageUris([
    'renaissancefaire/Shield1.png',
    'renaissancefaire/Shield2.png',
    'renaissancefaire/Shield3.png',
    'renaissancefaire/Shield4.png',
]);
/* harmony default export */ __webpack_exports__["default"] = ({
    LOGO: LOGO,
    HOME: HOME,
    JANU: JANU,
    PLACEHOLDER: PLACEHOLDER,
    RENAISSANCE_FAIRE: RENAISSANCE_FAIRE,
    BYU: BYU,
    SUNDANCE: SUNDANCE,
    RENAISSANCE_NOW: RENAISSANCE_NOW,
    UVU: UVU,
    FAT_PIG: FAT_PIG,
    TRIBES: TRIBES,
    AGAMEMNON: AGAMEMNON,
    NEXT_FALL: NEXT_FALL,
    CABARET: CABARET,
    THE_DRAG: THE_DRAG,
    TRIBES_GALLERY: TRIBES_GALLERY,
    FAT_PIG_GALLERY: FAT_PIG_GALLERY,
    UVU_GALLERY: UVU_GALLERY,
    SUNDANCE_GALLERY: SUNDANCE_GALLERY,
    RENAISSANCE_NOW_GALLERY: RENAISSANCE_NOW_GALLERY,
    BYU_GALLERY: BYU_GALLERY,
    RENAISSANCE_FAIRE_GALLERY: RENAISSANCE_FAIRE_GALLERY,
    AGAMEMNON_GALLERY: AGAMEMNON_GALLERY,
    NEXT_FALL_GALLERY: NEXT_FALL_GALLERY,
    CABARET_GALLERY: CABARET_GALLERY,
    THE_DRAG_GRALLERY: THE_DRAG_GRALLERY,
});
function imageUri(fileKey) {
    return "" + BASEPATH + fileKey;
}
function imageUris(fileKeys) {
    return fileKeys.map(imageUri);
}


/***/ }),

/***/ "./src/app/shared/image.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/image.service.ts ***!
  \*****************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_uris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-uris */ "./src/app/shared/image-uris.ts");
/* harmony import */ var _gallery_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-image */ "./src/app/shared/gallery-image.ts");
/* harmony import */ var _gallery_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-enum */ "./src/app/shared/gallery-enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SCENIC_IMAGES = [
    new _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"](_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].THE_DRAG, _gallery_enum__WEBPACK_IMPORTED_MODULE_3__["default"].THE_DRAG),
    new _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"](_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].NEXT_FALL, _gallery_enum__WEBPACK_IMPORTED_MODULE_3__["default"].NEXT_FALL),
    new _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"](_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].AGAMEMNON, _gallery_enum__WEBPACK_IMPORTED_MODULE_3__["default"].AGAMEMNON),
    new _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"](_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].TRIBES, _gallery_enum__WEBPACK_IMPORTED_MODULE_3__["default"].TRIBES),
    new _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"](_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].FAT_PIG, _gallery_enum__WEBPACK_IMPORTED_MODULE_3__["default"].FAT_PIG),
    new _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"](_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].UVU, _gallery_enum__WEBPACK_IMPORTED_MODULE_3__["default"].UVU),
    new _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"](_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].SUNDANCE, _gallery_enum__WEBPACK_IMPORTED_MODULE_3__["default"].SUNDANCE),
    new _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"](_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].RENAISSANCE_NOW, _gallery_enum__WEBPACK_IMPORTED_MODULE_3__["default"].RENAISSANCE_NOW),
    new _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"](_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].BYU, _gallery_enum__WEBPACK_IMPORTED_MODULE_3__["default"].BYU),
    new _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"](_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].RENAISSANCE_FAIRE, _gallery_enum__WEBPACK_IMPORTED_MODULE_3__["default"].RENAISSANCE_FAIRE),
    new _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"](_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].CABARET, _gallery_enum__WEBPACK_IMPORTED_MODULE_3__["default"].CABARET)
];
var ImageService = /** @class */ (function () {
    function ImageService() {
    }
    ImageService.prototype.getScenicImage = function (key, width) {
        var foundImage = SCENIC_IMAGES.find(function (image) {
            return image.galleryKey === key;
        });
        if (foundImage === undefined) {
            throw new Error("Image not found for key " + key);
        }
        if (width !== undefined) {
            foundImage = _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"].copy(foundImage);
            foundImage.uri = foundImage.uri + "?width=" + width;
        }
        return foundImage;
    };
    ImageService.prototype.getScenicImages = function (width) {
        return SCENIC_IMAGES.map(function (image) {
            if (width !== undefined) {
                // make a copy with a new URI
                image = _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"].copy(image);
                image.uri = image.uri + "?width=" + width;
            }
            return image;
        });
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ImageService);
    return ImageService;
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

module.exports = __webpack_require__(/*! /Users/tylerwhited/repos/janice-chan-design-v2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map