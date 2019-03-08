import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/RX';

import firebase_config from '../shared/firebase-pconf';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  private base_url: string;

  constructor(private http: Http) {
    this.base_url = firebase_config.base_url;
  }

  storeData(recipes: Recipe[]): Observable<any> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(this.getUrlForPath('recipes.json'), recipes, {headers: headers})
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        return recipes;
      })
      .catch((error: Response) => {
        return Observable.throw(error.text());
      });
  }

  fetchData(): Observable<any> {
    const headers = new Headers({
      'Accept': 'application/json'
    });
    return this.http.get(this.getUrlForPath('recipes.json'), {headers: headers})
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        return recipes;
      })
      .catch((error: Response) => {
        return Observable.throw(error.text());
      });
  }

  private getUrlForPath(path: string): string {
    return this.base_url + path;
  }
}
