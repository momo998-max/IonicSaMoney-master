import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthentificationService } from './service/authentification.service';
import { IonicStorageModule } from '@ionic/storage';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatTableModule} from '@angular/material/table'; 
import { DepotService } from './service/depot.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],

  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthentificationService,
    DepotService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true 
    }
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
