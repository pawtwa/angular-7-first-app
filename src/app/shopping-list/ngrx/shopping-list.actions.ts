import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export const SET_EDITED_INGREDIENT = 'SET_EDITED_INGREDIENT';
export const CLEAR_EDITED_INGREDIENT = 'CLEAR_EDITED_INGREDIENT';

export class AddIngredient implements Action {
    readonly type: string = ADD_INGREDIENT;
    
    constructor(public payload: Ingredient) { }
}

export class AddIngredients implements Action {
    readonly type: string = ADD_INGREDIENTS;
    
    constructor(public payload: Ingredient[]) { }
}

export class UpdateIngredient implements Action {
    readonly type: string = UPDATE_INGREDIENT;
    
    constructor(public payload: {id: number, ingredient: Ingredient}) { }
}

export class DeleteIngredient implements Action {
    readonly type: string = DELETE_INGREDIENT;
    
    constructor(public payload: number) { }
}

export class SetEditedIngredient implements Action {
    readonly type: string = SET_EDITED_INGREDIENT;
    
    constructor(public payload: number) { }
}

export class ClearEditedIngredient implements Action {
    readonly type: string = CLEAR_EDITED_INGREDIENT;
}

export type ShoppingListActionsType = 
    AddIngredient 
    | AddIngredients 
    | UpdateIngredient 
    | DeleteIngredient
    | SetEditedIngredient
    | ClearEditedIngredient;