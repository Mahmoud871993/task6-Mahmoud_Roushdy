import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { productslist } from 'src/app/models/productslist';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Iproduct[] = [];

  constructor(private prodservice:ProductsService){


  }
  ngOnInit(): void {
   this.products= this.prodservice.getAll()
  }

  remove(id:number){
    var result = confirm("Do you want to delete this item?");
    if(result)
    this.prodservice.delete(id)
  }

}
