import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { productslist } from 'src/app/models/productslist';
import { ProductWithApiService } from 'src/app/services/product-with-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Iproduct[] = [];

  constructor(private prodservice: ProductWithApiService){}

  ngOnInit(): void {
   this.prodservice.getAll().subscribe({
    next:(data) => {this.products = data},
    error: (err) => {console.log('error:' + err)},
    complete:() =>{},
   });
   console.log(this.products);
   }
   //console.log(this.products);

   remove(id:number)
   {
    this.prodservice.delete(id).subscribe();
   this.products.filter((p) =>p.id != id);
    
   }
   
  
   
  
}
