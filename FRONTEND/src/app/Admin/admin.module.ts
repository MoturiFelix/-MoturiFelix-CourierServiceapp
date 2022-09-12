import { RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AdmindashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AdmindashboardComponent},
    ])
  ]
})
export class AdminModule { }



