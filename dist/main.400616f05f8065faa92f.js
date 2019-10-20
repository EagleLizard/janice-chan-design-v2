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

module.exports = "\n<div class=\"about-page page\">\n  <div class=\"bio-container\">\n    <div class=\"name\">\n      {{info.name}}\n    </div>\n    <div class=\"bio\">\n      {{info.bio}}\n    </div>\n    <div class=\"instagram\">\n      <span>\n        IG\n      </span>\n      <span>\n        <a href=\"{{info.instagram.url}}\">\n          {{info.instagram.userName}}\n        </a>\n      </span>\n    </div>\n  </div>\n  <div class=\"history\">\n    <div class=\"history-title\">\n      {{info.history.title}}\n    </div>\n    <div\n      class=\"history-section\"\n      *ngFor=\"let section of info.history.sections;\">\n      <div class=\"history-title\">\n        {{section.title}}\n      </div>\n      <div \n        class=\"section-projects\"\n        *ngFor=\"let project of section.projects;\">\n        <div class=\"project-title\">\n          {{project.title}}\n        </div>\n        <div class=\"project-org\">\n          {{project.org}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/about-page/about-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/about-page/about-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-page {\n  display: flex; }\n  .about-page .bio-container {\n    flex: 1 0;\n    padding-right: 2vw;\n    font-size: 20px; }\n  .about-page .bio-container .name {\n      font-size: 32px;\n      font-weight: 700;\n      padding-bottom: 10px; }\n  .about-page .bio-container .bio {\n      padding-bottom: 5px; }\n  .about-page .bio-container .instagram a {\n      color: inherit; }\n  .about-page .history {\n    flex: 2 0; }\n  .about-page .history .history-title {\n      font-size: 18px;\n      padding: 10px 0;\n      font-weight: 500; }\n  .about-page .history .section-projects {\n      display: flex;\n      padding-bottom: 5px; }\n  .about-page .history .section-projects .project-title, .about-page .history .section-projects .project-org {\n        font-size: 14px; }\n  .about-page .history .section-projects .project-title {\n        font-style: italic; }\n  .about-page .history .section-projects .project-org {\n        padding-left: 10px; }\n"

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

var ABOUT_INFO = {
    name: 'JANICE CHAN',
    bio: 'Janice Chan is a scenic designer based in Utah. She is pursuing a B.F.A. in Theatre Arts: Scenic Design at Utah Valley University. Janice has designed over 12 theatrical productions since her debut in 2017. She also paints scenery for the annual Utah Renaissance Faire in Lehi, Utah. Janice grew up in Melbourne, Australia, and currently resides in Vineyard, Utah.',
    instagram: {
        userName: '@ninetiestragedy',
        url: 'https://www.instagram.com/ninetiestragedy/',
    },
    contact: 'contact@janicechan.design',
    history: {
        title: 'SCENIC & PROPERTIES DESIGN',
        sections: [
            {
                title: 'Current & Upcoming',
                projects: [
                    {
                        title: 'The Taming of the Shrew',
                        org: '(Utah Valley University)'
                    },
                    {
                        title: 'Mr Burns, a Post-Electric Play',
                        org: '(An Other Theater Company)'
                    },
                    {
                        title: 'Urinetown the Musical',
                        org: '(Utah Valley University)'
                    },
                ]
            },
            {
                title: '2019',
                projects: [
                    {
                        title: 'The Laramie Project',
                        org: '(Utah Valley University)'
                    },
                ]
            },
            {
                title: '2018',
                projects: [
                    {
                        title: 'Fat Pig',
                        org: '(An Other Theater Company)'
                    },
                    {
                        title: 'Tribes',
                        org: '(Utah Valley University)'
                    },
                    {
                        title: 'Agamemnon',
                        org: '(Utah Valley University)'
                    },
                    {
                        title: 'Next Fall',
                        org: '(An Other Theater Company)'
                    },
                    {
                        title: 'The Drag',
                        org: '(An Other Theater Company)'
                    },
                    {
                        title: 'A History of Breathing',
                        org: '(Utah Valley University)'
                    },
                ]
            },
            {
                title: '2017',
                projects: [
                    {
                        title: 'Hamlet',
                        org: '(Brigham Young University)'
                    },
                    {
                        title: 'The Taming of the Shrew',
                        org: '(Renaissance Now)'
                    },
                    {
                        title: 'Short Attention Span Theatre',
                        org: '(Utah Valley University)'
                    },
                ]
            },
            {
                title: 'ASSISTANT SCENIC DESIGN',
                projects: [
                    {
                        title: 'Cabaret',
                        org: '(Utah Valley University) 2018 BroadwayWorld Salt Lake City Awards Nomination',
                    },
                    {
                        title: 'A Year with Frog & Toad',
                        org: '(Utah Valley University)',
                    }
                ]
            }
        ]
    }
};
var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
        this.info = ABOUT_INFO;
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
/* harmony import */ var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery-page/gallery-page.component */ "./src/app/gallery-page/gallery-page.component.ts");
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
        path: 'scenic/:gallery',
        component: _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_4__["GalleryPageComponent"]
    },
    {
        path: 'art',
        component: _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_4__["GalleryPageComponent"]
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

module.exports = "<div class=\"app-root\">\n\n  <jc-sidenav>\n    <div class=\"nav-container\">\n        <jc-nav>\n        </jc-nav>\n      </div>\n    \n      <div class=\"app-content\">\n        <router-outlet></router-outlet>\n      </div>\n    \n      <jc-contact-footer>\n    </jc-contact-footer>\n  </jc-sidenav>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-root .nav-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2); }\n\n.app-root .app-content {\n  margin-top: 92px; }\n\n@media only screen and (max-device-width: 480px) {\n    .app-root .app-content {\n      margin-top: 40px; } }\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'janice-chan-design-v2';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jc-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _scenic_page_scenic_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scenic-page/scenic-page.component */ "./src/app/scenic-page/scenic-page.component.ts");
/* harmony import */ var _art_page_art_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./art-page/art-page.component */ "./src/app/art-page/art-page.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _scenic_page_page_tile_page_tile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scenic-page/page-tile/page-tile.component */ "./src/app/scenic-page/page-tile/page-tile.component.ts");
/* harmony import */ var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gallery-page/gallery-page.component */ "./src/app/gallery-page/gallery-page.component.ts");
/* harmony import */ var _contact_footer_contact_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact-footer/contact-footer.component */ "./src/app/contact-footer/contact-footer.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var icons = [
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faBars"]
];
icons.forEach(function (icon) { return _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__["library"].add(icon); });
var MatComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _scenic_page_scenic_page_component__WEBPACK_IMPORTED_MODULE_12__["ScenicPageComponent"],
                _art_page_art_page_component__WEBPACK_IMPORTED_MODULE_13__["ArtPageComponent"],
                _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_14__["AboutPageComponent"],
                _scenic_page_page_tile_page_tile_component__WEBPACK_IMPORTED_MODULE_15__["PageTileComponent"],
                _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_16__["GalleryPageComponent"],
                _contact_footer_contact_footer_component__WEBPACK_IMPORTED_MODULE_17__["ContactFooterComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_18__["SidenavComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]
            ].concat(MatComponents, [
                ngx_masonry__WEBPACK_IMPORTED_MODULE_2__["NgxMasonryModule"],
                ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__["LightboxModule"]
            ]),
            exports: MatComponents.slice(),
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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

module.exports = "<div class=\"art-page page\">\n  \n</div>\n"

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

/***/ "./src/app/contact-footer/contact-footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/contact-footer/contact-footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-footer\">\n  <mat-toolbar>\n    <mat-toolbar-row>\n        <div class=\"jc-toolbar-row jc-copyright\">\n            &copy; 2019 JANICE CHAN\n          </div>\n      <div class=\"jc-toolbar-row\">\n        janicechan.design\n      </div>\n      <div class=\"jc-toolbar-row jc-contact\">\n        <a href=\"mailto:contact@janicechan.design\">\n            contact@janicechan.design\n        </a>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-footer/contact-footer.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/contact-footer/contact-footer.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-footer {\n  box-shadow: 0 -2px 3px 0 rgba(0, 0, 0, 0.2); }\n  .contact-footer .mat-toolbar {\n    height: 92px;\n    padding: 20px;\n    background: #FFF;\n    font-weight: 100;\n    height: auto;\n    padding: 10px; }\n  .contact-footer .mat-toolbar .mat-toolbar-row {\n      height: auto; }\n  .contact-footer .mat-toolbar .jc-toolbar-row {\n      font-size: 18px;\n      box-sizing: border-box;\n      text-align: center;\n      width: 100%; }\n  .contact-footer .mat-toolbar .jc-toolbar-row.jc-copyright {\n        text-align: left; }\n  .contact-footer .mat-toolbar .jc-toolbar-row.jc-contact {\n        text-align: right; }\n  .contact-footer .mat-toolbar .jc-toolbar-row.jc-contact > a {\n          color: inherit; }\n"

/***/ }),

/***/ "./src/app/contact-footer/contact-footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/contact-footer/contact-footer.component.ts ***!
  \************************************************************/
/*! exports provided: ContactFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFooterComponent", function() { return ContactFooterComponent; });
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

var ContactFooterComponent = /** @class */ (function () {
    function ContactFooterComponent() {
    }
    ContactFooterComponent.prototype.ngOnInit = function () {
    };
    ContactFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jc-contact-footer',
            template: __webpack_require__(/*! ./contact-footer.component.html */ "./src/app/contact-footer/contact-footer.component.html"),
            styles: [__webpack_require__(/*! ./contact-footer.component.scss */ "./src/app/contact-footer/contact-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactFooterComponent);
    return ContactFooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery-page/gallery-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/gallery-page/gallery-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-page page\">\n  \n  <div class=\"gallery-header\">\n  \n    <div \n      class=\"gallery-detail\"\n      *ngIf=\"gallery && gallery.hasDetail()\">\n      <div class=\"organization\">\n        {{ gallery.title.toUpperCase() }}\n        <div class=\"gallery-title\">\n            {{ gallery.organization }}\n        </div>\n      </div>\n      <div class=\"self-credit\">\n        {{ gallery.credit }}\n      </div>\n      <div class=\"extra-credit\">\n        <div \n          class=\"extra-credit-item\"\n          *ngFor=\"let extraCredit of gallery.description;\">\n          {{ extraCredit }}\n        </div>\n      </div>\n      <div class=\"detail-footer\">\n        <div class=\"footer-year\">\n          {{ gallery.year }}\n        </div>\n        <div class=\"footer-location\">\n          {{ gallery.location }}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"gallery-images\">\n    <ngx-masonry\n      [options]=\"masonryOptions\"\n      [useImagesLoaded]=\"true\">\n      <ngxMasonryItem\n        *ngFor=\"let galleryItem of lightboxImages; let idx=index;\"\n        (click)=\"openLightbox(idx)\"\n        >\n        <div class=\"thumbnail-container\">\n          <img [src]=\"galleryItem.thumb\">\n        </div>\n      </ngxMasonryItem>\n    </ngx-masonry>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/gallery-page/gallery-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/gallery-page/gallery-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery-page {\n  display: flex; }\n  .gallery-page .gallery-detail {\n    flex: 2 0;\n    min-width: 405px; }\n  .gallery-page .gallery-images {\n    flex: 3 0; }\n  @media only screen and (max-device-width: 480px) {\n    .gallery-page {\n      flex-direction: column; } }\n  .gallery-page .gallery-images {\n    padding-top: 25px;\n    margin: 0 auto; }\n  .gallery-page .gallery-images ngx-masonry {\n      margin: 0 auto; }\n  .gallery-page .gallery-images ngx-masonry .thumbnail-container {\n        cursor: pointer;\n        margin-bottom: 20px;\n        width: 350px; }\n  .gallery-page .gallery-images ngx-masonry .thumbnail-container img {\n          width: 100%; }\n  .gallery-page .gallery-detail {\n    padding: 1.5vh 1vw; }\n  @media only screen and (max-device-width: 480px) {\n      .gallery-page .gallery-detail {\n        padding-left: 0;\n        max-width: 100%; } }\n  .gallery-page .gallery-detail .organization {\n      font-size: 32px; }\n  @media only screen and (max-device-width: 480px) {\n        .gallery-page .gallery-detail .organization {\n          font-size: 28px; } }\n  .gallery-page .gallery-detail .organization .gallery-title {\n        font-size: 20px; }\n  @media only screen and (max-device-width: 480px) {\n          .gallery-page .gallery-detail .organization .gallery-title {\n            font-size: 18px; } }\n  .gallery-page .gallery-detail .self-credit {\n      font-size: 26px; }\n  @media only screen and (max-device-width: 480px) {\n        .gallery-page .gallery-detail .self-credit {\n          font-size: 20px; } }\n  .gallery-page .gallery-detail .extra-credit {\n      padding-top: 10px; }\n  @media only screen and (max-device-width: 480px) {\n        .gallery-page .gallery-detail .extra-credit {\n          padding-top: 2px; } }\n  .gallery-page .gallery-detail .extra-credit .extra-credit-item {\n        font-size: 20px;\n        padding-top: 5px; }\n  @media only screen and (max-device-width: 480px) {\n          .gallery-page .gallery-detail .extra-credit .extra-credit-item {\n            font-size: 14px;\n            padding-top: 2px; } }\n  .gallery-page .gallery-detail .detail-footer {\n      font-size: 26px;\n      padding-top: 40px; }\n  @media only screen and (max-device-width: 480px) {\n        .gallery-page .gallery-detail .detail-footer {\n          font-size: 20px;\n          padding-top: 15px; } }\n  .gallery-page .gallery-image, .gallery-page .gallery-detail {\n    vertical-align: top; }\n  @media only screen and (max-device-width: 480px) {\n      .gallery-page .gallery-image, .gallery-page .gallery-detail {\n        display: block; } }\n  .gallery-page .gallery-image {\n    overflow: hidden;\n    width: 100%;\n    height: 50vh; }\n  @media only screen and (max-device-width: 480px) {\n      .gallery-page .gallery-image {\n        text-align: center;\n        max-width: 100%;\n        height: auto;\n        max-height: 60vh; } }\n  .gallery-page .gallery-detail {\n    display: inline-block; }\n  .gallery-page .gallery-detail {\n    box-sizing: border-box; }\n  .gallery-page .gallery-detail .organization {\n      display: inline-block; }\n  .gallery-page .gallery-detail .organization .gallery-title {\n        font-style: italic;\n        text-align: left; }\n  .gallery-page .gallery-detail .detail-footer {\n      display: flex;\n      justify-content: space-between; }\n  .gallery-page .gallery-detail .detail-footer .footer-location {\n        padding-left: 15px; }\n"

/***/ }),

/***/ "./src/app/gallery-page/gallery-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/gallery-page/gallery-page.component.ts ***!
  \********************************************************/
/*! exports provided: GalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function() { return GalleryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/gallery.service */ "./src/app/shared/gallery.service.ts");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var THUMB_SIZE = 350;
var GalleryPageComponent = /** @class */ (function () {
    function GalleryPageComponent(route, galleryService, lightbox) {
        this.route = route;
        this.galleryService = galleryService;
        this.lightbox = lightbox;
    }
    GalleryPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.masonryOptions = {
            horizontalOrder: true,
            resize: true,
            gutter: 20,
            fitWidth: true,
            columnWidth: THUMB_SIZE
        };
        this.route.params.subscribe(function (params) {
            console.log(params);
            if (params.gallery) {
                _this.gallery = _this.galleryService.getGalleryByRoute(params.gallery);
                _this.lightboxImages = _this.gallery.getLightboxImages(THUMB_SIZE);
            }
            else if (_this.route.snapshot.url[0] || _this.route.snapshot.url[0].path === 'art') {
                _this.gallery = _this.galleryService.getGalleryByRoute('art');
                _this.lightboxImages = _this.gallery.getLightboxImages(THUMB_SIZE);
            }
        });
    };
    GalleryPageComponent.prototype.openLightbox = function (idx) {
        this.lightbox.open(this.lightboxImages, idx);
    };
    GalleryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jc-gallery-page',
            template: __webpack_require__(/*! ./gallery-page.component.html */ "./src/app/gallery-page/gallery-page.component.html"),
            styles: [__webpack_require__(/*! ./gallery-page.component.scss */ "./src/app/gallery-page/gallery-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__["Lightbox"]])
    ], GalleryPageComponent);
    return GalleryPageComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jc-nav\">\n  <mat-toolbar>\n    <div class=\"img-container\">\n      <a routerLink=\"/scenic\">\n        <img src=\"{{headerImg}}\">\n      </a>\n    </div>\n    <div class=\"nav-links nav-items\">\n      <a \n        class=\"nav-link\"\n        *ngFor=\"let link of links;\"\n        routerLink=\"{{link.route}}\">\n        <div class=\"link-text\">\n          {{link.title}}\n        </div>\n      </a>\n    </div>\n    <div class=\"nav-items menu-button-container\">\n      <div \n        class=\"menu-button\"\n        (click)=\"onMenuButtonClick()\">\n        <fa-icon icon=\"bars\"></fa-icon>\n      </div>\n    </div>\n  </mat-toolbar>\n</div>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jc-nav .mat-toolbar {\n  height: 92px;\n  padding: 20px;\n  background: #FFF; }\n\n.jc-nav .mat-toolbar .img-container {\n  height: 100%; }\n\n.jc-nav .mat-toolbar .img-container img {\n    max-height: 100%; }\n\n.jc-nav .mat-toolbar .nav-items {\n  display: flex;\n  flex: 1 1;\n  justify-content: flex-end; }\n\n.jc-nav .mat-toolbar .nav-links {\n  padding-right: 10px; }\n\n.jc-nav .mat-toolbar .nav-links .nav-link {\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n    font-size: 26px;\n    padding-left: 20px;\n    transition: color 0.1s; }\n\n.jc-nav .mat-toolbar .nav-links .nav-link:hover {\n      color: #d07e5f; }\n\n.jc-nav .mat-toolbar .nav-links .nav-link .link-text {\n      font-weight: 100; }\n\n.jc-nav .mat-toolbar .menu-button-container {\n  max-width: 0; }\n\n.jc-nav .mat-toolbar .menu-button-container .menu-button {\n    display: none; }\n\n@media only screen and (max-device-width: 480px) {\n  .jc-nav .mat-toolbar {\n    padding: 5px;\n    height: 40px; }\n    .jc-nav .mat-toolbar .nav-links {\n      display: none; }\n    .jc-nav .mat-toolbar .menu-button-container {\n      max-width: initial; }\n      .jc-nav .mat-toolbar .menu-button-container .menu-button {\n        display: initial; } }\n"

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
/* harmony import */ var _shared_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/nav.service */ "./src/app/shared/nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(navService) {
        this.navService = navService;
        this.links = _shared_nav_service__WEBPACK_IMPORTED_MODULE_3__["LINKS"];
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
        this.links = _shared_nav_service__WEBPACK_IMPORTED_MODULE_3__["LINKS"];
    };
    NavComponent.prototype.onMenuButtonClick = function () {
        console.log('side menu button clicked');
        this.navService.toggle();
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jc-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"]])
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

module.exports = "<div \n  class=\"page-tile\"\n  (mouseover)=\"hover(true)\"\n  (mouseout)=\"hover(false)\">\n  <img \n    [src]=\"gallery.image.uri\"\n    [ngClass]=\"hoverClass\">\n  <a \n    class=\"image-overlay\"\n    [routerLink]=\"[gallery.route]\">\n    <div class=\"overlay-text-container\">\n      {{ gallery.title.toLowerCase() }}\n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/scenic-page/page-tile/page-tile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/scenic-page/page-tile/page-tile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-tile {\n  position: relative;\n  text-align: center;\n  overflow: hidden; }\n  .page-tile img {\n    transition: opacity 0.4s ease, -webkit-transform 0.4s ease;\n    transition: transform 0.4s ease, opacity 0.4s ease;\n    transition: transform 0.4s ease, opacity 0.4s ease, -webkit-transform 0.4s ease; }\n  .page-tile img.hovered {\n      -webkit-transform: scale(1.3, 1.3);\n              transform: scale(1.3, 1.3); }\n  .page-tile .image-overlay {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0; }\n  .page-tile .image-overlay:hover {\n      background-color: rgba(255, 255, 255, 0.7);\n      opacity: 1;\n      cursor: pointer; }\n  .page-tile .image-overlay .overlay-text-container {\n      font-size: 32px;\n      position: absolute;\n      color: #000;\n      top: 10px;\n      left: 10px;\n      text-align: left;\n      padding-right: 10px; }\n"

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
/* harmony import */ var src_app_shared_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/gallery */ "./src/app/shared/gallery.ts");
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
        console.log(this.gallery);
    };
    PageTileComponent.prototype.hover = function (isHover) {
        if (isHover) {
            this.hoverClass = 'hovered';
        }
        else {
            this.hoverClass = '';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_shared_gallery__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], PageTileComponent.prototype, "gallery", void 0);
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

module.exports = "<div class=\"scenic-page page\">\n  <div class=\"page-tile-container\" #pageTileContainer>\n    <ngx-masonry \n      [options]=\"masonryOptions\"\n      [useImagesLoaded]=\"true\">\n      <ngxMasonryItem \n        *ngFor=\"let gallery of galleries;\" \n        class=\"masonry-item\">\n        <div class=\"gallery-item\">\n          <jc-page-tile [gallery]=\"gallery\">\n          </jc-page-tile>\n        </div>\n      </ngxMasonryItem>\n    </ngx-masonry>\n  </div>\n</div>\n"

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
/* harmony import */ var _shared_gallery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/gallery.service */ "./src/app/shared/gallery.service.ts");
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
    _shared_gallery_enum__WEBPACK_IMPORTED_MODULE_2__["default"].MRBURNS,
    _shared_gallery_enum__WEBPACK_IMPORTED_MODULE_2__["default"].LARAMIE,
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
    _shared_gallery_enum__WEBPACK_IMPORTED_MODULE_2__["default"].RENAISSANCE_FAIRE,
];
var ScenicPageComponent = /** @class */ (function () {
    function ScenicPageComponent(galleryService) {
        this.galleryService = galleryService;
    }
    ScenicPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.masonryOptions = {
            horizontalOrder: true,
            resize: true,
            gutter: 20,
            fitWidth: true,
            columnWidth: 350,
        };
        this.galleries = SCENIC_GALLERIES.map(function (galleryKey) {
            return _this.galleryService.getGallery(galleryKey);
        });
    };
    ScenicPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jc-scenic-page',
            template: __webpack_require__(/*! ./scenic-page.component.html */ "./src/app/scenic-page/scenic-page.component.html"),
            styles: [__webpack_require__(/*! ./scenic-page.component.scss */ "./src/app/scenic-page/scenic-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_gallery_service__WEBPACK_IMPORTED_MODULE_1__["GalleryService"]])
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
    GALLERY["ART"] = "ART";
    GALLERY["LARAMIE"] = "LARAMIE";
    GALLERY["MRBURNS"] = "MRBURNS";
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

/***/ "./src/app/shared/gallery.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/gallery.service.ts ***!
  \*******************************************/
/*! exports provided: GalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-enum */ "./src/app/shared/gallery-enum.ts");
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery */ "./src/app/shared/gallery.ts");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image.service */ "./src/app/shared/image.service.ts");
/* harmony import */ var src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/image-uris */ "./src/app/shared/image-uris.ts");
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
    new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].MRBURNS, src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__["default"].MRBURNS_GALLERY, 'Mr. Burns, a Post-Electric Play', 'mr-burns', 'An Other Theater Company', 'scenic designer, props designer, muralist', [
        'Directors: Kacey Spadafora, Taylor Jack Nelson',
        'Lights: Emma Belnap',
        'Sound: Kaecy Spadafora',
        'Costumes: Janae Lefleur',
        'Photos: Laura Chapman, Janice Chan',
    ], '2019', 'Location: Provo, Utah, U.S.A.'),
    new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].LARAMIE, src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__["default"].LARAMIE_GALLERY, 'The Laramie Project', 'the-laramie-project', 'Utah Valley University', 'scenic & props designer', [
        'Director: Laurie Harrop-Purser',
        'Lights: Colin Skip Wilson',
        'Projections: Emma Belnap',
        'Sound: Nathan Lowry',
        'Costumes: Rae Sip & Kate Backman',
        'Makeup: Alanna Cottam',
        'Photos: Suzy Oliveira',
    ], '2019', 'Location: Orem, Utah, U.S.A.'),
    new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].THE_DRAG, src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__["default"].THE_DRAG_GALLERY, 'The Drag', 'the-drag', 'An Other Theater Company', 'scenic & props designer, muralist', [
        'Director: Taylor Jack Nelson',
        'Assistant Muralist: Tyler Whited',
        'Lights: Aimee Findley Moore',
        'Sound: Kacey Spadafora',
        'Costumes: Ash Knowles',
        'Makeup: Christopher-Alan Pederson',
        'Photos: Laura Chapman',
    ], '2018', 'Location: Provo, Utah, U.S.A.'),
    new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].CABARET, src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__["default"].CABARET_GALLERY, 'Cabaret', 'cabaret', 'Utah Valley University', 'assistant scenic & props designer', [
        'Director: Robert Moffat',
        'Scenic: Madeline Ashton',
        'Props: Madeline Ashton',
        'Lights: Emma Belnap',
        'Sound: Gavin Henry',
        'Costumes: Carolyn Urban',
        'Makeup: Shelby Gist',
        'Photos: Jeremy Hall',
    ], '2018', 'Location: Orem, Utah, U.S.A.'),
    new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].NEXT_FALL, src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__["default"].NEXT_FALL_GALLERY, 'Next Fall', 'next-fall', 'An Other Theater Company', 'scenic designer, props designer', [
        'Director: Kacey Spadafora',
        'Lights: Paige Porter',
        'Sound: Kaecy Spadafora',
        'Costumes: Ash Knowles',
        'Photos: Laura Chapman',
    ], '2018', 'Location: Provo, Utah, U.S.A.'),
    new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].AGAMEMNON, src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__["default"].AGAMEMNON_GALLERY, 'Agamemnon', 'agamemnon', 'Utah Valley University', 'scenic designer', [
        'Director: Christopher Clark',
        'Props: Aimee Moore',
        'Lights: Aaron Gubler',
        'Sound: Colin Skip Wilson',
        'Costumes: Mallory Goodman',
        'Photos: Deric Lambdin',
    ], '2018', 'Orem, Utah, U.S.A.'),
    new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].TRIBES, src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__["default"].TRIBES_GALLERY, 'Tribes', 'tribes', 'Utah Valley University', 'scenic designer', [
        'Director: Hayley Lambdin',
        'Lights: Aaron Gubler',
        'Sound: Gavin Henry',
        'Costumes: Molly Pack',
        'Photos: Deric Lambdin',
    ], '2018', 'Orem, Utah, U.S.A.'),
    new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].FAT_PIG, src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__["default"].FAT_PIG_GALLERY, 'Fat Pig', 'fat-pig', 'An Other Theater Company', 'scenic designer', [
        'Director: Morag Shepherd',
        'Lights: Paige Porter',
        'Sound: Paige Porter',
        'Costumes: Chris Lancaster',
        'Photos: Laura Chapman',
    ], '2018', 'Provo, Utah, U.S.A.'),
    new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].UVU, src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__["default"].UVU_GALLERY, 'A Year with Frog & Toad', 'a-year-with-frog-and-toad', 'Utah Valley University', 'assistant scenic designer', [
        'Director: Lisa Hall Hagen',
        'Scenic: Emma Belnap',
        'Props: Alicia Freeman',
        'Lights: Aaron Gubler',
        'Sound: Kevin Criman',
        'Costumes: Chris Lancaster',
        'Photos: Great Projects Photography',
    ], '2017', 'Orem, Utah, U.S.A.'),
    new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].SUNDANCE, src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__["default"].SUNDANCE_GALLERY, 'Joseph and the Amazing Technicolor Dreamcoat', 'joseph-and-the-amazing-technicolor-dreamcoat', 'Sundance Summer Theatre', 'scenic painter', [
        'Director: D. Terry Petrie',
        'Scenic: Stephen Purdy',
        'Lights: Matthew Taylor',
        'Sound: Matthew Kupferer',
        'Costumes: Nancy Cannon, Carla Summers'
    ], '2017', 'Sundance, Utah, U.S.A.'),
    new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].RENAISSANCE_NOW, src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__["default"].RENAISSANCE_NOW_GALLERY, 'The Taming of the Shrew', 'the-taming-of-the-shrew', 'Renaissance Now', 'scenic designer, properties master', [
        'Director: Archelaus D. Crisanto',
        'Assistant Director: Sarah Butler',
        'Costumes: Amanda Louise Hellewell',
        'Photos: Bruce Miller, Janice Chan',
    ], '2017', 'Provo, Utah, U.S.A.'),
    new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].BYU, src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__["default"].BYU_GALLERY, 'Hamlet', 'hamlet', 'Brigham Young University', 'scenic designer', [
        'Director: Chris Hults',
        'Lights: Kalea Crapo',
        'Sound: Matthew Kupferer',
        'Costumes: Sarah Ziegler',
        'Photos: Matthew Kupferer',
    ], '2017', 'Provo, Utah, U.S.A.'),
    new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].RENAISSANCE_FAIRE, src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__["default"].RENAISSANCE_FAIRE_GALLERY, 'Utah Renaissance Faire', 'utah-renaissance-faire', 'Utah Renaissance Faire', 'prop painter', [], '2017, 2018', 'Lehi, Utah, U.S.A.'),
    new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"](_gallery_enum__WEBPACK_IMPORTED_MODULE_1__["default"].ART, src_app_shared_image_uris__WEBPACK_IMPORTED_MODULE_4__["default"].ART_GALLERY, '', 'art', '', '', [], '', '')
];
var GalleryService = /** @class */ (function () {
    function GalleryService(imageService) {
        var _this = this;
        this.imageService = imageService;
        GALLERY_PAGES.forEach(function (gallery) {
            gallery.setImage(_this.imageService.getScenicImage(gallery.galleryKey, 350));
        });
    }
    GalleryService.prototype.getGallery = function (galleryKey) {
        var foundGallery = GALLERY_PAGES.find(function (gallery) {
            return gallery.galleryKey === galleryKey;
        });
        if (foundGallery === undefined) {
            throw new Error("No page found for key " + galleryKey);
        }
        return foundGallery;
    };
    GalleryService.prototype.getGalleryByRoute = function (route) {
        var foundGallery = GALLERY_PAGES.find(function (gallery) {
            return gallery.route === route;
        });
        if (foundGallery === undefined) {
            throw new Error("No page found for route " + route);
        }
        return foundGallery;
    };
    GalleryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]])
    ], GalleryService);
    return GalleryService;
}());



/***/ }),

/***/ "./src/app/shared/gallery.ts":
/*!***********************************!*\
  !*** ./src/app/shared/gallery.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lightbox_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox-image */ "./src/app/shared/lightbox-image.ts");

var Gallery = /** @class */ (function () {
    function Gallery(galleryKey, galleryUris, title, route, organization, credit, description, year, location) {
        this.galleryKey = galleryKey;
        this.galleryUris = galleryUris;
        this.title = title;
        this.route = route;
        this.organization = organization;
        this.credit = credit;
        this.description = description;
        this.year = year;
        this.location = location;
    }
    Gallery.prototype.setImage = function (image) {
        this.image = image;
    };
    Gallery.prototype.getLightboxImages = function (thumbWidth) {
        return this.galleryUris.map(function (uri) {
            return new _lightbox_image__WEBPACK_IMPORTED_MODULE_0__["LightboxImage"](uri, Gallery.getWidthUri(uri, thumbWidth));
        });
    };
    Gallery.getWidthUri = function (uri, width) {
        //strip any existing options,
        // add width query parameter provided
        return uri.split('?')[0] + "?width=" + width;
    };
    Gallery.prototype.hasDetail = function () {
        return this.title.length
            || this.organization.length
            || this.credit.length
            || this.description.length
            || this.year.length
            || this.location.length;
    };
    return Gallery;
}());
/* harmony default export */ __webpack_exports__["default"] = (Gallery);


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
var LARAMIE = imageUri('laramie.jpg');
var MRBURNS = imageUri('mrburns.jpg');
var ART_GALLERY = imageUris([
    'art/art1.png',
    'art/art2.png',
    'art/art3.png',
    'art/art4.png',
    'art/art5.jpg',
    'art/art6.jpg',
    'art/art7.jpg',
    'art/art8.jpg',
    'art/art9.jpg',
    'art/art10.jpg',
    'art/art11.jpg',
    'art/art12.png',
]);
var MRBURNS_GALLERY = imageUris([
    'mrburns/mrburns1.jpg',
    'mrburns/mrburns2.jpg',
    'mrburns/mrburns3.jpg',
    'mrburns/mrburns4.jpg',
    'mrburns/mrburns5.jpg',
    'mrburns/mrburns6.jpg',
    'mrburns/mrburns7.jpg',
    'mrburns/mrburns8.jpg',
    'mrburns/mrburns9.jpg',
    'mrburns/mrburns10.jpg',
    'mrburns/mrburns11.jpg',
    'mrburns/mrburns12.jpg',
    'mrburns/mrburns13.jpg',
    'mrburns/mrburns14.jpg',
    'mrburns/mrburns15.jpg',
    'mrburns/mrburns16.jpg',
    'mrburns/mrburns17.jpg',
    'mrburns/mrburns18.jpg',
]);
var LARAMIE_GALLERY = imageUris([
    'laramie/laramie1.jpg',
    'laramie/laramie2.jpg',
    'laramie/laramie3.jpg',
    'laramie/laramie4.jpg',
    'laramie/laramie5.jpg',
    'laramie/laramie6.jpg',
    'laramie/laramie7.jpg',
    'laramie/laramie8.jpg',
    'laramie/laramie9.jpg',
    'laramie/laramie10.jpg',
    'laramie/laramie11.jpg',
    'laramie/laramie12.jpg',
    'laramie/laramie13.jpg',
    'laramie/laramie14.jpg',
    'laramie/laramie15.jpg',
    'laramie/laramie16.jpg',
    'laramie/laramie17.jpg',
    'laramie/laramie18.jpg',
    'laramie/laramie19.jpg',
]);
var THE_DRAG_GALLERY = imageUris([
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
    'renaissancefaire/renaissancefaire1.jpg',
    'renaissancefaire/renaissancefaire2.jpg',
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
    LARAMIE: LARAMIE,
    MRBURNS: MRBURNS,
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
    THE_DRAG_GALLERY: THE_DRAG_GALLERY,
    ART_GALLERY: ART_GALLERY,
    LARAMIE_GALLERY: LARAMIE_GALLERY,
    MRBURNS_GALLERY: MRBURNS_GALLERY,
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
    new _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"](_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].CABARET, _gallery_enum__WEBPACK_IMPORTED_MODULE_3__["default"].CABARET),
    new _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"](_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].LARAMIE, _gallery_enum__WEBPACK_IMPORTED_MODULE_3__["default"].LARAMIE),
    new _gallery_image__WEBPACK_IMPORTED_MODULE_2__["default"](_image_uris__WEBPACK_IMPORTED_MODULE_1__["default"].MRBURNS, _gallery_enum__WEBPACK_IMPORTED_MODULE_3__["default"].MRBURNS),
];
var ImageService = /** @class */ (function () {
    function ImageService() {
    }
    ImageService.prototype.getScenicImage = function (key, width) {
        var foundImage = SCENIC_IMAGES.find(function (image) {
            return image.galleryKey === key;
        });
        if (foundImage === undefined) {
            // throw new Error(`Image not found for key ${key}`); 
            return undefined;
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

/***/ "./src/app/shared/lightbox-image.ts":
/*!******************************************!*\
  !*** ./src/app/shared/lightbox-image.ts ***!
  \******************************************/
/*! exports provided: LightboxImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxImage", function() { return LightboxImage; });
var LightboxImage = /** @class */ (function () {
    function LightboxImage(src, thumb, caption) {
        if (thumb === void 0) { thumb = ''; }
        this.src = src;
        this.thumb = thumb;
        this.caption = caption;
    }
    return LightboxImage;
}());



/***/ }),

/***/ "./src/app/shared/nav.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/nav.service.ts ***!
  \***************************************/
/*! exports provided: LINKS, NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINKS", function() { return LINKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
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
var NavService = /** @class */ (function () {
    function NavService() {
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.current = false;
    }
    NavService.prototype.open = function () {
        this.event.emit(this.current = true);
    };
    NavService.prototype.close = function () {
        this.event.emit(this.current = false);
    };
    NavService.prototype.toggle = function () {
        if (this.current) {
            this.close();
        }
        else {
            this.open();
        }
    };
    NavService.prototype.subscribe = function (generatorOrNext, error, complete) {
        return this.event.subscribe(generatorOrNext, error, complete);
    };
    NavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NavService);
    return NavService;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.html":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #sidenav\n    mode=\"over\"\n    [(opened)]=\"opened\"\n    (openedChange)=\"onOpenedChange($event)\"\n    position=\"start\">\n    <div class=\"sidenav-menu\">\n      <a \n        *ngFor=\"let link of links;\"\n        routerLink=\"{{link.route}}\"\n        class=\"sidenav-item\"\n        (click)=\"onItemClick()\">\n        <div class=\"item-content\">\n          {{ link.title }}\n        </div>\n      </a>\n    </div>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container .sidenav-menu {\n  display: block;\n  padding: 0 30px; }\n  .sidenav-container .sidenav-menu .sidenav-item {\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer; }\n  .sidenav-container .sidenav-menu .sidenav-item .item-content {\n      padding-top: 10px;\n      font-size: 32px; }\n"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/nav.service */ "./src/app/shared/nav.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(navService) {
        this.navService = navService;
        this.links = _shared_nav_service__WEBPACK_IMPORTED_MODULE_1__["LINKS"];
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.opened = false;
        this.navService.subscribe(function (evt) {
            _this.opened = evt;
        });
    };
    SidenavComponent.prototype.onOpenedChange = function (event) {
        if (event) {
            this.navService.open();
        }
        else {
            this.navService.close();
        }
    };
    SidenavComponent.prototype.onItemClick = function () {
        this.navService.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], SidenavComponent.prototype, "sidenav", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jc-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/sidenav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"]])
    ], SidenavComponent);
    return SidenavComponent;
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
//# sourceMappingURL=main.400616f05f8065faa92f.js.map