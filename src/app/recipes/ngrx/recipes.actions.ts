import { Action } from "@ngrx/store";
import { Recipe } from "../recipe.model";

export const ADD_RECIPE = 'ADD_RECIPE';
export const ADD_RECIPES = 'ADD_RECIPES';
export const SET_RECIPES = 'SET_RECIPES';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

export const SET_EDITED_RECIPE = 'SET_EDITED_RECIPE';
export const SET_DETAILED_RECIPE = 'SET_DETAILED_RECIPE';
export const CLEAR_EDITED_RECIPE = 'CLEAR_EDITED_RECIPE';
export const CLEAR_DETAILED_RECIPE = 'CLEAR_DETAILED_RECIPE';

export class AddRecipe implements Action {
    readonly type: string = ADD_RECIPE;

    constructor(public payload: Recipe) {}
}

export class AddRecipes implements Action {
    readonly type: string = ADD_RECIPES;

    constructor(public payload: Recipe[]) {}
}

export class SetRecipes implements Action {
    readonly type: string = SET_RECIPES;

    constructor(public payload: Recipe[]) {}
}

export class FetchRecipes implements Action {
    readonly type: string = FETCH_RECIPES;

    constructor(public payload: Recipe[]) {}
}

export class UpdateRecipe implements Action {
    readonly type: string = UPDATE_RECIPE;

    constructor(public payload: {id: number, recipe: Recipe}) {}
}

export class DeleteRecipe implements Action {
    readonly type: string = DELETE_RECIPE;

    constructor(public payload: number) {}
}

export class SetEditedRecipe implements Action {
    readonly type: string = SET_EDITED_RECIPE;

    constructor(public payload: number) {}
}

export class ClearEditedRecipe implements Action {
    readonly type: string = CLEAR_EDITED_RECIPE;
}

export class SetDetailedRecipe implements Action {
    readonly type: string = SET_DETAILED_RECIPE;

    constructor(public payload: number) {}
}

export class ClearDetiledRecipe implements Action {
    readonly type: string = CLEAR_DETAILED_RECIPE;
}

export type RecipesActionsType = 
    AddRecipe
    | AddRecipes
    | SetRecipes
    | FetchRecipes
    | SetEditedRecipe
    | SetDetailedRecipe
    | ClearEditedRecipe
    | ClearDetiledRecipe;