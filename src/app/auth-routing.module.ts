

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from "app/components/auth/signup/signup.component";
import { SigninComponent } from "app/components/auth/signin/signin.component";

const authRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
]


@NgModule({
  imports: [ RouterModule.forChild(authRoutes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {

}