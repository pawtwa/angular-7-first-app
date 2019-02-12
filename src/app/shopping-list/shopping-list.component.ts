import { Component, OnInit } from '@angular/core';

import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.fetchIngridients();
    this.shoppingListService.ingridientsChanged.subscribe((ingridients) => this.ingridients = ingridients);
  }

  fetchIngridients = () => {
    this.ingridients = this.shoppingListService.getIngridients();
  }

  onClick(id, event) {
    event.preventDefault();
    this.shoppingListService.setSelectedIngridientId(id);
  }
}
