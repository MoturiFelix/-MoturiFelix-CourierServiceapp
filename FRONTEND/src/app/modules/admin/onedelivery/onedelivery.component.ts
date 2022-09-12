import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onedelivery',
  templateUrl: './onedelivery.component.html',
  styleUrls: ['./onedelivery.component.css']
})
export class OnedeliveryComponent implements OnInit {


  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();
  
  constructor() { }

  ngOnInit(): void {
  }

}
