import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/app.reducer';
import { RecipesStateInterface } from '../ngrx/recipes.reducer';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  recipesState: Observable<RecipesStateInterface>

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.recipesState = this.store.select('recipes');
  }

  newRecipe(event: UIEvent) {
    event.preventDefault();
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
