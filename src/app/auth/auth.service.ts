import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable()
export class AuthService {
  private token: string;

  constructor() { }

  signupUser(email: string, password: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken().then((token: string) => {
          this.token = token;
        });
      })
      .catch(error => console.log(error));
  }

  logoutUser(): Promise<void> {
    this.token = null;
    return firebase.auth().signOut();
  }

  getToken(): string | null {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
  }

  isAuthenticated(): boolean {
    const token = typeof this.token === 'string' && this.token.length > 0;    
    return token;
  }
}
