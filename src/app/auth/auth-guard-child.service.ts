import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthStateInterface } from './ngrx/auth.reducers';
import { AppStateInterface } from '../app.reducer';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuardChildService implements CanActivateChild {
  constructor(
    private router: Router,
    private store: Store<AppStateInterface>
  ) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isAuth = this.store.select('appState').pipe(
      take(1),
      map((appState: AppStateInterface): AuthStateInterface => appState.auth)
    ).map((auth: AuthStateInterface) => {
      if (!auth.authenticated) {
        timer(100).subscribe((_) => {
          this.router.navigate(['/unauthenticated']);
        });
      }
      return auth.authenticated;
    });
    return isAuth;
  }
}
