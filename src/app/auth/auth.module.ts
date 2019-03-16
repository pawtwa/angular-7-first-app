import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UnauthenticatedComponent } from './unauthenticated/unauthenticated.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuardService } from './auth-guard.service';
import { AuthGuardChildService } from './auth-guard-child.service';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    UnauthenticatedComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ],
  exports: [],
  providers: []
})
export class AuthModule {
  static forRoot() {
    return {
      ngModule: AuthModule,
      providers: [
        AuthGuardService,
        AuthGuardChildService
      ]
    }
  }
}
