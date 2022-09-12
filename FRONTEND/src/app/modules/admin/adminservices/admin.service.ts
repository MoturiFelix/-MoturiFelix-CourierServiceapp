import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



export interface customerInterface{
  username:string
  email: string
  number: string
  password:string

}
export interface parcelInterface{
  username:string
  desc: string
  from: string
  dst:string
  weight:string
  status:string
  departure:string
  arrival:string
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAllCustomers():Observable<customerInterface[]>{
    return this.http.get<customerInterface[]>('http://localhost:3000/customers')
  }

  addParcel(parcelData:parcelInterface):Observable<parcelInterface[]>{
    return this.http.post<parcelInterface[]>('http://localhost:3000/parcels',parcelData)
  }

  getAllParcels():Observable<parcelInterface[]>{
    return this.http.get<parcelInterface[]>('http://localhost:3000/parcels')
  }

  getParcel(id:number){
    return this.http.get<parcelInterface[]>(`http://localhost:3000/parcels/${id}`)
  }

}
