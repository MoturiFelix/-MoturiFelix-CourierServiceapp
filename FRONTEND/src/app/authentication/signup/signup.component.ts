import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
// registerFormData!:FormGroup
  constructor() { }

  form! : FormGroup
  ngOnInit(): void {
 
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl('email@domain.com', [Validators.required, Validators.email]),
      number: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)

    })
  }
  
  onSubmit(){
    console.log(this.form.value);
    
  }
 

}
