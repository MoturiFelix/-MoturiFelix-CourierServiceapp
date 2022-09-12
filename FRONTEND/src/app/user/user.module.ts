import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../Shared/navbar/navbar.component';



@NgModule({
  declarations: [
    // UserDashboardComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // {path: '', component: UserDashboardComponent},
    ])
  ]
})
export class UserModule { }
