import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: number;

  private paramsSubscription: Subscription;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipesService.getRecipeById(this.id);
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  addToShopingList(event: UIEvent) {
    event.preventDefault();
    this.recipesService.addIngredientsToShopingList(this.id);
  }

  editRecipe(event: UIEvent) {
    event.preventDefault();
    this.router.navigate(['edit'], {
      relativeTo: this.route
    });
  }

  deleteRecipe(event: UIEvent) {
    event.preventDefault();
    this.recipesService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
