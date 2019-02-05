import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService
{
    constructor(private shoppingListService: ShoppingListService) {
    }

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe 1', 
            'This is simply a test 1', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg',
            [
                new Ingridient('Meat', 2),
                new Ingridient('French Fries', 20)
            ]
        ),
        new Recipe(
            'A Test Recipe 2', 
            'This is simply a test 2', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg',
            [
                new Ingridient('Buns', 2),
                new Ingridient('Meat', 2)
            ]
        )
    ]

    recipesChanged: EventEmitter<Recipe[]> = new EventEmitter();
    recipeSelected: EventEmitter<number> = new EventEmitter<number>();

    private currentRecipeId: number = -1;

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
        if (this.currentRecipeId === id) {
            this.currentRecipeId = -1;
            this.recipeSelected.emit(this.currentRecipeId);
        }
    }

    setRecipeCurrentId(id: number) {
        this.currentRecipeId = id;
        this.recipeSelected.emit(this.currentRecipeId);
    }

    getRecipeCurrentId() {
        return this.currentRecipeId;
    }

    addIngridientsToShopingList(id: number) {
        this.shoppingListService.addIngridients(this.getRecipes()[id].ingridients.slice())
    }
}