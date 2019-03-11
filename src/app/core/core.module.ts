import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AppLoadModule } from '../app-load.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    AppLoadModule,
    SharedModule.forCore()
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    HomeComponent
  ]
})
export class CoreModule { }
