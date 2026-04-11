import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BeachMenuComponent } from './beach-menu/beach-menu.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminProductControlComponent } from './admin-product-control/admin-product-control.component';

@NgModule({
  declarations: [
    AppComponent,
    BeachMenuComponent,
    LoginPageComponent,
    AdminProductControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
