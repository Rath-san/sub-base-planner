webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-base></app-base>\r\n<section>\r\n\r\n  <ul>\r\n    <li *ngFor=\"let mat of materialsInBom; let i=index\">\r\n      <div class=\"img-holder\">\r\n        <img [src]=\"mat.getImage()\" alt=\"\" (load)=\"mat.loaded = true\">\r\n        <app-spinner-loader [hidden]=\"mat.loaded\"></app-spinner-loader>\r\n        {{mat.count}}\r\n\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n  <ul>\r\n    <li *ngFor=\"let item of selectedItems; let i=index\">\r\n      <div class=\"img-holder\">\r\n        <img [src]=\"item.getImage()\" alt=\"\" (load)=\"item.loaded = true\" (click)=\"removeFromSelected(i)\">\r\n        <app-spinner-loader [hidden]=\"item.loaded\"></app-spinner-loader>\r\n        {{item.count}}\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n  <ul>\r\n    <li *ngFor=\"let m of interiorModules\">\r\n      <div class=\"img-holder\">\r\n        <img [src]=\"m.getImage()\" alt=\"\" (load)=\"m.loaded = true\" (click)=\"logComposite(m)\">\r\n        <app-spinner-loader [hidden]=\"m.loaded\"></app-spinner-loader>\r\n      </div>\r\n      <h6>\r\n        {{ m.name }}\r\n      </h6>\r\n    </li>\r\n  </ul>\r\n\r\n  <ul>\r\n    <li *ngFor=\"let m of basePieces\">\r\n      <div class=\"img-holder\">\r\n        <img [src]=\"m.getImage()\" alt=\"\" (load)=\"m.loaded = true\" (click)=\"logComposite(m)\">\r\n        <app-spinner-loader [hidden]=\"m.loaded\"></app-spinner-loader>\r\n      </div>\r\n      <h6>\r\n        {{ m.name }}\r\n      </h6>\r\n    </li>\r\n  </ul>\r\n\r\n\r\n  <ul>\r\n    <li *ngFor=\"let m of materials\">\r\n      <div class=\"img-holder\">\r\n        <img [src]=\"m.getImage()\" alt=\"\" (load)=\"m.loaded = true\" (click)=\"logComposite(m)\">\r\n        <app-spinner-loader [hidden]=\"m.loaded\"></app-spinner-loader>\r\n      </div>\r\n      <h6>\r\n        {{ m.name }}\r\n      </h6>\r\n    </li>\r\n  </ul>\r\n\r\n  <!-- <ul>\r\n    <li *ngFor=\"let a of advanced\">\r\n      <div class=\"img-holder\">\r\n        <img [src]=\"a.getImage()\" alt=\"\" (load)=\"a.loaded = true\" (click)=\"logComposite(a)\">\r\n        <app-spinner-loader [hidden]=\"a.loaded\"></app-spinner-loader>\r\n      </div>\r\n      <h6>\r\n        {{ a.name }}\r\n      </h6>\r\n    </li>\r\n  </ul>\r\n  <hr>\r\n  <ul>\r\n    <li *ngFor=\"let b of basic\">\r\n      <div class=\"img-holder\">\r\n        <img [src]=\"b.getImage()\" alt=\"\" (load)=\"b.loaded = true\" (click)=\"logComposite(b)\">\r\n        <app-spinner-loader [hidden]=\"b.loaded\"></app-spinner-loader>\r\n      </div>\r\n      <h6>\r\n        {{ b.name }}\r\n      </h6>\r\n    </li>\r\n  </ul>\r\n  <hr>\r\n  <ul>\r\n    <li *ngFor=\"let r of raw\">\r\n      <div class=\"img-holder\">\r\n        <img [src]=\"r.getImage()\" alt=\"\" (load)=\"r.loaded = true\" (click)=\"logComposite(r)\">\r\n        <app-spinner-loader [hidden]=\"r.loaded\"></app-spinner-loader>\r\n      </div>\r\n      <h6>\r\n        {{ r.name }}\r\n      </h6>\r\n    </li>\r\n  </ul> -->\r\n  <hr>\r\n\r\n  <pre>\r\n      <!-- {{ item | json }} -->\r\n  </pre>\r\n  <div id=\"r\">\r\n    {{m}}\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "pre {\n  outline: 1px solid #ccc;\n  padding: 5px;\n  margin: 5px;\n  max-height: 500px; }\n\n.flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\nul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0;\n  list-style: none; }\n\nli {\n  padding: .5rem;\n  width: 144px; }\n\nli h6 {\n    display: block;\n    text-align: center;\n    white-space: wrap; }\n\nimg {\n  width: 100%;\n  height: auto; }\n\n.img-holder {\n  width: 128px;\n  height: 128px;\n  position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_demoservice_service__ = __webpack_require__("../../../../../src/app/shared/services/demoservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(demoService) {
        this.demoService = demoService;
        this.title = 'http test for wiki fandom';
        this.loading = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.demoService.fetchAdvanced();
        this.demoService.fetchBasic();
        this.demoService.fetchRaw();
        this.demoService.fetchElectronics();
        this.demoService.materials.subscribe(function (v) {
            if (!v.includes(null)) {
                _this.materials = v;
            }
        });
        this.demoService.fetchBasePieces();
        this.demoService.basePieces.subscribe(function (c) {
            if (c) {
                _this.basePieces = c;
            }
        });
        this.demoService.fetchInteriorModules();
        this.demoService.interiorModules.subscribe(function (m) {
            if (m) {
                _this.interiorModules = m;
            }
        });
        this.demoService.itemSelectedObservable.subscribe(function (mat) {
            _this.selectedItems = mat;
        });
        this.demoService.materialsInBOMObservable.subscribe(function (m) {
            _this.materialsInBom = m;
        });
    };
    AppComponent.prototype.updateMaterial = function (m) {
        var _this = this;
        /* update material after picking it */
        var updatePromise = new Promise(function (res, rej) {
            if (m.mats.length > 0) {
                res('has mats');
            }
            else {
                if (m.type !== 'Raw Materials') {
                    _this.demoService.findComposites(_this.demoService.makeId(m.type), m.name).then(function (x) {
                        var o = _this.demoService.searChMaterialsArray(x, _this.materials);
                        o.forEach(function (oMat) {
                            _this.updateMaterial(oMat); // updates existing mats
                        });
                        /*fixes*/
                        if (m.name === 'Room') {
                            o.find(function (oX) {
                                if (oX.name === 'Titanium') {
                                    oX.count = 6;
                                    return oX;
                                }
                            });
                        }
                        else if (m.name === 'Scanner Room') {
                            o.find(function (oX) {
                                if (oX.name === 'Titanium') {
                                    oX.count = 5;
                                    return oX;
                                }
                            });
                        }
                        else if (m.name === 'Thermal Plant') {
                            o.find(function (oX) {
                                if (oX.name === 'Titanium') {
                                    oX.count = 5;
                                    return oX;
                                }
                            });
                        }
                        else if (m.name === 'Alien Containment') {
                            o.find(function (oX) {
                                if (oX.name === 'Glass') {
                                    oX.count = 5;
                                    return oX;
                                }
                            });
                        }
                        else if (m.name === 'Titanium Ingot') {
                            o.find(function (oX) {
                                if (oX.name === 'Titanium') {
                                    oX.count = 10;
                                    return oX;
                                }
                            });
                        }
                        m.mats = o;
                    }).then(function (x) {
                        res(m);
                    });
                }
                else {
                    // console.log('it\'s raw');
                }
            }
        });
        return updatePromise;
    };
    AppComponent.prototype.logComposite = function (m) {
        var _this = this;
        this.updateMaterial(m).then(function (x) {
            _this.demoService.addToSelected(m);
        });
    };
    AppComponent.prototype.removeFromSelected = function (m) {
        this.demoService.removeFromSelected(m);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.sass")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_demoservice_service__["a" /* DemoserviceService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_demoservice_service__ = __webpack_require__("../../../../../src/app/shared/services/demoservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/base/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_base_component__ = __webpack_require__("../../../../../src/app/base/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__spinner_loader_spinner_loader_component__ = __webpack_require__("../../../../../src/app/spinner-loader/spinner-loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_material_material_module__ = __webpack_require__("../../../../../src/app/shared/material/material.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { HttpClientModule } from '@angular/common/http';








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__base_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__base_base_component__["a" /* BaseComponent */],
                __WEBPACK_IMPORTED_MODULE_9__spinner_loader_spinner_loader_component__["a" /* SpinnerLoaderComponent */]
            ],
            // entryComponents: [ImageComponent],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__shared_services_demoservice_service__["a" /* DemoserviceService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/base/base.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>"

/***/ }),

/***/ "../../../../../src/app/base/base.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/base/base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
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

var BaseComponent = (function () {
    function BaseComponent() {
    }
    BaseComponent.prototype.ngOnInit = function () {
    };
    BaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-base',
            template: __webpack_require__("../../../../../src/app/base/base.component.html"),
            styles: [__webpack_require__("../../../../../src/app/base/base.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/base/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Subnautica base planner</span>\n  <span class=\"spacer\"></span>\n  <span mat-menu-item>Settings</span>\n  <span mat-menu-item>Help</span>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/base/navbar/navbar.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.menu-item {\n  padding: 1rem 1.6rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/base/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/base/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/base/navbar/navbar.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mat; });
var Mat = (function () {
    function Mat(name, count, loaded, mats, type, subtype) {
        this.name = name;
        this.count = count;
        this.mats = mats;
        this.type = type;
        this.subtype = subtype;
    }
    Mat.prototype.getImage = function () {
        return "http://subnautica.wikia.com/wiki/Special:FilePath/" + this.name + ".png";
    };
    Mat.prototype.getLink = function (title) {
        return "http://subnautica.wikia.com/" + this.name.replace('.png', '');
    };
    return Mat;
}());



/***/ }),

/***/ "../../../../../src/app/shared/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { CommonModule } from '@angular/common';

var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatToolbarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatToolbarModule */]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/demoservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_zip__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/zip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mat__ = __webpack_require__("../../../../../src/app/mat.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchItem = (function () {
    function SearchItem(images, sections, text) {
        this.images = images;
        this.sections = sections;
        this.text = text;
    }
    return SearchItem;
}());
var DemoserviceService = (function () {
    function DemoserviceService(http) {
        this.http = http;
        this.apiRoot = __WEBPACK_IMPORTED_MODULE_7__environments_environment_prod__["a" /* environment */].api + '/api.php?format=json';
        this.rawGet = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.basicGet = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.advancedGet = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.electronicsGet = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.basePieces = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.interiorModules = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.materials = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]
            .zip(this.electronicsGet, this.basicGet, this.advancedGet, this.rawGet, function () {
            var arrays = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arrays[_i] = arguments[_i];
            }
            return arrays.reduce(function (acc, array) { return acc.concat(array); }, []);
        } // zapamiętać
        );
        this.itemsSelected = [];
        this.itemSelectedObservable = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
        this.materialsInBOM = [];
        this.materialsInBOMObservable = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
    }
    DemoserviceService.prototype.addToSelected = function (m) {
        if (this.checkForSimilar(m)) {
            this.checkForSimilar(m).count++;
        }
        else {
            m.count++;
            this.itemsSelected.push(m);
        }
        this.itemSelectedObservable.next(this.itemsSelected);
        this.offsetAddition();
    };
    DemoserviceService.prototype.removeFromSelected = function (m) {
        this.itemsSelected[m].count--;
        if (this.itemsSelected[m].count <= 0) {
            this.itemsSelected.splice(m, 1);
        }
        this.offsetAddition();
    };
    DemoserviceService.prototype.offsetAddition = function () {
        var _this = this;
        setTimeout(function () {
            var toBom = _this.itemsSelected.map(function (x) {
                var mapped = x.mats.map(function (e) {
                    return new __WEBPACK_IMPORTED_MODULE_4__mat__["a" /* Mat */](e.name, x.count * e.count, false, e.mats, e.type, e.subtype);
                });
                return mapped;
            });
            var merged = [].concat.apply([], toBom);
            merged.sort(function (a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            merged.filter(function (x) {
            });
            _this.materialsInBOM = merged;
            _this.materialsInBOMObservable.next(_this.materialsInBOM);
        }, 10);
    };
    DemoserviceService.prototype.checkForSimilar = function (m) {
        var s = this.itemsSelected.find(function (x) {
            if (x.name === m.name) {
                return x;
            }
        });
        return s;
    };
    DemoserviceService.prototype.getItemTitle = function (pageTitle) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
            search.set('action', 'parse');
            search.set('page', pageTitle);
            _this.http.get(_this.apiRoot, { search: search })
                .toPromise()
                .then(function (res) {
                resolve(res.json());
            }, function (err) {
                reject('error');
            });
        });
        return promise;
    };
    DemoserviceService.prototype.getPage = function (pageTitle) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
            search.set('action', 'parse');
            search.set('page', pageTitle);
            search.set('prop', 'text');
            _this.http.get(_this.apiRoot, { search: search })
                .toPromise()
                .then(function (res) {
                resolve(res.json());
            }, function (err) {
                reject();
            });
        });
        return promise;
    };
    DemoserviceService.prototype.clearTitle = function (title) {
        return title.replace('.png', '');
    };
    DemoserviceService.prototype.fetchAdvanced = function () {
        var _this = this;
        // ADVANCED MATERIALS
        this.getItemTitle('Advanced Materials')
            .then(function (res) {
            var rMA = _this.makeMaterial(res, 'Advanced Materials', true);
            _this.advancedGet.next(rMA.slice(1));
        });
    };
    DemoserviceService.prototype.fetchBasic = function () {
        var _this = this;
        // BASIC MATERIALS
        this.getItemTitle('Basic Materials')
            .then(function (res) {
            var rMA = _this.makeMaterial(res, 'Basic Materials', true);
            _this.basicGet.next(rMA.slice(1));
        });
    };
    DemoserviceService.prototype.fetchRaw = function () {
        var _this = this;
        // RAW MATERIALS
        this.getItemTitle('Raw Materials')
            .then(function (res) {
            var rMA = _this.makeMaterial(res, 'Raw Materials', true);
            _this.rawGet.next(rMA);
        });
    };
    DemoserviceService.prototype.fetchElectronics = function () {
        var _this = this;
        // ELECTRONICS MATERIALS
        this.getItemTitle('Electronics')
            .then(function (res) {
            var rMA = _this.makeMaterial(res, 'Electronic', true);
            _this.electronicsGet.next(rMA.slice(1));
        });
    };
    DemoserviceService.prototype.fetchBasePieces = function () {
        var _this = this;
        this.getItemTitle('Seabases')
            .then(function (res) {
            var rMA = _this.makeMaterial(res, 'Uses_in_Crafting', true);
            _this.basePieces.next(rMA.slice(18));
        });
    };
    DemoserviceService.prototype.fetchInteriorModules = function () {
        var _this = this;
        this.getItemTitle('Interior Modules')
            .then(function (res) {
            var rMA = _this.makeMaterial(res, 'Uses_in_Crafting', true);
            _this.interiorModules.next(rMA);
        });
    };
    DemoserviceService.prototype.makeMaterial = function (o, itemSection, isRaw) {
        var itemsImages = o.parse.images;
        var itemsArray = itemsImages.map(function (element) {
            /* fix */
            var e = element;
            if (e === 'Aluminum_Oxide_Crystal.png') {
                e = 'Ruby.png';
            }
            else if (e === 'Spore_Sack.png') {
                e = 'Gel_Sack.png';
            }
            else if (e === 'Seamoth_Modification_Station.png') {
                e = 'Vehicle_Upgrade_Console.png';
            }
            var elementName = e.replace('.png', '').replace(/_/g, ' ');
            var nMat = new __WEBPACK_IMPORTED_MODULE_4__mat__["a" /* Mat */](elementName, 0, false, [], itemSection);
            return nMat;
        });
        return itemsArray;
    };
    DemoserviceService.prototype.findComposites = function (sectionName, itemName) {
        var _this = this;
        var compositeFetch = new Promise(function (compositeResolve, reject) {
            if (sectionName.indexOf('Crafting') === -1) {
                _this.getPage('Fabricator')
                    .then(function (res) {
                    var dText = (res.parse.text['*']);
                    var dSection = dText.match(_this.constructRegEx('(<h[0-9]>).*?(id="' + sectionName + ')[\\s\\S]*?Sustenance', 'g') // find section
                    );
                    compositeResolve(_this.filterSection(dSection, itemName));
                });
            }
            else {
                _this.getPage('Habitat_Builder')
                    .then(function (res) {
                    var dText = (res.parse.text['*']);
                    var dSection = dText.match(_this.constructRegEx('id="' + sectionName + '[\\s|\\S]*id="Data_Bank_Entry') // find section
                    );
                    compositeResolve(_this.filterSection(dSection, itemName));
                });
            }
        });
        return compositeFetch;
    };
    DemoserviceService.prototype.filterSection = function (section, itemName) {
        if (!section) {
            return 0;
        }
        else {
            var materialRecipe = section[0].match(this.constructRegEx('<div.*?title="' + itemName + '?', 'g') // find item to be crafted
            );
            var materialCollection = materialRecipe[0].match(this.constructRegEx('<span.*?class="arrow-icon"?', 'g') // find material collection
            );
            // dodać span.inventory
            var materialsExtract = materialCollection[0].match(/(<span.*?class="recipe-icon"?.*?title=")(.*?)(")/g); // extract Materials
            var m = materialsExtract.map(function (element) {
                return element.match(/title="(.*?)"/)[1]; // count materials
            });
            return (m);
        }
    };
    DemoserviceService.prototype.constructRegEx = function (expresion, flag) {
        var newExpresion = new RegExp(expresion, flag);
        return newExpresion;
    };
    DemoserviceService.prototype.makeId = function (text) {
        /* elo moto */
        return text.replace(/ /g, '_');
    };
    DemoserviceService.prototype.searChMaterialsArray = function (x, array) {
        // find duplicates: Object
        var compObject = this.countDuplicates(x);
        var maRRay = [];
        var _loop_1 = function (oR) {
            if (compObject.hasOwnProperty(oR)) {
                var eO = oR;
                array.filter(function (material) {
                    if (material.name === oR) {
                        var newMat = new __WEBPACK_IMPORTED_MODULE_4__mat__["a" /* Mat */](material.name, compObject[oR], false, material.mats, material.type);
                        maRRay.push(newMat);
                    }
                });
            }
        };
        for (var oR in compObject) {
            _loop_1(oR);
        }
        return maRRay;
    };
    DemoserviceService.prototype.countDuplicates = function (arr) {
        arr.sort();
        var counts = {};
        arr.forEach(function (element) {
            counts[element] = (counts[element] || 0) + 1;
        });
        return counts;
    };
    DemoserviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DemoserviceService);
    return DemoserviceService;
}());



/***/ }),

/***/ "../../../../../src/app/spinner-loader/spinner-loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\"></div>"

/***/ }),

/***/ "../../../../../src/app/spinner-loader/spinner-loader.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\n  width: 40px;\n  height: 40px;\n  background-color: #333;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  will-change: opacity;\n  will-change: transform;\n  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out, sk-initopacity .2s ease-in;\n          animation: sk-rotateplane 1.2s infinite ease-in-out, sk-initopacity .2s ease-in; }\n\n@-webkit-keyframes sk-initopacity {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes sk-initopacity {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes sk-rotateplane {\n  0% {\n    -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(0deg) rotateY(0deg);\n            transform: translate(-50%, -50%) perspective(120px) rotateX(0deg) rotateY(0deg); }\n  50% {\n    -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n            transform: translate(-50%, -50%) perspective(120px) rotateX(-180.1deg) rotateY(0deg); }\n  100% {\n    -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n            transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }\n\n@keyframes sk-rotateplane {\n  0% {\n    -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(0deg) rotateY(0deg);\n            transform: translate(-50%, -50%) perspective(120px) rotateX(0deg) rotateY(0deg); }\n  50% {\n    -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n            transform: translate(-50%, -50%) perspective(120px) rotateX(-180.1deg) rotateY(0deg); }\n  100% {\n    -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n            transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spinner-loader/spinner-loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerLoaderComponent; });
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

var SpinnerLoaderComponent = (function () {
    function SpinnerLoaderComponent() {
    }
    SpinnerLoaderComponent.prototype.ngOnInit = function () {
    };
    SpinnerLoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-spinner-loader',
            template: __webpack_require__("../../../../../src/app/spinner-loader/spinner-loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/spinner-loader/spinner-loader.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerLoaderComponent);
    return SpinnerLoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    api: 'https://subnautica.wikia.com'
};


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
    production: false
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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