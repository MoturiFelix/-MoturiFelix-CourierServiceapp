import { Component, OnInit } from '@angular/core';
import { AdminService, customerInterface } from '../adminservices/admin.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  users:customerInterface[]=[]

  constructor(private allUsers:AdminService) { }

  ngOnInit(): void {

    this.allUsers.getAllCustomers().subscribe(res=>{
      this.users=res
    })
    console.log(this.users);
    
 
  }

}
