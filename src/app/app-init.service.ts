import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AuthService } from './auth/auth.service';
import firebase_config from './shared/firebase-pconf';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { Recipe } from './recipes/recipe.model';

@Injectable()
export class AppInitService {
  private fetchDataSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private recipeService: RecipeService,
    private dataStorageService: DataStorageService
  ) {}

  appInits() {
    console.log('init service 2');
    return this.initializeApp(); 
  }

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
          this.authService.setToken(token);
          this.fetchDataSubscription = this.dataStorageService.fetchData().subscribe((recipes: Recipe[]) => {
            this.recipeService.setRecipes(recipes);
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
