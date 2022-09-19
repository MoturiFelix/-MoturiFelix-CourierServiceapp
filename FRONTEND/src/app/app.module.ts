
import { FooterComponent } from './Shared/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomestartComponent } from './Shared/homestart/homestart.component';
import { HttpClientModule } from '@angular/common/http';

import { Error404Component } from './error404/error404.component';




@NgModule({
  declarations: [
    AppComponent,
    HomestartComponent,
    FooterComponent,
    Error404Component,
    
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
