import shoppingListReducer, { ShoppingListStateInterface } from "./shopping-list/ngrx/shooping-list.reducer";
import { ActionReducerMap, combineReducers, compose } from "@ngrx/store";
import { AuthStateInterface, authReducer } from "./auth/ngrx/auth.reducers";

export interface AppStateInterface {
    shoppingList: ShoppingListStateInterface,
    auth: AuthStateInterface
}

export const appReducers: ActionReducerMap<AppStateInterface> = {
    shoppingList: shoppingListReducer,
    auth: authReducer
};

export const rootReducer = compose(combineReducers)(appReducers)
export function appReducer(state, action) {
  return rootReducer(state, action);
}