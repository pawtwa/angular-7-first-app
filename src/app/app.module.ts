/**
 * Core parts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment';

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
 * Custom NgRx reducers & effects
 */
import { appReducer } from './app.reducer';
import { AuthEffects } from './auth/ngrx/auth.effects';

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
      appState: appReducer
    }),
    EffectsModule.forRoot([
      AuthEffects
    ]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
