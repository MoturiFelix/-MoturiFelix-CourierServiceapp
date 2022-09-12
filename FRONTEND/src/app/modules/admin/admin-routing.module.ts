import { OnedeliveryComponent } from './onedelivery/onedelivery.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AlldeliveryComponent } from './alldelivery/alldelivery.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AddparcelsComponent } from './addparcels/addparcels.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , component:AdmindashComponent,
  children:[
    {path:'',component:AlldeliveryComponent},
   {path:'add-parcel',component:AddparcelsComponent},
   {path:'all-users',component:AllusersComponent},
   {path:'delivery',component:OnedeliveryComponent}

  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
