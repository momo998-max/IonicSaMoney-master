import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionsPageRoutingModule } from './transactions-routing.module';

import { TransactionsPage } from './transactions.page';
import {MatTableModule} from '@angular/material/table'; 
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from '../service/token-interceptor.service';
import { DepotService } from '../service/depot.service';
import { AuthentificationService } from '../service/authentification.service';


@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    TransactionsPageRoutingModule,
    MatTableModule,
    HttpClientModule
  ],
  declarations: [TransactionsPage],
  providers:[   AuthentificationService,
    DepotService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true 
  }]
})
export class TransactionsPageModule {}
