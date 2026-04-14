import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BeachMenuComponent } from './beach-menu/beach-menu.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminProductControlComponent } from './admin-product-control/admin-product-control.component';
import { MenuCreateComponent } from './menu-create/menu-create.component';

@NgModule({
  declarations: [
    AppComponent,
    BeachMenuComponent,
    LoginPageComponent,
    AdminProductControlComponent,
    MenuCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
