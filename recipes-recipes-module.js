(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipes-module"],{

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.recipe-detail-img {\r\n    /* max-width: 500px;\r\n    max-height: 500px; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZGV0YWlsL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO3dCQUNvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcucmVjaXBlLWRldGFpbC1pbWcge1xyXG4gICAgLyogbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4OyAqL1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"recipe\">\r\n  <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <img src=\"{{ recipe.imagePath }}\" alt=\"{{ recipe.name }}\" class=\"img-responsive recipe-detail-img\">\r\n      </div>\r\n  </div>\r\n  <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <h1>{{ recipe.name }}</h1>\r\n      </div>\r\n  </div>\r\n  <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <div appDropdown class=\"btn-group\">\r\n          <button \r\n            type=\"button\" \r\n            class=\"btn btn-primary dropdown-toggle\"\r\n          >Manage Recipe <span class=\"caret\"></span></button>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"#\" (click)=\"addToShopingList($event)\">Add Ingredients to Shopping List</a></li>\r\n            <li><a href=\"#\" (click)=\"editRecipe($event)\">Edit Recipe</a></li>\r\n            <li><a href=\"#\" (click)=\"deleteRecipe($event)\">Delete Recipe</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <p><em>{{ recipe.description }}</em></p>\r\n      </div>\r\n    </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <ul class=\"list-group\">\r\n        <li\r\n          class=\"list-group-item\"\r\n          *ngFor=\"let ingredient of recipe.ingredients; let i = index\"\r\n        >{{ingredient.name}}: {{ingredient.amount}}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipes.service */ "./src/app/recipes/recipes.service.ts");
/* harmony import */ var src_app_shopping_list_ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shopping-list/ngrx/shopping-list.actions */ "./src/app/shopping-list/ngrx/shopping-list.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(recipesService, route, router, store) {
        this.recipesService = recipesService;
        this.route = route;
        this.router = router;
        this.store = store;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.recipe = _this.recipesService.getRecipeById(_this.id);
        });
    };
    RecipeDetailComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    RecipeDetailComponent.prototype.addToShopingList = function (event) {
        event.preventDefault();
        this.store.dispatch(new src_app_shopping_list_ngrx_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__["AddIngredients"](this.recipe.ingredients));
        // this.recipesService.addIngredientsToShopingList(this.id);
    };
    RecipeDetailComponent.prototype.editRecipe = function (event) {
        event.preventDefault();
        this.router.navigate(['edit'], {
            relativeTo: this.route
        });
    };
    RecipeDetailComponent.prototype.deleteRecipe = function (event) {
        event.preventDefault();
        this.recipesService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    };
    RecipeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! ./recipe-detail.component.html */ "./src/app/recipes/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/recipes/recipe-detail/recipe-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_recipes_service__WEBPACK_IMPORTED_MODULE_3__["RecipesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched,\r\ntextarea.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWVkaXQvcmVjaXBlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcclxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit($event)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-success pull-right\"\r\n            [disabled]=\"recipeForm.invalid\"\r\n          >Save</button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-danger pull-right\"\r\n            (click)=\"onCancel($event)\"\r\n          >Cancel</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input\r\n              type=\"text\"\r\n              id=\"name\"\r\n              class=\"form-control\"\r\n              formControlName=\"name\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"imagePath\">Image URL</label>\r\n            <input\r\n              type=\"text\"\r\n              id=\"imagePath\"\r\n              class=\"form-control\"\r\n              formControlName=\"imagePath\"\r\n              #imagePath\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <img [src]=\"imagePath.value\" class=\"img-responsive\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"description\">Descritpion</label>\r\n            <textarea\r\n              id=\"description\"\r\n              class=\"form-control\"\r\n              rows=\"6\"\r\n              formControlName=\"description\"\r\n            ></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"col-xs-12\"\r\n          formArrayName=\"ingredients\"\r\n        >\r\n          <div\r\n            class=\"row\"\r\n            *ngFor=\"let ingirdientControl of getFormIngredients(); let i = index\"\r\n            [formGroupName]=\"i\"\r\n            style=\"margin-top: 10px;\"\r\n          >\r\n            <div class=\"col-xs-8\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"name\"\r\n              />\r\n            </div>\r\n            <div class=\"col-xs-2\">\r\n              <input\r\n                type=\"number\"\r\n                class=\"form-control\"\r\n                formControlName=\"amount\"\r\n              />\r\n            </div>\r\n            <div class=\"col-xs-2\">\r\n              <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"onDeleteIngredient(i, $event)\">x</button>\r\n            </div>\r\n          </div>\r\n          <hr />\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-2\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-success\"\r\n                (click)=\"onAddIngredient()\"\r\n              >Add ingredient</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipes.service */ "./src/app/recipes/recipes.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeEditComponent = /** @class */ (function () {
    function RecipeEditComponent(route, recipesService, router, store) {
        this.route = route;
        this.recipesService = recipesService;
        this.router = router;
        this.store = store;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = !isNaN(_this.id) && _this.id >= 0;
            if (_this.editMode) {
                _this.editedRecipe = _this.recipesService.getRecipeById(_this.id);
            }
        });
        this.initForm();
    };
    RecipeEditComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    RecipeEditComponent.prototype.initForm = function () {
        var ingredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        if (this.editedRecipe && this.editedRecipe.ingredients) {
            for (var _i = 0, _a = this.editedRecipe.ingredients; _i < _a.length; _i++) {
                var ingredient = _a[_i];
                ingredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](ingredient['name'], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](ingredient['amount'], [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)
                    ]),
                }));
            }
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editedRecipe ? this.editedRecipe.name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editedRecipe ? this.editedRecipe.imagePath : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editedRecipe ? this.editedRecipe.description : null),
            'ingredients': ingredients
        });
    };
    RecipeEditComponent.prototype.onCancel = function (event) {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RecipeEditComponent.prototype.onSubmit = function (event) {
        // const recipe = new Recipe(
        //   this.recipeForm.value['name'],
        //   this.recipeForm.value['description'],
        //   this.recipeForm.value['imagePath'],
        //   this.recipeForm.value['ingredients'],
        // );
        if (this.editMode) {
            this.recipesService.updateRecipe(this.id, this.recipeForm.value);
        }
        else {
            this.recipesService.addRecipe(this.recipeForm.value);
        }
        this.onCancel(event);
    };
    RecipeEditComponent.prototype.onAddIngredient = function () {
        this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
        }));
    };
    RecipeEditComponent.prototype.onDeleteIngredient = function (i, event) {
        event.preventDefault();
        this.recipeForm.get('ingredients').removeAt(i);
    };
    RecipeEditComponent.prototype.getFormIngredients = function () {
        return this.recipeForm.get('ingredients').controls;
    };
    RecipeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-edit',
            template: __webpack_require__(/*! ./recipe-edit.component.html */ "./src/app/recipes/recipe-edit/recipe-edit.component.html"),
            styles: [__webpack_require__(/*! ./recipe-edit.component.css */ "./src/app/recipes/recipe-edit/recipe-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _recipes_service__WEBPACK_IMPORTED_MODULE_3__["RecipesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a \r\n    href=\"#\" \r\n    class=\"list-group-item clearfix\"\r\n    (click)=\"onSelected($event)\"\r\n    [routerLink]=\"['/recipes', id]\"\r\n    routerLinkActive=\"active\"\r\n>\r\n    <div class=\"pull-left\">\r\n        <h4 class=\"list-group-item-heading\">{{ recipe.name }}</h4>\r\n        <p class=\"list-group-item-text\">{{ recipe.description }}</p>\r\n    </div>\r\n    <span class=\"pull-right\">\r\n        <img \r\n            [src]=\"recipe.imagePath\" \r\n            alt=\"{{ recipe.name }}\" \r\n            class=\"img-responsive\" \r\n            style=\"max-height: 50px;\"\r\n        >\r\n    </span>\r\n</a>"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../recipe.model */ "./src/app/recipes/recipe.model.ts");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../recipes.service */ "./src/app/recipes/recipes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent(recipesService) {
        this.recipesService = recipesService;
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    RecipeItemComponent.prototype.onSelected = function (event) {
        event.preventDefault();
        this.recipesService.setRecipeCurrentId(this.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('recipeItem'),
        __metadata("design:type", _recipe_model__WEBPACK_IMPORTED_MODULE_1__["Recipe"])
    ], RecipeItemComponent.prototype, "recipe", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('recipeId'),
        __metadata("design:type", Number)
    ], RecipeItemComponent.prototype, "id", void 0);
    RecipeItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-item',
            template: __webpack_require__(/*! ./recipe-item.component.html */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__(/*! ./recipe-item.component.css */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css")]
        }),
        __metadata("design:paramtypes", [_recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"]])
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <a \r\n            href=\"#\"\r\n            class=\"btn btn-success\"\r\n            (click)=\"newRecipe($event)\"\r\n        >New Recipe</a>\r\n    </div>\r\n</div>\r\n<hr />\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <app-recipe-item \r\n            *ngFor=\"let recipe of recipes; let i = index\"\r\n            [recipeItem]=\"recipe\"\r\n            [recipeId]=\"i\"\r\n            ></app-recipe-item>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipes.service */ "./src/app/recipes/recipes.service.ts");
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



var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(recipesService, router, route) {
        this.recipesService = recipesService;
        this.router = router;
        this.route = route;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipes = this.recipesService.getRecipes();
        this.recipesChangedSubscription = this.recipesService.recipesChanged.subscribe(function (recipes) {
            _this.recipes = recipes;
        });
    };
    RecipeListComponent.prototype.ngOnDestroy = function () {
        this.recipesChangedSubscription.unsubscribe();
    };
    RecipeListComponent.prototype.newRecipe = function (event) {
        event.preventDefault();
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    RecipeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-list',
            template: __webpack_require__(/*! ./recipe-list.component.html */ "./src/app/recipes/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__(/*! ./recipe-list.component.css */ "./src/app/recipes/recipe-list/recipe-list.component.css")]
        }),
        __metadata("design:paramtypes", [_recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLXN0YXJ0L3JlY2lwZS1zdGFydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.html":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"alert alert-info\">Please select a Recipe!</h3>\r\n"

/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.ts ***!
  \****************************************************************/
/*! exports provided: RecipeStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function() { return RecipeStartComponent; });
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

var RecipeStartComponent = /** @class */ (function () {
    function RecipeStartComponent() {
    }
    RecipeStartComponent.prototype.ngOnInit = function () {
    };
    RecipeStartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-start',
            template: __webpack_require__(/*! ./recipe-start.component.html */ "./src/app/recipes/recipe-start/recipe-start.component.html"),
            styles: [__webpack_require__(/*! ./recipe-start.component.css */ "./src/app/recipes/recipe-start/recipe-start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipeStartComponent);
    return RecipeStartComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.model.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipe.model.ts ***!
  \*****************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(name, description, imagePath, ingredients) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/recipes/recipes-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/recipes/recipes-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RecipesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesRoutingModule", function() { return RecipesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _auth_auth_guard_child_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-guard-child.service */ "./src/app/auth/auth-guard-child.service.ts");
/* harmony import */ var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var recipesRoutes = [
    {
        path: '',
        component: _recipes_component__WEBPACK_IMPORTED_MODULE_2__["RecipesComponent"],
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        canActivateChild: [_auth_auth_guard_child_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardChildService"]],
        children: [
            {
                path: '',
                component: _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__["RecipeStartComponent"]
            },
            {
                path: 'new',
                component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_6__["RecipeEditComponent"],
            },
            {
                path: ':id',
                component: _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__["RecipeDetailComponent"]
            },
            {
                path: ':id/edit',
                component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_6__["RecipeEditComponent"],
            }
        ]
    },
];
var RecipesRoutingModule = /** @class */ (function () {
    function RecipesRoutingModule() {
    }
    RecipesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(recipesRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], RecipesRoutingModule);
    return RecipesRoutingModule;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/*!***********************************************!*\
  !*** ./src/app/recipes/recipes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipes/recipes.component.html":
/*!************************************************!*\
  !*** ./src/app/recipes/recipes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <app-recipe-list></app-recipe-list>\r\n  </div>\r\n  <div class=\"col-md-7\">\r\n      <router-outlet></router-outlet>\r\n      <!-- <app-recipe-detail \r\n        *ngIf=\"selectedRecipe; else infoText\" \r\n        [recipeItem]=\"selectedRecipe\"\r\n        [recipeId]=\"selectedRecipeId\"\r\n      ></app-recipe-detail>\r\n      <ng-template #infoText>\r\n        <p class=\"alert alert-info\">Please select a Recipe!</p>\r\n      </ng-template> -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
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

var RecipesComponent = /** @class */ (function () {
    // selectedRecipe: Recipe;
    // selectedRecipeId: number;
    // fetchDataSubscription: Subscription;
    function RecipesComponent(
    // private recipesService: RecipesService,
    // private dataStorageService: DataStorageService,
    // private authService: AuthService
    ) {
    }
    RecipesComponent.prototype.ngOnInit = function () {
        /**
         * `AppLoadModule` fetches the data during app initialization
         */
        // if (this.authService.isAuthenticated()) {
        //   this.fetchDataSubscription = this.dataStorageService.fetchData().subscribe((recipes: Recipe[]) => {
        //     this.recipesService.setRecipes(recipes);
        //   }, console.log);
        // }
        // this.recipesService.recipeSelected.subscribe((id: number) => {
        //   this.selectedRecipeId = id;
        //   this.selectedRecipe = this.recipesService.getRecipeById(id);
        // });
    };
    RecipesComponent.prototype.ngOnDestroy = function () {
        // this.fetchDataSubscription ? this.fetchDataSubscription.unsubscribe() : null;
    };
    RecipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! ./recipes.component.html */ "./src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipes/recipes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.module.ts ***!
  \*******************************************/
/*! exports provided: RecipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesModule", function() { return RecipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ "./src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe-list/recipe-item/recipe-item.component */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes-routing.module */ "./src/app/recipes/recipes-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var RecipesModule = /** @class */ (function () {
    function RecipesModule() {
    }
    RecipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _recipes_component__WEBPACK_IMPORTED_MODULE_2__["RecipesComponent"],
                _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_3__["RecipeStartComponent"],
                _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_4__["RecipeListComponent"],
                _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailComponent"],
                _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_6__["RecipeEditComponent"],
                _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_7__["RecipeItemComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _recipes_routing_module__WEBPACK_IMPORTED_MODULE_8__["RecipesRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            exports: [],
            providers: [
            /**
             * `RecipesService` should not be provided this way because of `RecipesModule` lazy loading
             * Other modules use the service
             */
            // RecipesService
            ]
        })
    ], RecipesModule);
    return RecipesModule;
}());



/***/ })

}]);
//# sourceMappingURL=recipes-recipes-module.js.map