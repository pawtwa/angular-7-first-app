import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    
  ]
})
export class ShoppingListModule {
  static forRoot() {
    return {
      ngModule: ShoppingListModule,
      providers: [ ShoppingListService ]
    }
  }
}
