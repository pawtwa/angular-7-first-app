import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppInitService } from './app-init.service';

export function appInit(appInitService: AppInitService) {
  return () => appInitService.initializeApp();
}

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    AppInitService,
    { provide: APP_INITIALIZER, useFactory: appInit, deps: [AppInitService], multi: true },
  ]
})
export class AppLoadModule { }
