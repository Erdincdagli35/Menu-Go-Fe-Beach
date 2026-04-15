import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeachMenuComponent } from './beach-menu/beach-menu.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminProductControlComponent } from './admin-product-control/admin-product-control.component';
import { MenuCreateComponent } from './menu-create/menu-create.component';
import { MenuDeleteComponent } from './menu-delete/menu-delete.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu/beach', pathMatch: 'full' },
  { path: 'menu/beach', component: BeachMenuComponent },
  { path: 'admin/login', component: LoginPageComponent },
  { path: 'admin/product-control', component: AdminProductControlComponent },
  { path: 'menu/create', component: MenuCreateComponent },
  { path: 'menu/delete', component: MenuDeleteComponent },
  { path: 'menu/edit/:id', component: MenuEditComponent },
  { path: '**', redirectTo: 'menu/beach' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
