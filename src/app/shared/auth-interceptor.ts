import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AuthStateInterface } from "../auth/ngrx/auth.reducers";
import { switchMap } from 'rxjs/operators';
import { AppStateInterface } from "../app.reducer";

export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private store: Store<AppStateInterface>
    ) { }

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return this.store.select('auth')
            .pipe(
                switchMap((auth: AuthStateInterface) => {
                    const copiedReq = req.clone({
                        params: req.params.set('auth', auth.token)
                    });
                    return next.handle(copiedReq);
                })
            );
    }
}