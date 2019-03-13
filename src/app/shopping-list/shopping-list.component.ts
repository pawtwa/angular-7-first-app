import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InitialShoppingListStateInterface } from './ngrx/shooping-list.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<InitialShoppingListStateInterface>;

  private subscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<InitialShoppingListStateInterface>
  ) { }

  ngOnInit() {
    this.fetchIngredients();
    //this.subscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients) => this.ingredients = ingredients);
  }

  fetchIngredients () {
    this.shoppingListState = this.store.select('shoppingList');
    //this.shoppingListService.getIngredients();
  }

  onClick(id, event) {
    event.preventDefault();
    this.shoppingListService.ingredientListItemSelected(+id);
  }

  ngOnDestroy() {
    // this.subscription ? this.subscription.unsubscribe() : null;
  }
}
