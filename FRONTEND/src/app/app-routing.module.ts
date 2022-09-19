import { AuthenticationModule } from './authentication/authentication.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';

const routes: Routes = [
  // {path:'**',loadChildren: () => import('./error404/error404.component').then (admin => AdminModule)},
  {path:'',loadChildren:()=>import('./modules/shared/shared.module').then(shared=>SharedModule)},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then (admin => AdminModule)},
  // {path: 'user', loadChildren: ()=> import('./user/user.module').then (user => UserModule)},
  {path: 'auth', loadChildren: ()=> import('./modules/auth/auth.module').then (auth => AuthModule)},
  {path: 'user', loadChildren: ()=> import('./modules/user/user.module').then (auth => UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
