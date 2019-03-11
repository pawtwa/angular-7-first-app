/**
 * Core parts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/**
 * Custom modules
 */
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppLoadModule } from './app-load.module';
import { SharedModule } from './shared/shared.module';

/**
 * Custom components
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

/**
 * Custom services
 */


/**
 * Custom directives
 */


/**
 * Custom pipes
 */


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    /**
     * You need to position your `RecipesModule`  prior to the `AppRoutingModule`.
     * This is required to ensure that the Catch-all/ wildcard routes work correctly.
     */
    RecipesModule.forRoot(),
    ShoppingListModule.forRoot(),
    AuthModule.forRoot(),
    AppRoutingModule,
    AppLoadModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
