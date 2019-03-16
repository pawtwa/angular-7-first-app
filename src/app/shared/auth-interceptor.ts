import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AuthStateInterface } from "../auth/ngrx/auth.reducers";
import { switchMap, take, map } from 'rxjs/operators';
import { AppStateInterface } from "../app.reducer";

export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private store: Store<AppStateInterface>
    ) { }

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return this.store.select('appState')
            .pipe(
                take(1),
                map((appState: AppStateInterface): AuthStateInterface => appState.auth),
                switchMap((auth: AuthStateInterface) => {
                    const copiedReq = req.clone({
                        params: req.params.set('auth', auth.token)
                    });
                    return next.handle(copiedReq);
                })
            );
    }
}