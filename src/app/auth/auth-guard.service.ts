import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, CanLoad, UrlSegment } from '@angular/router';
import { timer, Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Store } from '@ngrx/store';
import { take, map } from 'rxjs/operators';

import { AuthStateInterface } from './ngrx/auth.reducers';
import { AppStateInterface } from '../app.reducer';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private store: Store<AppStateInterface>
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuth = this.store.select('auth')
      .pipe(
        take(1),
        map((auth: AuthStateInterface) => {
          if (!auth.authenticated) {
            timer(100).subscribe((_) => {
              this.router.navigate(['/unauthenticated']);
            });
          }
          return auth.authenticated;
        })
      );
    return isAuth;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.store.select('auth')
      .pipe(
        take(1),
        map((auth: AuthStateInterface) => {
          if (!auth.authenticated) {
            timer(100).subscribe((_) => {
              this.router.navigate(['/unauthenticated']);
            });
          }
          return auth.authenticated
        })
      );
    return isAuth;
  }
}
