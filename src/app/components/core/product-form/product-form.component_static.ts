import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  template: '<h1>welcome</h1>',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product:Iproduct = {
    id:0,
    name:"",
    description:"",
    price:0,
    quantity:0
  }
  prodId:number = 0

  constructor(private prodservice:ProductsService, private router:Router, private activatedroute: ActivatedRoute)
  {}
  ngOnInit(): void {
    this.prodId = this.activatedroute.snapshot.params['id'];
    if(this.prodId!=0){
      let prod = this.prodservice.getById(this.prodId);
      if (prod) this.product = prod; 

    }
  }

  GetData(s:Event){
    s.preventDefault();
    console.log(this.product);
    if(this.prodId){

      this.prodservice.edit(this.prodId, this.product)
    }else
    {
      this.prodservice.add(this.product)

    }



    this.router.navigate(['/product']);

  }


}
