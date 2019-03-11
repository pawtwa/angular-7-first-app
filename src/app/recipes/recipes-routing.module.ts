import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { AuthGuardChildService } from '../auth/auth-guard-child.service';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardChildService],
    children: [
        {
            path: '',
            component: RecipeStartComponent
        },
        {
            path: 'new',
            component: RecipeEditComponent,
            //canActivate: [AuthGuardService]
        },
        {
            path: ':id',
            component: RecipeDetailComponent
        },
        {
            path: ':id/edit',
            component: RecipeEditComponent,
            //canActivate: [AuthGuardService]
        }
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class RecipesRoutingModule { }
