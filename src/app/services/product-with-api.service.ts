import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductWithApiService {
  baseURl:string = 'http://localhost:4000/products';

  constructor(private http:HttpClient) { }

  getAll():Observable<Iproduct[]>{
   return this.http.get<Iproduct[]>(this.baseURl)

  }
  getById(id:number):Observable<Iproduct>{
   return this.http.get<Iproduct>(`${this.baseURl}/${id}`)

  }
  add(prod:Iproduct){
    return this.http.post(this.baseURl, prod)

  }
  edit(id:number, prod:Iproduct){
    return this.http.put(`${this.baseURl}/${id}`, prod)


  }

  delete(id:number){
    return this.http.delete(`${this.baseURl}/${id}`)

  }


}
