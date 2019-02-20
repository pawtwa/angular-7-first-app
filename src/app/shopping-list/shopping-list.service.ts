import {Ingridient} from '../shared/ingridient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService
{
    ingridientsChanged: Subject<Ingridient[]> = new Subject();

    private ingridients: Ingridient[] = [
        new Ingridient('Apples', 5),
        new Ingridient('Tomatos', 3)
    ];

    private selectedIngridientId: number = -1;

    getIngridients() {
        return this.ingridients.slice();
    }

    addIngridient(ingridient: Ingridient) {
        this.ingridients.push(ingridient);
        this.ingridientsChanged.next(this.getIngridients());
    }

    deleteSelectedIngridient() {
        if (this.selectedIngridientId >= 0) {
            this.ingridients.splice(this.selectedIngridientId, 1);
            this.ingridientsChanged.next(this.getIngridients());
        }
    }

    clearIngridients() {
        this.ingridients.splice(0, this.ingridients.length);
        this.ingridientsChanged.next(this.getIngridients());
    }

    addIngridients(ingridients: Ingridient[]) {
        this.ingridients.push(...ingridients);
        this.ingridientsChanged.next(this.getIngridients());
    }

    setSelectedIngridientId(id: number) {
        this.selectedIngridientId = id;
    }

    getSelectedIngridientId() {
        return this.selectedIngridientId;
    }
}