/**
 * Core parts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * Custom modules
 */
import { RecipesModule } from './recipes/recipes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppLoadModule } from './app-load.module';
import { SharedModule } from './shared/shared.module';

/**
 * Custom components
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { UnauthenticatedComponent } from './auth/unauthenticated/unauthenticated.component';

/**
 * Custom services
 */
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthGuardChildService } from './auth/auth-guard-child.service';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

/**
 * Custom directives
 */


/**
 * Custom pipes
 */


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    UnauthenticatedComponent
  ],
  imports: [
    BrowserModule,
    /**
     * `FormsModule` is temporarily needed for `SignupComponent` & `SigninComponent`
     */
    FormsModule,
    HttpModule,
    /**
     * You need to position your `RecipesModule`  prior to the `AppRoutingModule`.
     * This is required to ensure that the Catch-all/ wildcard routes work correctly.
     */
    RecipesModule.forRoot(),
    ShoppingListModule.forRoot(),
    AppRoutingModule,
    AppLoadModule,
    SharedModule
  ],
  providers: [
    DataStorageService,
    AuthService,
    AuthGuardService,
    AuthGuardChildService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
