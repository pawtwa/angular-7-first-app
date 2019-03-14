import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {FormGroup, NgForm} from '@angular/forms';
import { Store } from '@ngrx/store';

import { ShoppingListService } from '../shopping-list.service';
import { EditedIngredientInterface } from '../ngrx/shooping-list.reducer';
import { AppStateInterface } from 'src/app/app.reducer';
import { ClearEditedIngredient, DeleteIngredient, UpdateIngredient, AddIngredient } from '../ngrx/shopping-list.actions';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;

  editedIngredient: EditedIngredientInterface;
  private editedIngredientSubscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    /**
     * We can subscribe it by using a statement `this.store.select('shoppingList')` 
     * but since it is subscribed in the parent `ShoppingListComponent` component 
     * we should not subscribe it here and should use the `ShoppingListService` 
     * as it is the `ShoppingListComponent` component service for the app
     * and the service tracks changes of the component
     */
    this.editedIngredient = this.shoppingListService.getEditedIngredient();
    this.editedIngredientSubscription = this.shoppingListService.editedIngredientSubject.subscribe(this.editedIngredientFn);
  }

  ngOnDestroy(): void {
    this.editedIngredientSubscription ? this.editedIngredientSubscription.unsubscribe() : null;
    this.store.dispatch(new ClearEditedIngredient());
  }

  editedIngredientFn = (editedIngredient: EditedIngredientInterface) => {
    this.editedIngredient = editedIngredient;
    if (this.editedIngredient.id >= 0) {
      this.form.setValue(this.editedIngredient.ingredient);
    } else {
      this.form.reset();
    }
  }

  onAddEditItem(form: FormGroup): void {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    this.editedIngredient.id >= 0 
      ? this.store.dispatch(new UpdateIngredient({id: this.editedIngredient.id, ingredient: ingredient}))
      : this.store.dispatch(new AddIngredient(ingredient));
    /**
     * Implicit clearing during `UpdateIngredient` action
     */
    // this.store.dispatch(new ClearEditedIngredient());
  }

  onDeleteClick(event: MouseEvent): void {
    const id = this.editedIngredient.id;
    this.store.dispatch(new DeleteIngredient(id));
    /**
     * Implicit clearing during `DeleteIngredient` action
     */
    // this.store.dispatch(new ClearEditedIngredient());
  }

  onClearClick(event: MouseEvent): void {
    this.store.dispatch(new ClearEditedIngredient());
  }
}
