import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import firebase_config from '../shared/firebase-pconf';
import { Recipe } from '../recipes/recipe.model';
import { Store } from '@ngrx/store';
import { AuthStateInterface } from '../auth/ngrx/auth.reducers';
import { switchMap } from 'rxjs/operators';
import { AppStateInterface } from '../app.reducer';

@Injectable()
export class DataStorageService {

  constructor(
    private httpClient: HttpClient,
    private store: Store<AppStateInterface>
  ) {}

  storeData(recipes: Recipe[]): Observable<any> {
    return this.store.select('auth').pipe(
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
            .map((recipes) => {
              return recipes;
            })
            .catch((error: any) => {
              return Observable.throw(error);
            });
        } else {
          return Observable.throw('not auth');
        }
      })
    )
  }

  fetchData(): Observable<any> {
    return this.store.select('auth').pipe(
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
          })
            .map((recipes) => {
              return recipes;
            })
            .catch((error: any) => {
              return Observable.throw(error);
            });
        } else {
          return Observable.throw('not auth');
        }
      })
    );
  }

  private getUrlForPath(path: string): string {
    return firebase_config.databaseURL.replace(/\/$/, "") + '/' + path;
  }
}
