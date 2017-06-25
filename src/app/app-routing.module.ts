import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AuthGuard } from "app/services/auth-guard.service";
import { HomeComponent } from "app/components/core/home/home.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: 'app/recipes.module#RecipesModule' },
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' }},
    // { path: '**', redirectTo: '/not-found' }
]

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}