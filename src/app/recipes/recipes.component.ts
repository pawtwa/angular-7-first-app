import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from './recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
// import { Recipe } from './recipe.model';
// import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {
  // selectedRecipe: Recipe;
  // selectedRecipeId: number;
  fetchDataSubscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    this.fetchDataSubscription = this.dataStorageService.fetchData().subscribe((recipes: Recipe[]) => {
      this.recipeService.setRecipes(recipes);
    }, console.log);
    // this.recipeService.recipeSelected.subscribe((id: number) => {
    //   this.selectedRecipeId = id;
    //   this.selectedRecipe = this.recipeService.getRecipeById(id);
    // });
  }

  ngOnDestroy() {
    this.fetchDataSubscription.unsubscribe();
  }
}
