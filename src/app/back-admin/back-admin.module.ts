import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackAdminPageRoutingModule } from './back-admin-routing.module';

import { BackAdminPage } from './back-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackAdminPageRoutingModule
  ],
  declarations: [BackAdminPage]
})
export class BackAdminPageModule {}
