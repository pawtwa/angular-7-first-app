import {Ingridient} from '../shared/ingridient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingridientsChanged: Subject<Ingridient[]> = new Subject();
    ingridientListSelectedItem: Subject<number | null> = new Subject();

    private ingridients: Ingridient[] = [
        new Ingridient('Apples', 5),
        new Ingridient('Tomatos', 3)
    ];

    ingridientListItemSelected(id: number | null): void {
      this.ingridientListSelectedItem.next(id);
    }

    getIngridients(): Ingridient[] {
        return this.ingridients.slice();
    }

    getIngridient(id: number): Ingridient {
      return this.ingridients.slice()[id];
    }

    deleteSelectedIngridient(id: number | null): void {
      if (id !== null) {
        this.ingridients.splice(id, 1);
        this.ingridientsChanged.next(this.getIngridients());
        this.ingridientListSelectedItem.next(null);
      }
    }

    addIngridients(ingridients: Ingridient[]): void {
        this.ingridients.push(...ingridients);
        this.ingridientsChanged.next(this.getIngridients());
    }

  addIngridient(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
    this.ingridientsChanged.next(this.getIngridients());
  }

  editSelectedIngridient(ingridient: Ingridient, id: number) {
    if (this.ingridients[id]) {
      this.ingridients[id] = ingridient;
      this.ingridientsChanged.next(this.getIngridients());
    }
  }
}
