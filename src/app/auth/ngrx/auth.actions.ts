import { Action } from "@ngrx/store";

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const CLEAR_TOKEN = 'CLEAR_TOKEN';
export const SET_AS_AUTHENTICATED = 'SET_AS_AUTHENTICATED';
export const SET_AS_UNAUTHENTICATED = 'SET_AS_UNAUTHENTICATED';

export class Signup implements Action {
    readonly type: string = SIGNUP;
}

export class Signin implements Action {
    readonly type: string = SIGNIN;
}

export class Logout implements Action {
    readonly type: string = LOGOUT;
}

export class SetToken implements Action {
    readonly type: string = SET_TOKEN;
    
    constructor(public payload: string) { }
}

export class ClearToken implements Action {
    readonly type: string = CLEAR_TOKEN;
}

export class SetAsAuthenticated implements Action {
    readonly type: string = SET_AS_AUTHENTICATED;
}

export class SetAsUnauthenticated implements Action {
    readonly type: string = SET_AS_UNAUTHENTICATED;
}

export type AuthActionsType = 
    SetToken 
    | ClearToken
    | SetAsAuthenticated
    | SetAsUnauthenticated;