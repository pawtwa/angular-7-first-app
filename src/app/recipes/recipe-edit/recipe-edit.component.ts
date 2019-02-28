import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

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
    if (this.editedRecipe && (<Recipe>this.editedRecipe).ingredients) {
      for (const ingredient of (<Recipe>this.editedRecipe).ingredients) {
        ingredients.push(new FormGroup({
          'name': new FormControl(ingredient['name'], [Validators.required]),
          'amount': new FormControl(ingredient['amount'],
            [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ]
          ),
        }));
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(
        this.editedRecipe ? this.editedRecipe.name : null,
        [Validators.required]
      ),
      'imagePath': new FormControl(
        this.editedRecipe ? this.editedRecipe.imagePath : null,
        [Validators.required]
      ),
      'description': new FormControl(
        this.editedRecipe ? this.editedRecipe.description : null
      ),
      'ingredients': ingredients
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(
          null,
          [Validators.required]
        ),
        'amount': new FormControl(
          null,
          [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
        )
      })
    );
  }

  getFormIngredients() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
