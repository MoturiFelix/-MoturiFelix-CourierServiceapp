import { ReactiveFormsModule } from '@angular/forms';
import { UserdashComponent } from './../user/userdash/userdash.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddparcelsComponent } from './addparcels/addparcels.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AlldeliveryComponent } from './alldelivery/alldelivery.component';
import { AllusersComponent } from './allusers/allusers.component';
import {  HttpClientModule } from '@angular/common/http';
import { OnedeliveryComponent } from './onedelivery/onedelivery.component';




@NgModule({
  declarations: [
    AddparcelsComponent,
    AdmindashComponent,
    AlldeliveryComponent,
    AllusersComponent,
    OnedeliveryComponent,
    // UserdashComponent
    
   
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
     HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
