import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { DataStorageService } from './data-storage.service';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    DropdownDirective
  ],
  providers: []
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [ DataStorageService ]
    }
  }
}
