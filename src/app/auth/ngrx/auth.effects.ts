import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { TRY_SIGNUP, TrySignup, SIGNUP, SET_TOKEN } from './auth.actions';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth';

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
                firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password)
            )
        }),
        switchMap(() => {
            return from(
                firebase.auth().currentUser.getIdToken()
            );
        }),
        mergeMap((token: string) => {
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

    constructor(private actions$: Actions) {

    }
}