import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab1Page } from '../tab1/tab1.page';
import { LoginPage } from './login.page';
import { TabsPage } from '../tabs/tabs.page';
import { MenuAdminPage } from '../menu-admin/menu-admin.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path:'menuAdmin',
    component:MenuAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class LoginPageRoutingModule {}
