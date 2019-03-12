import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipesService]
})
export class RecipesComponent implements OnInit, OnDestroy {
  // selectedRecipe: Recipe;
  // selectedRecipeId: number;
  // fetchDataSubscription: Subscription;

  constructor(
    // private recipesService: RecipesService,
    // private dataStorageService: DataStorageService,
    // private authService: AuthService
  ) { }

  ngOnInit() {
    /**
     * `AppLoadModule` fetches the data during app initialization
     */
    // if (this.authService.isAuthenticated()) {
    //   this.fetchDataSubscription = this.dataStorageService.fetchData().subscribe((recipes: Recipe[]) => {
    //     this.recipesService.setRecipes(recipes);
    //   }, console.log);
    // }

    // this.recipesService.recipeSelected.subscribe((id: number) => {
    //   this.selectedRecipeId = id;
    //   this.selectedRecipe = this.recipesService.getRecipeById(id);
    // });
  }

  ngOnDestroy() {
    // this.fetchDataSubscription ? this.fetchDataSubscription.unsubscribe() : null;
  }
}
