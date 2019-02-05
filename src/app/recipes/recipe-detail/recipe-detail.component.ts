import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  @Input('recipeItem') recipe: Recipe;
  @Input('recipeItemId') id: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  ngOnChanges(data) {
  }

  addToShopingList(event) {
    this.recipeService.addIngridientsToShopingList(this.id);
  }

  editRecipe(event) {
    
  }

  deleteRecipe(event) {
    this.recipeService.deleteRecipe(this.id);
  }
}
