


import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { RecipesComponent } from "app/components/recipes/recipes.component";
import { RecipeListComponent } from "app/components/recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "app/components/recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeEditComponent } from "app/components/recipes/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "app/components/recipes/recipe-detail/recipe-detail.component";
import { RecipesStartComponent } from "app/components/recipes/recipes-start/recipes-start.component";

import { RecipesRoutingModule } from "app/recipes-routing.module";
import { SharedModule } from "app/shared.module";
import { DataStorageService } from "app/services/data-storage.service";


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipesStartComponent
  ],
  imports: [
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ],
  exports: [

  ],
  providers: [

  ]
})
export class RecipesModule {

  constructor(private dataStorageService: DataStorageService) {
    this.dataStorageService.fetchData()
  }

}