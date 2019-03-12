import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";
import 'rxjs/add/operator/do';

export class LoggingInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).do((event: HttpEvent<any>) => {
            // if (event.type === 0) {
            //     req.params.set('auth', this.authService.getToken())
            // }
            // console.log('LoggingInterceptor', event, req);
        });
    }
}