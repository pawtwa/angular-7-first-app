import { Action } from "@ngrx/store";

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const SIGNUP = 'SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNIN = 'SIGNIN';
export const TRY_LOGOUT = 'TRY_LOGOUT';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const CLEAR_TOKEN = 'CLEAR_TOKEN';
export const SET_AS_AUTHENTICATED = 'SET_AS_AUTHENTICATED';
export const SET_AS_UNAUTHENTICATED = 'SET_AS_UNAUTHENTICATED';

export class TrySignup implements Action {
    readonly type: string = TRY_SIGNUP;

    constructor(public payload: { username: string, password: string }) { }
}

export class TrySignin implements Action {
    readonly type: string = TRY_SIGNIN;

    constructor(public payload: { username: string, password: string }) { }
}

export class Signup implements Action {
    readonly type: string = SIGNUP;
}

export class Signin implements Action {
    readonly type: string = SIGNIN;
}

export class TryLogout implements Action {
    readonly type: string = TRY_LOGOUT;
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
    TrySignup
    | Signup
    | TrySignin
    | Signin
    | TryLogout
    | Logout
    | SetToken 
    | ClearToken
    | SetAsAuthenticated
    | SetAsUnauthenticated;