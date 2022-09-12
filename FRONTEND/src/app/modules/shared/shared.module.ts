import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { FooterComponent } from './footer/footer.component';


export function playerFactory(){
  return player;
}

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    [LottieModule.forRoot({ player:playerFactory})]

  ]
})
export class SharedModule { }
