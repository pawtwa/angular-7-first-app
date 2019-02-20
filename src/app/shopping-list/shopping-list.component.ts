import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingridients: Ingridient[];

  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.fetchIngridients();
    this.subscription = this.shoppingListService.ingridientsChanged.subscribe((ingridients) => this.ingridients = ingridients);
  }

  fetchIngridients = () => {
    this.ingridients = this.shoppingListService.getIngridients();
  }

  onClick(id, event) {
    event.preventDefault();
    this.shoppingListService.setSelectedIngridientId(id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
