import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    constructor(private shoppingListService: ShoppingListService) {
    }

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            '/assets/schnitzel.png',
            [
                new Ingredient('Meat', 2),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Big Fat Burger',
            'What else you need to say?',
            '/assets/burger.png',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 2)
            ]
        )
    ];

    recipesChanged: EventEmitter<Recipe[]> = new EventEmitter();
    // recipeSelected: EventEmitter<number> = new EventEmitter<number>();

    // private currentRecipeId: number = -1;

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    getRecipeById(id: number): Recipe {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

    deleteRecipe(id: number) {
        this.recipes.splice(id, 1);
        this.recipesChanged.emit(this.getRecipes());
        // if (this.currentRecipeId === id) {
        //     this.currentRecipeId = -1;
        //     this.recipeSelected.emit(this.currentRecipeId);
        // }
    }

    // setRecipeCurrentId(id: number) {
    //     this.currentRecipeId = id;
    //     this.recipeSelected.emit(this.currentRecipeId);
    // }

    // getRecipeCurrentId() {
    //     return this.currentRecipeId;
    // }

    addIngredientsToShopingList(id: number) {
        this.shoppingListService.addIngredients(this.getRecipes()[id].ingredients.slice())
    }
}
