import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from '../ngrx/shopping-list.actions';

export interface InitialShoppingListStateInterface {
    ingredients: Ingredient[]
}

const initialState: InitialShoppingListStateInterface = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 3)
    ]
}

export default function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActionsType) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT: 
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    (<ShoppingListActions.AddIngredient>action).payload
                ]
            };
        case ShoppingListActions.ADD_INGREDIENTS: 
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    ...(<ShoppingListActions.AddIngredients>action).payload
                ]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredientsUpdate = [...state.ingredients];
            const idUpdate: number = (<ShoppingListActions.UpdateIngredient>action).payload.id;
            const ingredient: Ingredient = (<ShoppingListActions.UpdateIngredient>action).payload.ingredient;
            ingredientsUpdate[idUpdate] = ingredient;
            return {
                ...state,
                ingredients: [
                    ...ingredientsUpdate
                ]
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            const ingredientsDelete = [...state.ingredients];
            const idDelete: number = (<ShoppingListActions.UpdateIngredient>action).payload.id;
            ingredientsDelete.splice(idDelete, 1);
            return {
                ...state,
                ingredients: [
                    ...ingredientsDelete
                ]
            };
        default:
            return state;
    }
}