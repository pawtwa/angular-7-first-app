import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../app.reducer';
import { Signup, Signin, SetToken, ClearToken, Logout } from './ngrx/auth.actions';

@Injectable()
export class AuthService {

  constructor(
    private store: Store<AppStateInterface>
  ) { }

  signupUser(email: string, password: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.store.dispatch(new Signup());
        firebase.auth().currentUser.getIdToken().then((token: string) => {
          this.store.dispatch(new SetToken(token));
        });
      })
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.store.dispatch(new Signin());
        firebase.auth().currentUser.getIdToken().then((token: string) => {
          this.store.dispatch(new SetToken(token));
        });
      })
      .catch(error => console.log(error));
  }

  logoutUser(): Promise<void> {
    return firebase.auth().signOut()
      .then((_) => {
        this.store.dispatch(new Logout());
        this.store.dispatch(new ClearToken());
      })
      .catch(console.error);
  }
}
