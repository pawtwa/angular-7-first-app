import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';
import {FormGroup, NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  // @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>;
  //
  // nameInputError: boolean;
  // amountInputError: boolean;

  @ViewChild('f') form: NgForm;

  ingridientListSelectedItemSubscription: Subscription;
  ingridientListSelectedId: number | null;

  constructor(private shoppingListService: ShoppingListService) {
    // this.nameInputError = false;
    // this.amountInputError = false;
  }

  ngOnInit(): void {
    this.resetIngridientListSelected();
    this.ingridientListSelectedItemSubscription = this.shoppingListService.ingridientListSelectedItem.subscribe(id => {
      if (id === null) {
        this.resetIngridientListSelected();
      } else {
        this.setIngridientListSelected(id, this.shoppingListService.getIngridient(id));
      }
    });
  }

  setIngridientListSelected(id: number, ingridient: Ingridient) {
    this.ingridientListSelectedId = id;
    this.form.setValue(ingridient);
  }

  resetIngridientListSelected() {
    this.ingridientListSelectedId = null;
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.ingridientListSelectedItemSubscription.unsubscribe();
  }

  onDeleteClick(event: UIEvent): void {
    this.shoppingListService.deleteSelectedIngridient(this.ingridientListSelectedId);
  }

  onClearClick(event: UIEvent): void {
    this.resetIngridientListSelected();
  }

  onAddEditItem(form: FormGroup): void {
    const value = form.value;
    const ingridient = new Ingridient(value.name, value.amount);
    if (this.ingridientListSelectedId !== null) {
      this.shoppingListService.editSelectedIngridient(ingridient, this.ingridientListSelectedId);
    } else {
      this.shoppingListService.addIngridient(ingridient);
    }
    this.shoppingListService.ingridientListItemSelected(null);
  }

  // onAddClick(event: UIEvent) {
  //   this.nameInputError = false;
  //   this.amountInputError = false;
  //   if (this.nameInput.nativeElement.value.trim().length && this.amountInput.nativeElement.value.length) {
  //     const newIngridient: Ingridient = new Ingridient(
  //       String(this.nameInput.nativeElement.value),
  //       Number(this.amountInput.nativeElement.value)
  //     );
  //     this.shoppingListService.addIngridient(newIngridient);
  //     this.nameInput.nativeElement.value = null;
  //     this.amountInput.nativeElement.value = null;
  //   } else {
  //     this.nameInputError = !this.nameInput.nativeElement.value.trim().length;
  //     this.amountInputError = !this.amountInput.nativeElement.value.length;
  //   }
  // }
}
