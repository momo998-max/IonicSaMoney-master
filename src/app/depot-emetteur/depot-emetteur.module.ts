import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepotEmetteurPageRoutingModule } from './depot-emetteur-routing.module';

import { DepotEmetteurPage } from './depot-emetteur.page';

import { DepotConfirmationComponent } from '../modal/depot-confirmation/depot-confirmation.component';
import { DepotService } from '../service/depot.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../service/token-interceptor.service';
@NgModule({
  imports: [



  CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DepotEmetteurPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [DepotEmetteurPage,DepotConfirmationComponent],
  providers:[DepotService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true 
  }]
})
export class DepotEmetteurPageModule {}
