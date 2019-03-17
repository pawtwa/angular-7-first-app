import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppStateInterface } from 'src/app/app.reducer';
import { SetEditedRecipe, ClearEditedRecipe, UpdateRecipe, AddRecipe } from '../ngrx/recipes.actions';
import { RecipesStateInterface } from '../ngrx/recipes.reducer';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode: boolean;
  editedRecipe: Recipe;
  recipeForm: FormGroup;
  private paramsSubscription: Subscription;
  private selectRecipesStateSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.selectRecipesStateSubscription = this.store.select('recipes').subscribe((recipesState: RecipesStateInterface) => {
      this.editedRecipe = recipesState.editedRecipe.recipe;
    });
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = !isNaN(this.id) && this.id >= 0;
        if (this.editMode) {
          this.store.dispatch(new SetEditedRecipe(this.id));
        } else {
          this.store.dispatch(new ClearEditedRecipe());
        }
      }
    );
    this.initForm();
  }

  ngOnDestroy(): void {
    this.paramsSubscription ? this.paramsSubscription.unsubscribe() : null;
    this.selectRecipesStateSubscription ? this.selectRecipesStateSubscription.unsubscribe() : null;
    this.store.dispatch(new ClearEditedRecipe());
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

  onCancel(event: Event): void {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit(event: Event) {
    if (this.editMode) {
      this.store.dispatch(new UpdateRecipe({id: this.id, recipe: this.recipeForm.value}));
    } else {
      this.store.dispatch(new AddRecipe(this.recipeForm.value));
    }
    this.onCancel(event);
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

  onDeleteIngredient(i: number, event: MouseEvent): void {
    event.preventDefault();
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }

  getFormIngredients() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
