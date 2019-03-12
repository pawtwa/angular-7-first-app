import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AppLoadModule } from '../app-load.module';
import { RecipesService } from '../recipes/recipes.service';

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
  ],
  providers: [
    RecipesService
  ]
})
export class CoreModule { }
