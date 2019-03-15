import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Store } from '@ngrx/store';

import firebase_config from './shared/firebase-pconf';
import { RecipesService } from './recipes/recipes.service';
import { DataStorageService } from './shared/data-storage.service';
import { Recipe } from './recipes/recipe.model';
import { SetToken, Signin } from './auth/ngrx/auth.actions';
import { AppStateInterface } from './app.reducer';

@Injectable()
export class AppInitService {
  private fetchDataSubscription: Subscription;

  constructor(
    private recipesService: RecipesService,
    private dataStorageService: DataStorageService,
    private store: Store<AppStateInterface>
  ) {}

  initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.initializeFirebaseApp(resolve, reject);
    });
  }

  private initializeFirebaseApp(resolve?: (value?: any | PromiseLike<any>) => void, reject?: (reason?: any) => void): firebase.app.App {
    const app: firebase.app.App = firebase.initializeApp(firebase_config);
    firebase.auth(app).setPersistence(firebase.auth.Auth.Persistence.SESSION);
    firebase.auth(app).onAuthStateChanged((currentUser) => {
      if (currentUser) {
        currentUser.getIdToken().then((token) => {
          this.store.dispatch(new Signin());
          this.store.dispatch(new SetToken(token));
          this.fetchDataSubscription = this.dataStorageService.fetchData().subscribe((recipes: Recipe[]) => {
            this.recipesService.setRecipes(recipes);
            this.fetchDataSubscription ? this.fetchDataSubscription.unsubscribe() : null;
            resolve();
          }, (error) => {
            console.log(error);
            this.fetchDataSubscription ? this.fetchDataSubscription.unsubscribe() : null;
            resolve();
          });
        });
      } else {
        resolve();
      } 
    }, (error) => {
      reject(error);
    });
    return app;
  }
}
