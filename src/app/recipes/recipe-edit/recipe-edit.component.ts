import {Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe.model';
import {Subscription} from 'rxjs';

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
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = !isNaN(this.id) && this.id >= 0;
        if (this.editMode) {
          this.editedRecipe = this.recipesService.getRecipeById(this.id);
        }
      }
    );
    this.initForm();
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
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
    // const recipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients'],
    // );
    if (this.editMode) {
      this.recipesService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipesService.addRecipe(this.recipeForm.value);
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
