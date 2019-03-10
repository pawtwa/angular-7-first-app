import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuardService } from "./auth/auth-guard.service";
import { UnauthenticatedComponent } from "./auth/unauthenticated/unauthenticated.component";
import { AuthGuardChildService } from "./auth/auth-guard-child.service";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
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
    {
        path: 'shopping-list',
        component: ShoppingListComponent
        // children: [
        //   {
        //     path: ':id/:name',
        //     component: UserComponent
        //   }
        // ]
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'unauthenticated',
        component: UnauthenticatedComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            //useHash: true
        })
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuardService,
        AuthGuardChildService
    ]
})
export class AppRoutingModule
{

}