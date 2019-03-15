import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
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
  appState: Observable<AppStateInterface>;
  appStateSubscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<AppStateInterface>
  ) { } 

  ngOnInit() {
    this.appState = this.store.select('appState');
    this.appStateSubscription = this.appState.subscribe((appState) => {
      this.shoppingListService.setIngredients(appState.shoppingList.ingredients);
      this.shoppingListService.setEditedIngredient(appState.shoppingList.editedIngredient);
    });
  }

  onClick(id, event) {
    event.preventDefault();
    this.store.dispatch(new SetEditedIngredient(id));
  }

  ngOnDestroy() {
    this.appStateSubscription ? this.appStateSubscription.unsubscribe() : null;
  }
}
