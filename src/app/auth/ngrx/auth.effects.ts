import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { from, of, throwError } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';

import { TRY_SIGNUP, TrySignup, SIGNUP, SET_TOKEN, TrySignin, SIGNIN, TRY_SIGNIN, TryLogout, LOGOUT, CLEAR_TOKEN, TRY_LOGOUT } from './auth.actions';

@Injectable()
export class AuthEffects {
    @Effect({
        /**
         * if set to `false` the last operator must return `null`
         */
        dispatch: true
    })
    authSignup = this.actions$.pipe(
        ofType(TRY_SIGNUP),
        map((action: TrySignup) => {
            return action.payload;
        }),
        switchMap((authData: { username: string, password: string }) => {
            return from(
                firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password).catch(console.error)
            )
        }),
        switchMap(() => {
            return from(
                firebase.auth().currentUser ? firebase.auth().currentUser.getIdToken() : of('')
            );
        }),
        mergeMap((token: string) => {
            if (typeof token !== 'string' || !token.length) {
                return [];
            }
            this.router.navigate(['/recipes']);
            return [
                {
                    type: SIGNUP
                },
                {
                    type: SET_TOKEN,
                    payload: token
                }
            ];
        })
    );

    @Effect({
        /**
         * if set to `false` the last operator must return `null`
         */
        dispatch: true
    })
    authSignin = this.actions$.pipe(
        ofType(TRY_SIGNIN),
        map((action: TrySignin) => {
            return action.payload;
        }),
        switchMap((authData: { username: string, password: string }) => {
            return from(
                firebase.auth().signInWithEmailAndPassword(authData.username, authData.password).catch(console.error)
            )
        }),
        switchMap(() => {
            return from(
                firebase.auth().currentUser ? firebase.auth().currentUser.getIdToken() : of('')
            );
        }),
        mergeMap((token: string) => {
            if (typeof token !== 'string' || !token.length) {
                return [];
            }
            this.router.navigate(['/recipes']);
            return [
                {
                    type: SIGNIN
                },
                {
                    type: SET_TOKEN,
                    payload: token
                }
            ];
        })
    );

    @Effect({
        /**
         * if set to `false` the last operator must return `null`
         */
        dispatch: true
    })
    authLogout = this.actions$.pipe(
        ofType(TRY_LOGOUT),
        switchMap(() => {
            return from(
                firebase.auth().signOut().catch(console.error)
            )
        }),
        switchMap(() => {
            return from(
                firebase.auth().currentUser ? firebase.auth().currentUser.getIdToken() : of('')
            );
        }),
        mergeMap((token: string | null) => {
            if (typeof token === 'string' && token.length) {
                return [];
            }
            this.router.navigate(['/']);
            return [
                {
                    type: LOGOUT
                },
                {
                    type: CLEAR_TOKEN
                }
            ];
        })
    );

    constructor(
        private router: Router,
        private actions$: Actions
    ) {

    }
}