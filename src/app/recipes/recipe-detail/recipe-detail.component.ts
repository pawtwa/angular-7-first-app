import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Recipe } from '../recipe.model';
import { AddIngredients } from 'src/app/shopping-list/ngrx/shopping-list.actions';
import { AppStateInterface } from 'src/app/app.reducer';
import { RecipesStateInterface } from '../ngrx/recipes.reducer';
import { SetDetailedRecipe, ClearDetiledRecipe, DeleteRecipe } from '../ngrx/recipes.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: number;

  private paramsSubscription: Subscription;
  private selectRecipesStateSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.selectRecipesStateSubscription = this.store.select('recipes').subscribe((recipesState: RecipesStateInterface) => {
      this.recipe = recipesState.detailedRecipe.recipe;
    });
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.store.dispatch(new SetDetailedRecipe(this.id));
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription ? this.paramsSubscription.unsubscribe() : null;
    this.selectRecipesStateSubscription ? this.selectRecipesStateSubscription.unsubscribe() : null;
    this.store.dispatch(new ClearDetiledRecipe());
  }

  addToShopingList(event: MouseEvent) {
    event.preventDefault();
    this.store.dispatch(new AddIngredients(this.recipe ? this.recipe.ingredients : []));
  }

  editRecipe(event: MouseEvent) {
    event.preventDefault();
    this.router.navigate(['edit'], {
      relativeTo: this.route
    });
  }

  deleteRecipe(event: MouseEvent) {
    event.preventDefault();
    this.store.dispatch(new DeleteRecipe(this.id));
    this.store.dispatch(new ClearDetiledRecipe());
    this.router.navigate(['/recipes']);
  }
}
