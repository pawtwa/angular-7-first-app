import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    DropdownDirective
  ],
  providers: []
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [  ]
    }
  }

  static forCore() {
    return {
      ngModule: SharedModule,
      providers: [  ]
    }
  }
}
