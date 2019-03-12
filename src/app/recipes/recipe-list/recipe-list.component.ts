import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipesChangedSubscription: Subscription;

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    this.recipesChangedSubscription = this.recipesService.recipesChanged.subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy(): void {
    this.recipesChangedSubscription.unsubscribe();
  }

  newRecipe(event: UIEvent) {
    event.preventDefault();
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
