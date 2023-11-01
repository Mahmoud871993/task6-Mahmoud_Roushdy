import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  prodId: number = 0;
  product : Iproduct | undefined;
  constructor(private prodservice: ProductsService, private activateroute:ActivatedRoute){}
  ngOnInit(): void {
    this.prodId = this.activateroute.snapshot.params['id'];
    this.product = this.prodservice.getById(this.prodId);
  }

} 
