import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  editedRecipe: Recipe;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = !isNaN(this.id) && this.id >= 0;
        if (this.editMode) {
          this.editedRecipe = this.recipeService.getRecipeById(this.id);
        }
      }
    );
    this.initForm();
  }

  private initForm() {
    const ingredients = new FormArray([]);
    if (this.editedRecipe.ingredients) {
      for (let ingredient of this.editedRecipe.ingredients) {
        ingredients.push(new FormGroup({
          'name': new FormControl(ingredient['name']),
          'amount': new FormControl(ingredient['amount']),
        }));
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(this.editedRecipe.name),
      'imagePath': new FormControl(this.editedRecipe.imagePath),
      'description': new FormControl(this.editedRecipe.description),
      'ingredients': ingredients
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null),
        'amount': new FormControl(null)
      })
    );
  }
}
