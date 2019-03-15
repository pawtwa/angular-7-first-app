(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./recipes/recipes.module": [
		"./src/app/recipes/recipes.module.ts",
		"recipes-recipes-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-init.service.ts":
/*!*************************************!*\
  !*** ./src/app/app-init.service.ts ***!
  \*************************************/
/*! exports provided: AppInitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInitService", function() { return AppInitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_firebase_pconf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/firebase-pconf */ "./src/app/shared/firebase-pconf.ts");
/* harmony import */ var _recipes_recipes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes/recipes.service */ "./src/app/recipes/recipes.service.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppInitService = /** @class */ (function () {
    function AppInitService(authService, recipesService, dataStorageService) {
        this.authService = authService;
        this.recipesService = recipesService;
        this.dataStorageService = dataStorageService;
    }
    AppInitService.prototype.appInits = function () {
        console.log('init service 2');
        return this.initializeApp();
    };
    AppInitService.prototype.initializeApp = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.initializeFirebaseApp(resolve, reject);
        });
    };
    AppInitService.prototype.initializeFirebaseApp = function (resolve, reject) {
        var _this = this;
        var app = firebase_app__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](_shared_firebase_pconf__WEBPACK_IMPORTED_MODULE_4__["default"]);
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"](app).setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].Auth.Persistence.SESSION);
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"](app).onAuthStateChanged(function (currentUser) {
            if (currentUser) {
                currentUser.getIdToken().then(function (token) {
                    _this.authService.setToken(token);
                    _this.fetchDataSubscription = _this.dataStorageService.fetchData().subscribe(function (recipes) {
                        _this.recipesService.setRecipes(recipes);
                        _this.fetchDataSubscription ? _this.fetchDataSubscription.unsubscribe() : null;
                        resolve();
                    }, function (error) {
                        console.log(error);
                        _this.fetchDataSubscription ? _this.fetchDataSubscription.unsubscribe() : null;
                        resolve();
                    });
                });
            }
            else {
                resolve();
            }
        }, function (error) {
            reject(error);
        });
        return app;
    };
    AppInitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _recipes_recipes_service__WEBPACK_IMPORTED_MODULE_5__["RecipesService"],
            _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"]])
    ], AppInitService);
    return AppInitService;
}());



/***/ }),

/***/ "./src/app/app-load.module.ts":
/*!************************************!*\
  !*** ./src/app/app-load.module.ts ***!
  \************************************/
/*! exports provided: appInit, AppLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInit", function() { return appInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoadModule", function() { return AppLoadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_init_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-init.service */ "./src/app/app-init.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function appInit(appInitService) {
    return function () { return appInitService.initializeApp(); };
}
var AppLoadModule = /** @class */ (function () {
    function AppLoadModule() {
    }
    AppLoadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [],
            exports: [],
            providers: [
                _app_init_service__WEBPACK_IMPORTED_MODULE_1__["AppInitService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], useFactory: appInit, deps: [_app_init_service__WEBPACK_IMPORTED_MODULE_1__["AppInitService"]], multi: true },
            ]
        })
    ], AppLoadModule);
    return AppLoadModule;
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
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/home/home.component */ "./src/app/core/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    {
        path: '',
        component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
        // redirectTo: '/recipes',
        // pathMatch: 'full'
    },
    {
        path: 'recipes',
        loadChildren: './recipes/recipes.module#RecipesModule',
    },
    {
        path: 'shopping-list',
        component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingListComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                    //useHash: true
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <router-outlet></router-outlet>\n      <!-- <app-recipes *ngIf=\"leadedFeature === 'recipe'\"></app-recipes>\n      <app-shopping-list *ngIf=\"leadedFeature === 'shoppingList'\"></app-shopping-list> -->\n    </div>\n  </div>\n</div>\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.leadedFeature = 'recipe';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onNavigate = function (feature) {
        this.leadedFeature = feature;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shopping_list_shopping_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-list/shopping-list.module */ "./src/app/shopping-list/shopping-list.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shopping_list_ngrx_shooping_list_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shopping-list/ngrx/shooping-list.reducer */ "./src/app/shopping-list/ngrx/shooping-list.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Core parts
 */




/**
 * Custom modules
 */



/**
 * Custom components
 */

/**
 * Custom services
 */
/**
 * Custom directives
 */
/**
 * Custom pipes
 */
/**
* Custom NgRx reducers
*/

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _shopping_list_shopping_list_module__WEBPACK_IMPORTED_MODULE_5__["ShoppingListModule"].forRoot(),
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({
                    shoppingList: _shopping_list_ngrx_shooping_list_reducer__WEBPACK_IMPORTED_MODULE_8__["default"]
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard-child.service.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-guard-child.service.ts ***!
  \**************************************************/
/*! exports provided: AuthGuardChildService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardChildService", function() { return AuthGuardChildService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardChildService = /** @class */ (function () {
    function AuthGuardChildService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardChildService.prototype.canActivateChild = function (childRoute, state) {
        var _this = this;
        var isAuth = this.authService.isAuthenticated();
        if (!isAuth) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(100).subscribe(function (_) {
                _this.router.navigate(['/unauthenticated']);
            });
        }
        return isAuth;
    };
    AuthGuardChildService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardChildService);
    return AuthGuardChildService;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        var isAuth = this.authService.isAuthenticated();
        if (!isAuth) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(100).subscribe(function (_) {
                _this.router.navigate(['/unauthenticated']);
            });
        }
        return isAuth;
    };
    AuthGuardService.prototype.canLoad = function (route, segments) {
        var _this = this;
        var isAuth = this.authService.isAuthenticated();
        if (!isAuth) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(100).subscribe(function (_) {
                _this.router.navigate(['/unauthenticated']);
            });
        }
        return isAuth;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unauthenticated/unauthenticated.component */ "./src/app/auth/unauthenticated/unauthenticated.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var authRoutes = [
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    },
    {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
    },
    {
        path: 'unauthenticated',
        component: _unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_4__["UnauthenticatedComponent"]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(authRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unauthenticated/unauthenticated.component */ "./src/app/auth/unauthenticated/unauthenticated.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _auth_guard_child_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-guard-child.service */ "./src/app/auth/auth-guard-child.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function () {
        return {
            ngModule: AuthModule_1,
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"],
                _auth_guard_child_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardChildService"]
            ]
        };
    };
    var AuthModule_1;
    AuthModule = AuthModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
                _unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_4__["UnauthenticatedComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"]
            ],
            exports: [],
            providers: []
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signupUser = function (email, password) {
        return firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, password)
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        return firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken().then(function (token) {
                _this.token = token;
            });
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.logoutUser = function () {
        this.token = null;
        return firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.setToken = function (token) {
        this.token = token;
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = typeof this.token === 'string' && this.token.length > 0;
        return token;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n    <h2>Login</h2>\r\n    <hr />\r\n    <form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Mail</label>\r\n        <input name=\"email\" type=\"email\" ngModel class=\"form-control\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input name=\"password\" type=\"password\" ngModel class=\"form-control\" />\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\">Sign In</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var _this = this;
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signinUser(email, password).then(function (response) {
            _this.router.navigate(['/recipes']);
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n    <h2>Register</h2>\r\n    <hr />\r\n    <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Mail</label>\r\n        <input name=\"email\" type=\"email\" ngModel class=\"form-control\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input name=\"password\" type=\"password\" ngModel class=\"form-control\" />\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\">Sign Up</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var _this = this;
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signupUser(email, password).then(function (response) {
            _this.router.navigate(['/signin']);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/auth/unauthenticated/unauthenticated.component.css":
/*!********************************************************************!*\
  !*** ./src/app/auth/unauthenticated/unauthenticated.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvdW5hdXRoZW50aWNhdGVkL3VuYXV0aGVudGljYXRlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/unauthenticated/unauthenticated.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/auth/unauthenticated/unauthenticated.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"alert alert-danger\">\r\n  You need to login to see the recipes!\r\n</h1>\r\n"

/***/ }),

/***/ "./src/app/auth/unauthenticated/unauthenticated.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/unauthenticated/unauthenticated.component.ts ***!
  \*******************************************************************/
/*! exports provided: UnauthenticatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthenticatedComponent", function() { return UnauthenticatedComponent; });
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

var UnauthenticatedComponent = /** @class */ (function () {
    function UnauthenticatedComponent() {
    }
    UnauthenticatedComponent.prototype.ngOnInit = function () {
    };
    UnauthenticatedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unauthenticated',
            template: __webpack_require__(/*! ./unauthenticated.component.html */ "./src/app/auth/unauthenticated/unauthenticated.component.html"),
            styles: [__webpack_require__(/*! ./unauthenticated.component.css */ "./src/app/auth/unauthenticated/unauthenticated.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UnauthenticatedComponent);
    return UnauthenticatedComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_load_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-load.module */ "./src/app/app-load.module.ts");
/* harmony import */ var _recipes_recipes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../recipes/recipes.service */ "./src/app/recipes/recipes.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/auth-interceptor */ "./src/app/shared/auth-interceptor.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_logging_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/logging-interceptor */ "./src/app/shared/logging-interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _app_load_module__WEBPACK_IMPORTED_MODULE_5__["AppLoadModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"].forCore()
            ],
            exports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            ],
            providers: [
                _recipes_recipes_service__WEBPACK_IMPORTED_MODULE_6__["RecipesService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
                    deps: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _shared_logging_interceptor__WEBPACK_IMPORTED_MODULE_10__["LoggingInterceptor"],
                    deps: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]],
                    multi: true
                }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a href=\"#\" (click)=\"brandClick($event)\" class=\"navbar-brand\">Recipe Book</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li \r\n                    routerLinkActive=\"active\"\r\n                >\r\n                    <!-- <a href=\"#\" (click)=\"onSelect('recipe', $event)\">Recipes</a> -->\r\n                    <a routerLink=\"/recipes\">Recipes</a>\r\n                </li>\r\n                <li \r\n                    routerLinkActive=\"active\"\r\n                >\r\n                    <!-- <a href=\"#\" (click)=\"onSelect('shoppingList', $event)\">Shopping List</a> -->\r\n                    <a routerLink=\"/shopping-list\">Shopping List</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li *ngIf=\"!isAuthenticated\">\r\n                    <a routerLink='/signup'>Register</a>\r\n                </li>\r\n                <li *ngIf=\"!isAuthenticated\">\r\n                    <a routerLink='/signin'>Login</a>\r\n                </li>\r\n                <li *ngIf=\"isAuthenticated\">\r\n                    <a href=\"#\" (click)=\"onLogout($event)\">Logout</a>\r\n                </li>\r\n                <li appDropdown class=\"dropdown\" *ngIf=\"isAuthenticated\">\r\n                    <a href=\"#\" (click)=\"$event.preventDefault()\" class=\"dropdown-toggle\">Manage <span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\" (click)=\"onSaveData($event)\">Save Data</a></li>\r\n                        <li><a href=\"#\" (click)=\"onFetchData($event)\">Fetch Data</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _recipes_recipes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../recipes/recipes.service */ "./src/app/recipes/recipes.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
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
    function HeaderComponent(router, dataStorage, recipesService, authService) {
        this.router = router;
        this.dataStorage = dataStorage;
        this.recipesService = recipesService;
        this.authService = authService;
        this.featureSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(HeaderComponent.prototype, "isAuthenticated", {
        get: function () {
            return this.authService.isAuthenticated();
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.saveDataSubscription ? this.saveDataSubscription.unsubscribe() : null;
        this.fetchDataSubscription ? this.fetchDataSubscription.unsubscribe() : null;
    };
    HeaderComponent.prototype.onSelect = function (feature, event) {
        this.featureSelected.emit(feature);
    };
    HeaderComponent.prototype.brandClick = function (event) {
        event.preventDefault();
        this.router.navigate(['/']);
    };
    HeaderComponent.prototype.onSaveData = function (event) {
        event.preventDefault();
        this.saveDataSubscription ? this.saveDataSubscription.unsubscribe() : null;
        this.saveDataSubscription = this.dataStorage.storeData(this.recipesService.getRecipes()).subscribe(function (response) { }, console.log);
    };
    HeaderComponent.prototype.onFetchData = function (event) {
        var _this = this;
        event.preventDefault();
        this.fetchDataSubscription ? this.fetchDataSubscription.unsubscribe() : null;
        this.fetchDataSubscription = this.dataStorage.fetchData().subscribe(function (recipes) {
            _this.recipesService.setRecipes(recipes);
            _this.router.navigate(['/recipes']);
        }, console.log);
    };
    HeaderComponent.prototype.onLogout = function (event) {
        var _this = this;
        event.preventDefault();
        this.authService.logoutUser().then(function () {
            _this.recipesService.setRecipes([]);
            _this.router.navigate(['/']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "featureSelected", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"],
            _recipes_recipes_service__WEBPACK_IMPORTED_MODULE_3__["RecipesService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/core/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to the Recipe Book!</h1>\n"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/core/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.service.ts":
/*!********************************************!*\
  !*** ./src/app/recipes/recipes.service.ts ***!
  \********************************************/
/*! exports provided: RecipesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesService", function() { return RecipesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipesService = /** @class */ (function () {
    function RecipesService(
    // private shoppingListService: ShoppingListService,
    // private store: Store<AppStateInterface>
    ) {
        this.recipesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // recipesChanged: EventEmitter<Recipe[]> = new EventEmitter();
        // recipeSelected: EventEmitter<number> = new EventEmitter<number>();
        this.currentRecipeId = -1;
        this.recipes = [
        // new Recipe(
        //     'Tasty Schnitzel',
        //     'A super-tasty Schnitzel - just awesome!',
        //     './assets/schnitzel.png',
        //     [
        //         new Ingredient('Meat', 3),
        //         new Ingredient('French Fries', 20)
        //     ]
        // ),
        // new Recipe(
        //     'Big Fat Burger',
        //     'What else you need to say?',
        //     './assets/burger.png',
        //     [
        //         new Ingredient('Buns', 2),
        //         new Ingredient('Meat', 2)
        //     ]
        // )
        ];
    }
    RecipesService.prototype.getRecipes = function () {
        return this.recipes ? this.recipes.slice() : [];
    };
    RecipesService.prototype.getRecipeById = function (id) {
        return this.recipes[id];
    };
    RecipesService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.getRecipes());
    };
    RecipesService.prototype.setRecipes = function (recipes) {
        this.recipes = recipes;
        this.recipesChanged.next(this.getRecipes());
    };
    RecipesService.prototype.updateRecipe = function (index, recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.getRecipes());
    };
    RecipesService.prototype.deleteRecipe = function (id) {
        this.recipes.splice(id, 1);
        this.recipesChanged.next(this.getRecipes());
        // this.recipesChanged.emit(this.getRecipes());
        // if (this.currentRecipeId === id) {
        //     this.currentRecipeId = -1;
        //     this.recipeSelected.emit(this.currentRecipeId);
        // }
    };
    RecipesService.prototype.setRecipeCurrentId = function (id) {
        this.currentRecipeId = id;
        // this.recipeSelected.emit(this.currentRecipeId);
    };
    RecipesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RecipesService);
    return RecipesService;
}());



/***/ }),

/***/ "./src/app/shared/auth-interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/shared/auth-interceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var copiedReq = req.clone({
            params: req.params.set('auth', this.authService.getToken())
        });
        return next.handle(copiedReq);
    };
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _shared_firebase_pconf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/firebase-pconf */ "./src/app/shared/firebase-pconf.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataStorageService = /** @class */ (function () {
    function DataStorageService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
    }
    DataStorageService.prototype.storeData = function (recipes) {
        if (this.authService.isAuthenticated()) {
            // let authToken = this.authService.getToken();
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            });
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('PUT', this.getUrlForPath('recipes.json'), recipes, {
                headers: headers,
                responseType: 'json',
                reportProgress: true,
            });
            // return this.httpClient.put<Recipe[]>(this.getUrlForPath('recipes.json'), recipes, { 
            //   headers: headers,
            //   observe: 'body',
            //   params: (new HttpParams()).set('auth', authToken)
            // })
            return this.httpClient.request(req)
                .map(function (recipes) {
                return recipes;
            })
                .catch(function (error) {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
            });
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('not auth');
        }
    };
    DataStorageService.prototype.fetchData = function () {
        if (this.authService.isAuthenticated()) {
            // let authToken = this.authService.getToken();
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Accept': 'application/json'
            });
            return this.httpClient.get(this.getUrlForPath('recipes.json'), {
                headers: headers,
                observe: 'body',
                responseType: 'json',
                reportProgress: true
                // params: (new HttpParams()).set('auth', authToken)
            })
                .map(function (recipes) {
                return recipes;
            })
                .catch(function (error) {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.body);
            });
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('not auth');
        }
    };
    DataStorageService.prototype.getUrlForPath = function (path) {
        return _shared_firebase_pconf__WEBPACK_IMPORTED_MODULE_5__["default"].databaseURL.replace(/\/$/, "") + '/' + path;
    };
    DataStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
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

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Boolean)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/firebase-pconf.ts":
/*!******************************************!*\
  !*** ./src/app/shared/firebase-pconf.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var firebase_config = {
    apiKey: "AIzaSyA63NbxlJfmHWz6DyJehSkUNVDpoPknzf0",
    authDomain: "ng-recipe-book-91fc7.firebaseapp.com",
    databaseURL: "https://ng-recipe-book-91fc7.firebaseio.com",
    projectId: "ng-recipe-book-91fc7",
    storageBucket: "ng-recipe-book-91fc7.appspot.com",
    messagingSenderId: "367696760244"
};
/* harmony default export */ __webpack_exports__["default"] = (firebase_config);


/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/shared/logging-interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/logging-interceptor.ts ***!
  \***********************************************/
/*! exports provided: LoggingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingInterceptor", function() { return LoggingInterceptor; });
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");

var LoggingInterceptor = /** @class */ (function () {
    function LoggingInterceptor(authService) {
        this.authService = authService;
    }
    LoggingInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).do(function (event) {
            // if (event.type === 0) {
            //     req.params.set('auth', this.authService.getToken())
            // }
            // console.log('LoggingInterceptor', event, req);
        });
    };
    return LoggingInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-storage.service */ "./src/app/shared/data-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]]
        };
    };
    SharedModule.forCore = function () {
        return {
            ngModule: SharedModule_1,
            providers: [_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]]
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownDirective"]
            ],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shopping-list/ngrx/shooping-list.reducer.ts":
/*!*************************************************************!*\
  !*** ./src/app/shopping-list/ngrx/shooping-list.reducer.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shoppingListReducer; });
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngrx/shopping-list.actions */ "./src/app/shopping-list/ngrx/shopping-list.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var initialState = {
    ingredients: [
        new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"]('Apples', 5),
        new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"]('Tomatos', 3)
    ],
    editedIngredient: {
        id: -1,
        ingredient: null
    }
};
function shoppingListReducer(state, action) {
    if (state === void 0) { state = initialState; }
    var editedIngredientOnClear = {
        id: -1,
        ingredient: null
    };
    switch (action.type) {
        case _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_INGREDIENT"]:
            return __assign({}, state, { ingredients: state.ingredients.concat([
                    action.payload
                ]) });
        case _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_INGREDIENTS"]:
            return __assign({}, state, { ingredients: state.ingredients.concat(action.payload) });
        case _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_INGREDIENT"]:
            var ingredientsUpdate = state.ingredients.slice();
            var idUpdate = action.payload.id;
            var ingredient = action.payload.ingredient;
            ingredientsUpdate[idUpdate] = ingredient;
            return __assign({}, state, { ingredients: ingredientsUpdate.slice(), editedIngredient: editedIngredientOnClear });
        case _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_INGREDIENT"]:
            var ingredientsDelete = state.ingredients.slice();
            var idDelete = action.payload.id;
            ingredientsDelete.splice(idDelete, 1);
            return __assign({}, state, { ingredients: ingredientsDelete.slice(), editedIngredient: editedIngredientOnClear });
        case _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["SET_EDITED_INGREDIENT"]:
            var idEditedIngredient = action.payload;
            var editedIngredientItem = state.ingredients[idEditedIngredient];
            var editedIngredient = {
                id: idEditedIngredient,
                ingredient: editedIngredientItem
            };
            return __assign({}, state, { editedIngredient: editedIngredient });
        case _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["CLEAR_EDITED_INGREDIENT"]:
            return __assign({}, state, { editedIngredient: editedIngredientOnClear });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/shopping-list/ngrx/shopping-list.actions.ts":
/*!*************************************************************!*\
  !*** ./src/app/shopping-list/ngrx/shopping-list.actions.ts ***!
  \*************************************************************/
/*! exports provided: ADD_INGREDIENT, ADD_INGREDIENTS, UPDATE_INGREDIENT, DELETE_INGREDIENT, SET_EDITED_INGREDIENT, CLEAR_EDITED_INGREDIENT, AddIngredient, AddIngredients, UpdateIngredient, DeleteIngredient, SetEditedIngredient, ClearEditedIngredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENT", function() { return ADD_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENTS", function() { return ADD_INGREDIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INGREDIENT", function() { return UPDATE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_INGREDIENT", function() { return DELETE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_EDITED_INGREDIENT", function() { return SET_EDITED_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_EDITED_INGREDIENT", function() { return CLEAR_EDITED_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIngredient", function() { return AddIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIngredients", function() { return AddIngredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIngredient", function() { return UpdateIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIngredient", function() { return DeleteIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetEditedIngredient", function() { return SetEditedIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearEditedIngredient", function() { return ClearEditedIngredient; });
var ADD_INGREDIENT = 'ADD_INGREDIENT';
var ADD_INGREDIENTS = 'ADD_INGREDIENTS';
var UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
var DELETE_INGREDIENT = 'DELETE_INGREDIENT';
var SET_EDITED_INGREDIENT = 'SET_EDITED_INGREDIENT';
var CLEAR_EDITED_INGREDIENT = 'CLEAR_EDITED_INGREDIENT';
var AddIngredient = /** @class */ (function () {
    function AddIngredient(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENT;
    }
    return AddIngredient;
}());

var AddIngredients = /** @class */ (function () {
    function AddIngredients(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENTS;
    }
    return AddIngredients;
}());

var UpdateIngredient = /** @class */ (function () {
    function UpdateIngredient(payload) {
        this.payload = payload;
        this.type = UPDATE_INGREDIENT;
    }
    return UpdateIngredient;
}());

var DeleteIngredient = /** @class */ (function () {
    function DeleteIngredient(payload) {
        this.payload = payload;
        this.type = DELETE_INGREDIENT;
    }
    return DeleteIngredient;
}());

var SetEditedIngredient = /** @class */ (function () {
    function SetEditedIngredient(payload) {
        this.payload = payload;
        this.type = SET_EDITED_INGREDIENT;
    }
    return SetEditedIngredient;
}());

var ClearEditedIngredient = /** @class */ (function () {
    function ClearEditedIngredient() {
        this.type = CLEAR_EDITED_INGREDIENT;
    }
    return ClearEditedIngredient;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <form (ngSubmit)=\"onAddEditItem(f)\" #f=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5 form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input \r\n            type=\"text\" \r\n            id=\"name\" \r\n            class=\"form-control\"\r\n            name=\"name\"\r\n            ngModel\r\n            required\r\n          >\r\n        </div>\r\n        <div class=\"col-sm-2 form-group\">\r\n            <label for=\"amount\">Amount</label>\r\n            <input \r\n              type=\"number\" \r\n              id=\"amount\" \r\n              class=\"form-control\"\r\n              name=\"amount\"\r\n              ngModel\r\n              required\r\n              pattern=\"^[1-9]+[0-9]*$\"\r\n            >\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <button\r\n            class=\"btn btn-success\"\r\n            type=\"submit\"\r\n            [disabled]=\"editedIngredient.id < 0 || !f.valid\"\r\n          >{{ editedIngredient.id >= 0 ? 'Update ('+(editedIngredient.id + 1)+')' : 'Add' }}</button>\r\n          <button\r\n            class=\"btn btn-danger\"\r\n            type=\"button\"\r\n            (click)=\"onDeleteClick($event)\"\r\n            *ngIf=\"editedIngredient.id >= 0\"\r\n          >Delete</button>\r\n          <button class=\"btn btn-secondary\" type=\"button\" (click)=\"onClearClick($event)\">Clear</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ngrx/shopping-list.actions */ "./src/app/shopping-list/ngrx/shopping-list.actions.ts");
/* harmony import */ var src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(shoppingListService, store) {
        var _this = this;
        this.shoppingListService = shoppingListService;
        this.store = store;
        this.editedIngredientFn = function (editedIngredient) {
            _this.editedIngredient = editedIngredient;
            if (_this.editedIngredient.id >= 0) {
                _this.form.setValue(_this.editedIngredient.ingredient);
            }
            else {
                _this.form.reset();
            }
        };
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        /**
         * We can subscribe it by using a statement `this.store.select('shoppingList')`
         * but since it is subscribed in the parent `ShoppingListComponent` component
         * we should not subscribe it here and should use the `ShoppingListService`
         * as it is the `ShoppingListComponent` component service for the app
         * and the service tracks changes of the component
         */
        this.editedIngredient = this.shoppingListService.getEditedIngredient();
        this.editedIngredientSubscription = this.shoppingListService.editedIngredientSubject.subscribe(this.editedIngredientFn);
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.editedIngredientSubscription ? this.editedIngredientSubscription.unsubscribe() : null;
        this.store.dispatch(new _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__["ClearEditedIngredient"]());
    };
    ShoppingEditComponent.prototype.onAddEditItem = function (form) {
        var value = form.value;
        var ingredient = new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_5__["Ingredient"](value.name, value.amount);
        this.editedIngredient.id >= 0
            ? this.store.dispatch(new _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateIngredient"]({ id: this.editedIngredient.id, ingredient: ingredient }))
            : this.store.dispatch(new _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__["AddIngredient"](ingredient));
        /**
         * Implicit clearing during `UpdateIngredient` action
         */
        // this.store.dispatch(new ClearEditedIngredient());
    };
    ShoppingEditComponent.prototype.onDeleteClick = function (event) {
        var id = this.editedIngredient.id;
        this.store.dispatch(new _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteIngredient"](id));
        /**
         * Implicit clearing during `DeleteIngredient` action
         */
        // this.store.dispatch(new ClearEditedIngredient());
    };
    ShoppingEditComponent.prototype.onClearClick = function (event) {
        this.store.dispatch(new _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__["ClearEditedIngredient"]());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ShoppingEditComponent.prototype, "form", void 0);
    ShoppingEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-edit',
            template: __webpack_require__(/*! ./shopping-edit.component.html */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__(/*! ./shopping-edit.component.css */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-10\">\r\n    <app-shopping-edit></app-shopping-edit>\r\n    <hr />\r\n    <ul class=\"list-group\">\r\n      <a \r\n        href=\"#\" \r\n        class=\"list-group-item\" \r\n        style=\"cursor: pointer;\"\r\n        *ngFor=\"let ingredient of (shoppingListState | async).ingredients; let i = index\"\r\n        (click)=\"onClick(i,$event)\"\r\n      >\r\n        {{ ingredient.name }} {{ ingredient.amount }}\r\n      </a>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngrx/shopping-list.actions */ "./src/app/shopping-list/ngrx/shopping-list.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(shoppingListService, store) {
        this.shoppingListService = shoppingListService;
        this.store = store;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shoppingListState = this.store.select('shoppingList');
        this.shoppingListStateSubscription = this.shoppingListState.subscribe(function (shoppingListState) {
            console.log('shoppingListState', shoppingListState);
            _this.shoppingListService.setIngredients(shoppingListState.ingredients);
            _this.shoppingListService.setEditedIngredient(shoppingListState.editedIngredient);
        });
    };
    ShoppingListComponent.prototype.onClick = function (id, event) {
        event.preventDefault();
        this.store.dispatch(new _ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_3__["SetEditedIngredient"](id));
    };
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.shoppingListStateSubscription ? this.shoppingListStateSubscription.unsubscribe() : null;
    };
    ShoppingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-list',
            template: __webpack_require__(/*! ./shopping-list.component.html */ "./src/app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/shopping-list/shopping-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.module.ts ***!
  \*******************************************************/
/*! exports provided: ShoppingListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListModule", function() { return ShoppingListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ShoppingListModule = /** @class */ (function () {
    function ShoppingListModule() {
    }
    ShoppingListModule_1 = ShoppingListModule;
    ShoppingListModule.forRoot = function () {
        return {
            ngModule: ShoppingListModule_1,
            providers: [_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"]]
        };
    };
    var ShoppingListModule_1;
    ShoppingListModule = ShoppingListModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _shopping_list_component__WEBPACK_IMPORTED_MODULE_1__["ShoppingListComponent"],
                _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingEditComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: []
        })
    ], ShoppingListModule);
    return ShoppingListModule;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");

var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingredients = [];
        this.editedIngredientSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ShoppingListService.prototype.setIngredients = function (ingredients) {
        this.ingredients = ingredients;
    };
    ShoppingListService.prototype.getIngredient = function (id) {
        return this.ingredients.slice()[id];
    };
    ShoppingListService.prototype.setEditedIngredient = function (editedIngredient) {
        this.editedIngredient = editedIngredient;
        this.editedIngredientSubject.next(this.editedIngredient);
    };
    ShoppingListService.prototype.getEditedIngredient = function () {
        return this.editedIngredient;
    };
    return ShoppingListService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Paweł Twardziak\Documents\Udemy\Angular7-course\prj-start\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map