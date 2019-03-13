import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged: Subject<Ingredient[]> = new Subject();
  ingredientListSelectedItem: Subject<number | null> = new Subject();

  private ingredients: Ingredient[] = [
    // new Ingredient('Apples', 5),
    // new Ingredient('Tomatos', 3)
  ];

  ingredientListItemSelected(id: number | null): void {
    this.ingredientListSelectedItem.next(id);
  }

  /**
   * Externally unused function
   */
  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(id: number): Ingredient {
    return this.ingredients.slice()[id];
  }

  deleteSelectedIngredient(id: number | null): void {
    if (id !== null) {
      this.ingredients.splice(id, 1);
      this.ingredientsChanged.next(this.getIngredients());
      this.ingredientListSelectedItem.next(null);
    }
  }

  /**
   * Unused function
   * @param ingredients
   */
  // addIngredients(ingredients: Ingredient[]): void {
  //   this.ingredients.push(...ingredients);
  //   this.ingredientsChanged.next(this.getIngredients());
  // }

  /**
   * Unused function
   * @param ingredient
   */
  // addIngredient(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  //   this.ingredientsChanged.next(this.getIngredients());
  // }

  editSelectedIngredient(ingredient: Ingredient, id: number) {
    if (this.ingredients[id]) {
      this.ingredients[id] = ingredient;
      this.ingredientsChanged.next(this.getIngredients());
    }
  }
}
