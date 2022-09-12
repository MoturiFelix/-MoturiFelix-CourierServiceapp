import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
// ===========================================================
// import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signUp = <HTMLButtonElement>document.getElementById("signUpBtn");
  constructor() { }

  ngOnInit(): void {   
  };
  options : AnimationOptions = {
    path:'/assets/lottie/lf30_editor_puyxp6m9.json',
  }

  animationCreated(animationItem:AnimationItem){}


}
