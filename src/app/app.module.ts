/**
 * Core parts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/**
 * Custom modules
 */
import { CoreModule } from './core/core.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

/**
 * Custom components
 */
import { AppComponent } from './app.component';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShoppingListModule.forRoot(),
    AuthModule.forRoot(),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
