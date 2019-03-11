import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, CanLoad, UrlSegment } from '@angular/router';
import { AuthService } from './auth.service';
import { timer, Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuth = this.authService.isAuthenticated();
    if (!isAuth) {
      timer(200).subscribe((_) => {
        this.router.navigate(['/unauthenticated']);
      });
    }
    console.log('canActivate', isAuth);
    return isAuth;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.authService.isAuthenticated();
    if (!isAuth) {
      timer(200).subscribe((_) => {
        this.router.navigate(['/unauthenticated']);
      });
    }
    console.log('canLoad', isAuth);
    return isAuth;
  }
}
