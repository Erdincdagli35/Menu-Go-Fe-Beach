import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeachMenuComponent } from './beach-menu/beach-menu.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminProductControlComponent } from './admin-product-control/admin-product-control.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu/beach', pathMatch: 'full' },
  { path: 'menu/beach', component: BeachMenuComponent },
  { path: 'admin/login', component: LoginPageComponent },
  { path: 'admin/product-control', component: AdminProductControlComponent },
  { path: '**', redirectTo: 'menu/beach' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
