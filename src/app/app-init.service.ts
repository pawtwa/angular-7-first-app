import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { AuthService } from './auth/auth.service';
import firebase_config from './shared/firebase-pconf';

@Injectable()
export class AppInitService {

  constructor(private authService: AuthService) {}

  appInits() {
    console.log('init service 2');
    return this.initializeApp(); 
  }

  initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
      const auth = this.initializeFirebaseApp().auth();
      auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
      auth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          currentUser.getIdToken().then((token) => {
            this.authService.setToken(token);
            resolve();
          });
        } else {
          resolve();
        } 
      });
    });
  }

  private initializeFirebaseApp(): firebase.app.App {
    return firebase.initializeApp(firebase_config);
  }
}
