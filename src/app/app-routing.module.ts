import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu-admin',
    loadChildren: () => import('./menu-admin/menu-admin.module').then( m => m.MenuAdminPageModule)
  },
  {
    path: 'depot-emetteur',
    loadChildren: () => import('./depot-emetteur/depot-emetteur.module').then( m => m.DepotEmetteurPageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'calcul-frais',
    loadChildren: () => import('./calcul-frais/calcul-frais.module').then( m => m.CalculFraisPageModule)
  },
  {
    path: 'back-admin',
    loadChildren: () => import('./back-admin/back-admin.module').then( m => m.BackAdminPageModule)
  },
  {
    path: 'commissions',
    loadChildren: () => import('./commissions/commissions.module').then( m => m.CommissionsPageModule)
  },
  {
    path: 'retrait',
    loadChildren: () => import('./retrait/retrait.module').then( m => m.RetraitPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
