/**
 * Core parts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/**
 * Custom modules
 */
import { CoreModule } from './core/core.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppLoadModule } from './app-load.module';
import { SharedModule } from './shared/shared.module';

/**
 * Custom components
 */
import { AppComponent } from './app.component';

/**
 * Custom services
 */
import { RecipeService } from './recipes/recipe.service';

/**
 * Custom directives
 */


/**
 * Custom pipes
 */


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ShoppingListModule.forRoot(),
    AuthModule.forRoot(),
    CoreModule
  ],
  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
