import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { ShoppingListStateInterface } from '../shopping-list/ngrx/shooping-list.reducer';
import { DeleteIngredient, UpdateIngredient } from '../shopping-list/ngrx/shopping-list.actions';

@Injectable()
export class RecipesService {
  recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

  // recipesChanged: EventEmitter<Recipe[]> = new EventEmitter();
  // recipeSelected: EventEmitter<number> = new EventEmitter<number>();
  private currentRecipeId: number = -1;

  constructor(
    // private shoppingListService: ShoppingListService,
    // private store: Store<AppStateInterface>
  ) { }

  private recipes: Recipe[] = [
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

  getRecipes(): Recipe[] {
    return this.recipes ? this.recipes.slice() : [];
  }

  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.getRecipes());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.getRecipes());
    // this.recipesChanged.emit(this.getRecipes());
    // if (this.currentRecipeId === id) {
    //     this.currentRecipeId = -1;
    //     this.recipeSelected.emit(this.currentRecipeId);
    // }
  }

  setRecipeCurrentId(id: number) {
      this.currentRecipeId = id;
      // this.recipeSelected.emit(this.currentRecipeId);
  }

  // getRecipeCurrentId() {
  //     return this.currentRecipeId;
  // }

  /**
   * Unused function
   * @param id
   */
  // addIngredientsToShopingList(id: number) {
  //   const ingredients = this.getRecipes()[id].ingredients ? this.getRecipes()[id].ingredients.slice() : [];
  //   this.store.dispatch(new AddIngredients(ingredients));
  //   // this.shoppingListService.addIngredients(ingredients);
    
  // }
}
