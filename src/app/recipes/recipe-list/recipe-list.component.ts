import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg')
  ];

  @Output() selectedListRecipeItem = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeListItemClick(recipe: Recipe) {
    this.selectedListRecipeItem.emit(recipe);
  }
}
