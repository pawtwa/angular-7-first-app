import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { AuthService } from './auth/auth.service';
import firebase_config from './shared/firebase-pconf';
import { Observable } from 'rxjs';

@Injectable()
export class AppInitService {

  constructor(private authService: AuthService) {}

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
          resolve();
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
