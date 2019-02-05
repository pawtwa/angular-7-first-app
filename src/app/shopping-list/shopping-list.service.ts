import {Ingridient} from '../shared/ingridient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService
{
    ingridientsChanged: EventEmitter<Ingridient[]> = new EventEmitter();

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
        this.ingridientsChanged.emit(this.getIngridients());
    }

    deleteSelectedIngridient() {
        this.ingridients.splice(this.selectedIngridientId, 1);
        this.ingridientsChanged.emit(this.getIngridients());
    }

    clearIngridients() {
        this.ingridients.splice(0, this.ingridients.length);
        this.ingridientsChanged.emit(this.getIngridients());
    }

    addIngridients(ingridients: Ingridient[]) {
        this.ingridients.push(...ingridients);
        this.ingridientsChanged.emit(this.getIngridients());
    }

    setSelectedIngridientId(id: number) {
        this.selectedIngridientId = id;
    }

    getSelectedIngridientId() {
        return this.selectedIngridientId;
    }
}