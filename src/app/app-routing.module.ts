import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { BeachMenuComponent } from './beach-menu/beach-menu.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminProductControlComponent } from './admin-product-control/admin-product-control.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu/plaj', pathMatch: 'full' },
  { path: 'menu/restaurant', component: MenuComponent },
  { path: 'menu/plaj', component: BeachMenuComponent },
  { path: 'admin/login', component: LoginPageComponent },
  { path: 'admin/product-control', component: AdminProductControlComponent },
  { path: '**', redirectTo: 'menu/plaj' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
