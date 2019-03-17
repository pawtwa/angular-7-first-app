import * as RecipesActions from "./recipes.actions";
import { Recipe } from "../recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";

export interface RecipesStateInterface {
    recipes: Recipe[],
    editedRecipe: EditedRecipeInterface,
    detailedRecipe: DetailedRecipeInterface
}

export interface EditedRecipeInterface {
    id: number,
    recipe: Recipe
}

export interface DetailedRecipeInterface extends EditedRecipeInterface { }

const editedRecipeOnClear: EditedRecipeInterface = {
    id: -1,
    recipe: null
}

const detailedRecipeOnClear = editedRecipeOnClear;

const initialState: RecipesStateInterface = {
    recipes: [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger',
            'What else you need to say?',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )
    ],
    editedRecipe: editedRecipeOnClear,
    detailedRecipe: detailedRecipeOnClear
}

export function recipesReducer(state: RecipesStateInterface = initialState, action: RecipesActions.RecipesActionsType) {
    switch (action.type) {
        case RecipesActions.ADD_RECIPE: 
            return {
                ...state,
                recipes: [
                    ...state.recipes, 
                    (<RecipesActions.AddRecipe>action).payload
                ]
            }
        case RecipesActions.ADD_RECIPES: 
            return {
                ...state,
                recipes: [
                    ...state.recipes, 
                    ...(<Recipe[]>(<RecipesActions.AddRecipes>action).payload)
                ]
            }
        case RecipesActions.SET_RECIPES: 
            return {
                ...state,
                recipes: [
                    ...(<Recipe[]>(<RecipesActions.AddRecipes>action).payload)
                ]
            }
        case RecipesActions.FETCH_RECIPES: 
            return {
                ...state,
                recipes: [
                    ...initialState.recipes,
                    ...(<Recipe[]>(<RecipesActions.AddRecipes>action).payload)
                ]
            }

        case RecipesActions.UPDATE_RECIPE: 
            const recipesUpdate = [...state.recipes];
            const idUpdate: number = (<RecipesActions.UpdateRecipe>action).payload.id;
            const recipe: Recipe = (<RecipesActions.UpdateRecipe>action).payload.recipe;
            recipesUpdate[idUpdate] = recipe;
            return {
                ...state,
                recipes: [
                    ...recipesUpdate
                ],
                editedRecipe: editedRecipeOnClear
            };
        case RecipesActions.DELETE_RECIPE:
            const recipesDelete = [...state.recipes];
            const idDelete: number = (<RecipesActions.DeleteRecipe>action).payload;
            recipesDelete.splice(idDelete, 1);
            return {
                ...state,
                recipes: [
                    ...recipesDelete
                ],
                editedRecipe: editedRecipeOnClear
            };
        case RecipesActions.SET_EDITED_RECIPE:
            const idEditedRecipe: number = (<RecipesActions.SetEditedRecipe>action).payload;
            const editedRecipeItem = state.recipes[idEditedRecipe];
            const editedRecipe: EditedRecipeInterface = {
                id: idEditedRecipe,
                recipe: editedRecipeItem
            }
            return {
                ...state,
                editedRecipe: editedRecipe
            }
        case RecipesActions.CLEAR_EDITED_RECIPE:
            return {
                ...state,
                editedRecipe: editedRecipeOnClear
            }
        case RecipesActions.SET_DETAILED_RECIPE:
            const idDetiledRecipe: number = (<RecipesActions.SetDetailedRecipe>action).payload;
            const detiledRecipeItem = state.recipes[idDetiledRecipe];
            const detiledRecipe: EditedRecipeInterface = {
                id: idDetiledRecipe,
                recipe: detiledRecipeItem
            }
            return {
                ...state,
                detailedRecipe: detiledRecipe
            }
        case RecipesActions.CLEAR_DETAILED_RECIPE:
            return {
                ...state,
                detailedRecipe: detailedRecipeOnClear
            }
        default:
            return state;
    }
}