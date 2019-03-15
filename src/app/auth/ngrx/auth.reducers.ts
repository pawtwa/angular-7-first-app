import * as AuthActions from "./auth.actions";

export interface AuthStateInterface {
    token: string,
    authenticated: boolean
}

const initialState: AuthStateInterface = {
    token: '',
    authenticated: false
}

export function authReducer(state: AuthStateInterface = initialState, action: AuthActions.AuthActionsType) {
    switch (action.type) {
        case AuthActions.SET_TOKEN:
            const newToken: string = (<AuthActions.SetToken>action).payload;
            return {
                ...state,
                token: newToken
            }
        case AuthActions.CLEAR_TOKEN:
            return {
                ...state,
                token: ''
            }
        case AuthActions.SET_AS_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            }
        case AuthActions.SET_AS_UNAUTHENTICATED:
            return {
                ...state,
                authenticated: false
            }
        case AuthActions.SIGNUP:
            return {
                ...state,
                authenticated: true
            }
        case AuthActions.SIGNIN:
            return {
                ...state,
                authenticated: true
            }
        case AuthActions.LOGOUT:
            return {
                ...state,
                authenticated: false
            }
        default:
            return state;
    }
}