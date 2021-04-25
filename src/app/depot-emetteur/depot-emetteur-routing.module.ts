import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepotEmetteurPage } from './depot-emetteur.page';

const routes: Routes = [
  {
    path: '',
    component: DepotEmetteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepotEmetteurPageRoutingModule {}
