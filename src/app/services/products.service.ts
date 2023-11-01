import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { productslist } from '../models/productslist';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products : Iproduct[];

  constructor() { 
    this.products = productslist

  }
  getAll():Iproduct[]{
    return this.products
  }
  getById(id:number):Iproduct|undefined{
    return this.products.find(p=>p.id == id);
  }
  add(p:Iproduct):void{
    let nextitem = productslist[productslist.length-1].id + 1;
    p.id =nextitem
    this.products.push(p);
  }
  edit(id: number, p:Iproduct):void{
    let index = this.products.findIndex(p=>p.id == id);
    this.products[index].name = p.name;
    this.products[index].price = p.price;
    this.products[index].quantity = p.quantity; 
    
  }
  delete(id:number){
    let index = this.products.findIndex(p=>p.id == id);
    if(index !=-1){
      this.products.splice(index,1);
    }
    
  }
}
