import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { UnauthenticatedComponent } from './unauthenticated/unauthenticated.component';

const authRoutes: Routes = [
  {
      path: 'signup',
      component: SignupComponent
  },
  {
      path: 'signin',
      component: SigninComponent
  },
  {
      path: 'unauthenticated',
      component: UnauthenticatedComponent
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AuthRoutingModule { }
