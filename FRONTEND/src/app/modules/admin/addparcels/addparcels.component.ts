import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService, parcelInterface } from '../adminservices/admin.service';

@Component({
  selector: 'app-addparcels',
  templateUrl: './addparcels.component.html',
  styleUrls: ['./addparcels.component.css'],
})
export class AddparcelsComponent implements OnInit {
  formValue!: FormGroup;
  allparcels: parcelInterface[] = [];

  constructor(private formbuider: FormBuilder, private parcel: AdminService , private router :Router) {}
  ngOnInit(): void {
    this.formValue = this.formbuider.group({
      username: this.formbuider.control('', Validators.required),
      desc: this.formbuider.control('', Validators.required),
      from: this.formbuider.control('', Validators.required),
      dst: this.formbuider.control('', Validators.required),
      weight: this.formbuider.control('', Validators.required),
      status: this.formbuider.control('', Validators.required),
      departure: this.formbuider.control('', Validators.required),
      arrival: this.formbuider.control('', Validators.required),
    });
  }

  addParcel() {
    if (this.formValue.valid) {
      this.parcel.addParcel(this.formValue.value).subscribe((res) => {
        this.allparcels = res;
        this.formValue.reset()
        this.router.navigate(['/admin'])

      });
    }
  }
}
