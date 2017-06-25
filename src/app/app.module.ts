import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "app/shared.module";
import { AuthModule } from "app/auth.module";
import { ShoppingListModule } from "app/shopping-list.module";
import { CoreModule } from "app/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
