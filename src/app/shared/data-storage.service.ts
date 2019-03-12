import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import firebase_config from '../shared/firebase-pconf';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  storeData(recipes: Recipe[]): Observable<any> {
    if (this.authService.isAuthenticated()) {
      // let authToken = this.authService.getToken();
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
          // params: (new HttpParams()).set('auth', authToken)
        }
      );
      // return this.httpClient.put<Recipe[]>(this.getUrlForPath('recipes.json'), recipes, { 
      //   headers: headers,
      //   observe: 'body',
      //   params: (new HttpParams()).set('auth', authToken)
      // })
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
  }

  fetchData(): Observable<any> {
    if (this.authService.isAuthenticated()) {
      // let authToken = this.authService.getToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json'
      });
      return this.httpClient.get<Recipe[]>(this.getUrlForPath('recipes.json'), { 
        headers: headers,
        observe: 'body',
        responseType: 'json',
        reportProgress: true
        // params: (new HttpParams()).set('auth', authToken)
      })
        .map((recipes) => {
          return recipes;
        })
        .catch((error: any) => {
          return Observable.throw(error.body);
        });
    } else {
      return Observable.throw('not auth');
    }
  }

  private getUrlForPath(path: string): string {
    return firebase_config.databaseURL.replace(/\/$/, "") + '/' + path;
  }
}
