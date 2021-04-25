import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'transactions',
        loadChildren: () => import('../transactions/transactions.module').then( m => m.TransactionsPageModule)
      },
      {
        path:'commissions',
        loadChildren:() => import('../commissions/commissions.module').then(m => m.CommissionsPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../menu-admin/menu-admin.module').then(m => m.MenuAdminPageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path:'calculFrais',
        loadChildren: () => import('../calcul-frais/calcul-frais.module').then(m => m.CalculFraisPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class TabsPageRoutingModule {}
