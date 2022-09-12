import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-homestart',
  templateUrl: './homestart.component.html',
  styleUrls: ['./homestart.component.css']
})
export class HomestartComponent implements OnInit {

  signUp = <HTMLButtonElement>document.getElementById("signUpBtn");
  constructor() { }

  ngOnInit(): void {   
  };
  options : AnimationOptions = {
    path:'/assets/lottie/lf30_editor_puyxp6m9.json',
  }

  animationCreated(animationItem:AnimationItem){}


}
