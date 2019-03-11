import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuardService } from "./auth/auth-guard.service";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
        // redirectTo: '/recipes',
        // pathMatch: 'full'
    },
    {
        path: 'recipes',
        loadChildren: './recipes/recipes.module#RecipesModule',
        canLoad: [AuthGuardService]
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent
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
    providers: []
})
export class AppRoutingModule {}