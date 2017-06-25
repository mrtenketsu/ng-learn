import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/app/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShoppingListService } from './services/shopping-list.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { RecipesStartComponent } from './components/recipes/recipes-start/recipes-start.component';
import { RecipeEditComponent } from "app/components/recipes/recipe-edit/recipe-edit.component";
import { SignupComponent } from "app/components/auth/signup/signup.component";
import { SigninComponent } from "app/components/auth/signin/signin.component";
import { AuthGuard } from "app/services/auth-guard.service";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, canActivate: [ AuthGuard ], children: [
        { path: '', component: RecipesStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ]},
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [ AuthGuard ] , children: [

    ]},
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' }},
    { path: '**', redirectTo: '/not-found' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}