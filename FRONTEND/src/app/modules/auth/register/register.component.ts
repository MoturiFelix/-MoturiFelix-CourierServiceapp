import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../authservice/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // registerFormData!:FormGroup
 constructor(private customer:CustomerService) { }

 form! : FormGroup
 ngOnInit(): void {

   this.form = new FormGroup({
    role: new FormControl("user"),
     username: new FormControl(null, Validators.required),
     email: new FormControl('email@domain.com', [Validators.required, Validators.email]),
     number: new FormControl(null, Validators.required),
     password: new FormControl(null, Validators.required),
   })
 }
 
 onSubmit(){
   if(this.form.valid){
 this.customer.addCustomer(this.form.value).subscribe(res=>{
  console.log(res);
  this.form.reset()
 })
   }
 }
}
