

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { SignupComponent } from "app/components/auth/signup/signup.component";
import { SigninComponent } from "app/components/auth/signin/signin.component";
import { SharedModule } from "app/shared.module";
import { AuthRoutingModule } from "app/auth-routing.module";


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {

}