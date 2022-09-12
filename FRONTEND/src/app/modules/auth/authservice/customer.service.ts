import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface customerInterface{
  username:string
  email: string
  number: string
  password:string

}

export interface registerSuccessMessage{
  message:string
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

addCustomer(customerData:customerInterface):Observable<registerSuccessMessage>{
  return this.http.post<registerSuccessMessage>('http://localhost:3000/customers',customerData)
}

getAllCustomers():Observable<customerInterface>{
  return this.http.get<customerInterface>('http://localhost:3000/customers')
}

}
