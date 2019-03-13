import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {FormGroup, NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import { Store } from '@ngrx/store';
import { InitialShoppingListStateInterface } from '../ngrx/shooping-list.reducer';
import { AddIngredient, UpdateIngredient } from '../ngrx/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  // @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>;
  //
  // nameInputError: boolean;
  // amountInputError: boolean;

  @ViewChild('f') form: NgForm;

  ingredientListSelectedItemSubscription: Subscription;
  ingredientListSelectedId: number | null;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<InitialShoppingListStateInterface>
  ) {
    // this.nameInputError = false;
    // this.amountInputError = false;
  }

  ngOnInit(): void {
    this.resetIngredientListSelected();
    this.ingredientListSelectedItemSubscription = this.shoppingListService.ingredientListSelectedItem.subscribe(id => {
      if (id === null) {
        this.resetIngredientListSelected();
      } else {
        this.setIngredientListSelected(id, this.shoppingListService.getIngredient(id));
      }
    });
  }

  setIngredientListSelected(id: number, ingredient: Ingredient) {
    this.ingredientListSelectedId = id;
    this.form.setValue(ingredient);
  }

  resetIngredientListSelected() {
    this.ingredientListSelectedId = null;
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.ingredientListSelectedItemSubscription 
      ? this.ingredientListSelectedItemSubscription.unsubscribe() 
      : null;
  }

  onDeleteClick(event: UIEvent): void {
    this.shoppingListService.deleteSelectedIngredient(this.ingredientListSelectedId);
  }

  onClearClick(event: UIEvent): void {
    this.resetIngredientListSelected();
  }

  onAddEditItem(form: FormGroup): void {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.ingredientListSelectedId !== null) {
      // this.shoppingListService.editSelectedIngredient(ingredient, this.ingredientListSelectedId);
      this.store.dispatch(new UpdateIngredient({ingredient: ingredient, id: this.ingredientListSelectedId}));
    } else {
      // this.shoppingListService.addIngredient(ingredient);
      this.store.dispatch(new AddIngredient(ingredient));
    }
    this.shoppingListService.ingredientListItemSelected(null);
  }

  // onAddClick(event: UIEvent) {
  //   this.nameInputError = false;
  //   this.amountInputError = false;
  //   if (this.nameInput.nativeElement.value.trim().length && this.amountInput.nativeElement.value.length) {
  //     const newIngredient: Ingredient = new Ingredient(
  //       String(this.nameInput.nativeElement.value),
  //       Number(this.amountInput.nativeElement.value)
  //     );
  //     this.shoppingListService.addIngredient(newIngredient);
  //     this.nameInput.nativeElement.value = null;
  //     this.amountInput.nativeElement.value = null;
  //   } else {
  //     this.nameInputError = !this.nameInput.nativeElement.value.trim().length;
  //     this.amountInputError = !this.amountInput.nativeElement.value.length;
  //   }
  // }
}
