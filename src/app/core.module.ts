

import { NgModule } from "@angular/core";

import { HeaderComponent } from "app/components/core/header/header.component";
import { HomeComponent } from "app/components/core/home/home.component";
import { ErrorPageComponent } from "app/components/error-page/error-page.component";

import { SharedModule } from "app/shared.module";
import { AppRoutingModule } from "app/app-routing.module";

import { ShoppingListService } from "app/services/shopping-list.service";
import { RecipesService } from "app/services/recipes.service";
import { DataStorageService } from "app/services/data-storage.service";
import { AuthService } from "app/services/auth.service";
import { AuthGuard } from "app/services/auth-guard.service";



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipesService,
    DataStorageService,
    AuthService,
    AuthGuard
  ]
})
export class CoreModule {

}