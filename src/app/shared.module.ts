

import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DropdownDirective } from "app/directives/dropdown.directive";




@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [
    DropdownDirective,
    CommonModule
  ]
})
export class SharedModule {

}