import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ShoppingListService } from './shopping-list.service';
import { ShoppingListStateInterface } from './ngrx/shooping-list.reducer';
import { AppStateInterface } from '../app.reducer';
import { SetEditedIngredient } from './ngrx/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<ShoppingListStateInterface>;
  shoppingListStateSubscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<AppStateInterface>
  ) { } 

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    this.shoppingListStateSubscription = this.shoppingListState.subscribe((shoppingList) => {
      this.shoppingListService.setIngredients(shoppingList.ingredients);
      this.shoppingListService.setEditedIngredient(shoppingList.editedIngredient);
    });
  }

  onClick(id, event) {
    event.preventDefault();
    this.store.dispatch(new SetEditedIngredient(id));
  }

  ngOnDestroy() {
    this.shoppingListStateSubscription ? this.shoppingListStateSubscription.unsubscribe() : null;
  }
}
