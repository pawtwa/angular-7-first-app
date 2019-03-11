import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { UnauthenticatedComponent } from "./auth/unauthenticated/unauthenticated.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent
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
    providers: []
})
export class AppRoutingModule
{

}