import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyparcelComponent } from './myparcel/myparcel.component';
import { UserdashComponent } from './userdash/userdash.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {path:'' , component:UserdashComponent,
//   children:[
//   //   {path:'',component:AlldeliveryComponent},
//   //  {path:'add-parcel',component:AddparcelsComponent},
//   //  {path:'all-users',component:AllusersComponent}

//   ]},
  
// ];


const routes: Routes = [
  {path:'' , component:UserdashComponent,
  children:[
    {path:'',component:MyparcelComponent},
   {path:'profile',component:MyprofileComponent}
  //  {path:'all-users',component:AllusersComponent}

  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
