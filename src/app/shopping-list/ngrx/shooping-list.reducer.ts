import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from '../ngrx/shopping-list.actions';

export interface EditedIngredientInterface {
    id: number,
    ingredient: Ingredient
}

export interface ShoppingListStateInterface {
    ingredients: Ingredient[],
    editedIngredient: EditedIngredientInterface
}

const initialState: ShoppingListStateInterface = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 3)
    ],
    editedIngredient: {
        id: -1,
        ingredient: null
    }
}

const editedIngredientOnClear: EditedIngredientInterface = {
    id: -1,
    ingredient: null
}

export function shoppingListReducer(state: ShoppingListStateInterface = initialState, action: ShoppingListActions.ShoppingListActionsType): ShoppingListStateInterface {
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
                ],
                editedIngredient: editedIngredientOnClear
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            const ingredientsDelete = [...state.ingredients];
            const idDelete: number = (<ShoppingListActions.UpdateIngredient>action).payload.id;
            ingredientsDelete.splice(idDelete, 1);
            return {
                ...state,
                ingredients: [
                    ...ingredientsDelete
                ],
                editedIngredient: editedIngredientOnClear
            };
        case ShoppingListActions.SET_EDITED_INGREDIENT:
            const idEditedIngredient: number = (<ShoppingListActions.SetEditedIngredient>action).payload;
            const editedIngredientItem = state.ingredients[idEditedIngredient];
            const editedIngredient: EditedIngredientInterface = {
                id: idEditedIngredient,
                ingredient: editedIngredientItem
            }
            return {
                ...state,
                editedIngredient: editedIngredient
            }
        case ShoppingListActions.CLEAR_EDITED_INGREDIENT:
            return {
                ...state,
                editedIngredient: editedIngredientOnClear
            }
        default:
            return state;
    }
}