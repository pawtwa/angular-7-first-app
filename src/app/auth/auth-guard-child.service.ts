import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardChildService implements CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isAuth = this.authService.isAuthenticated();
    if (!isAuth) {
      timer(200).subscribe((_) => {
        this.router.navigate(['/unauthenticated']);
      });
    }
    return isAuth;
  }
}
