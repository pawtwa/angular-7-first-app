import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { EditedIngredientInterface } from './ngrx/shooping-list.reducer';

export class ShoppingListService {

  private ingredients: Ingredient[] = [];
  private editedIngredient: EditedIngredientInterface;

  editedIngredientSubject: Subject<EditedIngredientInterface> = new Subject();

  setIngredients(ingredients: Ingredient[]): void {
    this.ingredients = ingredients;
  }

  getIngredient(id: number): Ingredient {
    return this.ingredients.slice()[id];
  }

  setEditedIngredient(editedIngredient: EditedIngredientInterface): void {
    this.editedIngredient = editedIngredient;
    this.editedIngredientSubject.next(this.editedIngredient);
  }

  getEditedIngredient(): EditedIngredientInterface {
    return this.editedIngredient;
  }
}
