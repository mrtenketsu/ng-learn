

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ShoppingEditComponent } from "app/components/shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "app/components/shopping-list/shopping-list.component";
import { SharedModule } from "app/shared.module";
import { ShoppingListRoutingModule } from "app/shopping-list-routing.module";


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    SharedModule,
    ShoppingListRoutingModule,
    FormsModule
  ]
})
export class ShoppingListModule {

}