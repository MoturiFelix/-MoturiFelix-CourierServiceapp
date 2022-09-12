import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserdashComponent } from './userdash/userdash.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyparcelComponent } from './myparcel/myparcel.component';


@NgModule({
  declarations: [
    UserdashComponent,
    MyprofileComponent,
    MyparcelComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
