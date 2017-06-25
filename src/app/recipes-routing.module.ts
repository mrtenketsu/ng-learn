

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "app/components/recipes/recipes.component";
import { RecipesStartComponent } from "app/components/recipes/recipes-start/recipes-start.component";
import { RecipeEditComponent } from "app/components/recipes/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "app/components/recipes/recipe-detail/recipe-detail.component";
import { AuthGuard } from "app/services/auth-guard.service";


const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
    { path: '', component: RecipesStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [ AuthGuard ] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [ AuthGuard ] }
  ]}
];


@NgModule({
  imports: [ RouterModule.forChild(recipesRoutes) ],
  exports: [ RouterModule ]
})
export class RecipesRoutingModule {

}