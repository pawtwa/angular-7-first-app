import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { AppLoadModule } from './../app-load.module';
import { AuthInterceptor } from './../shared/auth-interceptor';
import { LoggingInterceptor } from './../shared/logging-interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule.forCore(),
    AppRoutingModule,
    AppLoadModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    HomeComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      deps: [ Store ],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      deps: [],
      multi: true
    }
  ]
})
export class CoreModule { }
