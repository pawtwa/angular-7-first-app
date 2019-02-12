import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecipesComponent
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
    ]
})
export class AppRoutingModule
{

}