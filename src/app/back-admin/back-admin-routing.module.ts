import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackAdminPage } from './back-admin.page';

const routes: Routes = [
  {
    path: '',
    component: BackAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackAdminPageRoutingModule {}
