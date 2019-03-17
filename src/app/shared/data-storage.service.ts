import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import firebase_config from '../shared/firebase-pconf';
import { Recipe } from '../recipes/recipe.model';
import { Store } from '@ngrx/store';
import { AuthStateInterface } from '../auth/ngrx/auth.reducers';
import { switchMap, take, map, catchError } from 'rxjs/operators';
import { AppStateInterface } from '../app.reducer';

@Injectable()
export class DataStorageService {

  constructor(
    private httpClient: HttpClient,
    private store: Store<AuthStateInterface>
  ) {}

  storeData(recipes: Recipe[]): Observable<any> {
    return this.store.select('auth').pipe(
      take(1),
      //map((appState: AppStateInterface): AuthStateInterface => appState.auth),
      switchMap((auth: AuthStateInterface) => {
        if (auth.authenticated) {
          const headers = new HttpHeaders({
            'Content-Type': 'application/json'
          });
          const req = new HttpRequest(
            'PUT', 
            this.getUrlForPath('recipes.json'),
            recipes,
            { 
              headers: headers,
              responseType: 'json',
              reportProgress: true,
            }
          );
          return this.httpClient.request<Recipe[]>(req)
            .pipe(
              catchError((error, caugth) => {
                return throwError(error);
              })
              // map((recipes) => {
              //   return recipes;
              // })
            );
        } else {
          return Observable.throw('not auth #1');
        }
      })
    )
  }

  fetchData(): Observable<any> {
    return this.store.select('auth').pipe(
      take(1),
      //map((appState: AppStateInterface): AuthStateInterface => appState.auth),
      switchMap((auth: AuthStateInterface) => {
        if (auth.authenticated) {
          const headers = new HttpHeaders({
            'Accept': 'application/json'
          });
          return this.httpClient.get<Recipe[]>(this.getUrlForPath('recipes.json'), { 
            headers: headers,
            observe: 'body',
            responseType: 'json',
            reportProgress: true
          }).pipe(
            catchError((error, caugth) => {
              return throwError(error);
            })
            // map((recipes) => {
            //   return recipes;
            // })
          );
        } else {
          return Observable.throw('not auth #2');
        }
      })
    );
  }

  private getUrlForPath(path: string): string {
    return firebase_config.databaseURL.replace(/\/$/, "") + '/' + path;
  }
}
