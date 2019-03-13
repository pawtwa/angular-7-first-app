/**
 * Core parts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

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


 /**
 * Custom NgRx reducers
 */
import shoppingListReducer from './shopping-list/ngrx/shooping-list.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShoppingListModule.forRoot(),
    AuthModule.forRoot(),
    CoreModule,
    StoreModule.forRoot({
      shoppingList: shoppingListReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
