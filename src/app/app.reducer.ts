import shoppingListReducer, { ShoppingListStateInterface } from "./shopping-list/ngrx/shooping-list.reducer";
import { combineReducers, compose } from "@ngrx/store";
import { ShoppingListActionsType } from "./shopping-list/ngrx/shopping-list.actions";

export interface AppStateInterface {
    shoppingList: ShoppingListStateInterface
}

export const reducers = {
    shoppingList: shoppingListReducer
};

export const rootReducer = compose(combineReducers)(reducers)
export function reducer(state, action) {
  return rootReducer(state, action);
}