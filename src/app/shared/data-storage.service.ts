import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/RX';

import firebase_config from '../shared/firebase-pconf';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(
    private http: Http,
    private authService: AuthService
  ) {}

  storeData(recipes: Recipe[]): Observable<any> {
    if (this.authService.isAuthenticated()) {
      let authToken = this.authService.getToken();
      const headers = new Headers({
        'Content-Type': 'application/json'
      });
      return this.http.put(this.getUrlForPath('recipes.json?auth=' + authToken), recipes, { headers: headers })
        .map((response: Response) => {
          const recipes: Recipe[] = response.json();
          return recipes;
        })
        .catch((error: Response) => {
          return Observable.throw(error.text());
        });
    } else {
      return Observable.throw('not auth');
    }
  }

  fetchData(): Observable<any> {
    if (this.authService.isAuthenticated()) {
      let authToken = this.authService.getToken();
      const headers = new Headers({
        'Accept': 'application/json'
      });
      return this.http.get(this.getUrlForPath('recipes.json?auth=' + authToken), { headers: headers })
        .map((response: Response) => {
          const recipes: Recipe[] = response.json();
          return recipes;
        })
        .catch((error: Response) => {
          return Observable.throw(error.text());
        });
    } else {
      return Observable.throw('not auth');
    }
  }

  private getUrlForPath(path: string): string {
    return firebase_config.databaseURL.replace(/\/$/, "") + '/' + path;
  }
}
