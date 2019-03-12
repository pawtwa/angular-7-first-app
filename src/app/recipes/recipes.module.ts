import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent
  ],
  imports: [
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ],
  exports: [

  ],
  providers: [
    /**
     * `RecipesService` should not be provided this way because of `RecipesModule` lazy loading
     * Other modules use the service
     */
    // RecipesService
  ]
})
export class RecipesModule {
  /**
   * `RecipesService` should not be provided this way because of `RecipesModule` lazy loading
   * Other modules use the service
   */
  // static forRoot() {
  //   return {
  //     ngModule: RecipesModule,
  //     providers: [ RecipesService ]
  //   }
  // }
}
