import { Component, OnInit } from '@angular/core';
import { AdminService, parcelInterface } from '../adminservices/admin.service';

@Component({
  selector: 'app-alldelivery',
  templateUrl: './alldelivery.component.html',
  styleUrls: ['./alldelivery.component.css']
})
export class AlldeliveryComponent implements OnInit {
  allparcels: parcelInterface[] = [];

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();


  constructor( private parcel: AdminService) {}

  ngOnInit(): void {

    this.parcel.getAllParcels().subscribe(res=>{
      this.allparcels=res
    })
  }

}
