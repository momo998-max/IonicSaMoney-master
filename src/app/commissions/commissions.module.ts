import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommissionsPageRoutingModule } from './commissions-routing.module';

import { CommissionsPage } from './commissions.page';

import {MatTableModule} from '@angular/material/table';


import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  imports: [

  CommonModule,
    FormsModule,
    IonicModule,
    CommissionsPageRoutingModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  declarations: [CommissionsPage]
})
export class CommissionsPageModule {}
