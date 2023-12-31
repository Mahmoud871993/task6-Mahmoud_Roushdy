import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductWithApiService } from 'src/app/services/product-with-api.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  prodId: number = 0;
  product: Iproduct | undefined;
  constructor(private prodservice: ProductWithApiService, private activateroute:ActivatedRoute){}

  ngOnInit(): void {
    this.prodId = this.activateroute.snapshot.params['id'];
    this.prodservice.getById(this.prodId).subscribe((data) =>{
      this.product = data as Iproduct

     });
    
     }

} 
