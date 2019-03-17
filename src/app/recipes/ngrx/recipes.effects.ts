import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, catchError, map, withLatestFrom, tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { HttpHeaders, HttpClient, HttpRequest } from "@angular/common/http";

import { TRY_FETCH_RECIPES, TryFetchRecipes, SET_RECIPES, TRY_STORE_RECIPES } from "./recipes.actions";
import { AppStateInterface } from "src/app/app.reducer";
import { Recipe } from "../recipe.model";
import firebase_config from '../../shared/firebase-pconf';
import { throwError } from "rxjs";
import { Router } from "@angular/router";
import { RecipesStateInterface } from "./recipes.reducer";

@Injectable()
export class RecipesEffects {

    @Effect({
        /**
         * if set to `false` the last operator must return `null`
         */
        dispatch: true
    })
    fetchRecipes = this.actions$.pipe(
        ofType(TRY_FETCH_RECIPES),
        switchMap((action: TryFetchRecipes) => {
            const headers = new HttpHeaders({
                'Accept': 'application/json'
            });
            return this.httpClient.get<Recipe[]>(this.getUrlForPath('recipes.json'), {
                headers: headers,
                observe: 'body',
                responseType: 'json',
                reportProgress: true
            });
        }),
        map((recipes: Recipe[]) => {
            this.router.navigate(['/recipes']);
            return {
                type: SET_RECIPES,
                payload: recipes ? recipes : []
            }
        })
    );

    @Effect({
        /**
         * if set to `false` the last operator must return `null`
         */
        dispatch: false
    })
    storeRecipes = this.actions$.pipe(
        ofType(TRY_STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([action, state]) => {
            const headers = new HttpHeaders({
                'Content-Type': 'application/json'
            });
            const req = new HttpRequest(
                'PUT',
                this.getUrlForPath('recipes.json'),
                state.recipes,
                {
                    headers: headers,
                    responseType: 'json',
                    reportProgress: true,
                }
            );
            return this.httpClient.request<Recipe[]>(req)
        })
    );

    constructor(
        private router: Router,
        private actions$: Actions,
        private httpClient: HttpClient,
        private store: Store<AppStateInterface>
    ) { }

    private getUrlForPath(path: string): string {
        return firebase_config.databaseURL.replace(/\/$/, "") + '/' + path + '';
    }
}