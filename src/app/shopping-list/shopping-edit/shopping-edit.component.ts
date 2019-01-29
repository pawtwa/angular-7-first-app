import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngridient = new EventEmitter<Ingridient>();

  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>;

  nameInputError: boolean = false;
  amountInputError: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onAddClick(event) {
    this.nameInputError = false;
    this.amountInputError = false;
    if (this.nameInput.nativeElement.value.trim().length && this.amountInput.nativeElement.value.length) {
      this.addIngridient.emit(new Ingridient(String(this.nameInput.nativeElement.value), Number(this.amountInput.nativeElement.value)));
      this.nameInput.nativeElement.value = null;
      this.amountInput.nativeElement.value = null;
    } else {
      this.nameInputError = !this.nameInput.nativeElement.value.trim().length;
      this.amountInputError = !this.amountInput.nativeElement.value.length;
    }
  }
}
