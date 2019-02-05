import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>;

  nameInputError: boolean = false;
  amountInputError: boolean = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onDeleteClick(event) {
    this.shoppingListService.deleteSelectedIngridient();
  }

  onClearClick(event) {
    this.shoppingListService.clearIngridients();
  }

  onAddClick(event) {
    this.nameInputError = false;
    this.amountInputError = false;
    if (this.nameInput.nativeElement.value.trim().length && this.amountInput.nativeElement.value.length) {
      const newIngridient: Ingridient = new Ingridient(String(this.nameInput.nativeElement.value), Number(this.amountInput.nativeElement.value));
      this.shoppingListService.addIngridient(newIngridient);
      this.nameInput.nativeElement.value = null;
      this.amountInput.nativeElement.value = null;
    } else {
      this.nameInputError = !this.nameInput.nativeElement.value.trim().length;
      this.amountInputError = !this.amountInput.nativeElement.value.length;
    }
  }
}
