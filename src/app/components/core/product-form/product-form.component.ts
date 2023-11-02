//import { Iproduct } from './../../../models/iproduct';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductWithApiService } from 'src/app/services/product-with-api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  prodId:number =0;

  // product:Iproduct = {
  //   id:0,
  //   name:"",
  //   description:"",
  //   price:0,
  //   quantity:0
  //}

  productForm: FormGroup = new FormGroup({
    id:new FormControl(0),
    name:new FormControl('', [Validators.required, Validators.minLength(3)]),
    description:new FormControl('',[Validators.required, Validators.maxLength(100)]),
    price:new FormControl(0, [Validators.required, Validators.max(10000), Validators.min(100)]),
    quantity:new FormControl(0,Validators.required)

  })
  constructor(private activatedroute: ActivatedRoute, private prodservice: ProductWithApiService, private router:Router){}
  ngOnInit(): void {
   this.prodId = this.activatedroute.snapshot.params['id'];
   if (this.prodId > 0){
    this.prodservice.getById(this.prodId).subscribe((data)=>{
      this.productForm.controls['name'].setValue(data.name);
      this.productForm.controls['description'].setValue(data.description);
      this.productForm.controls['price'].setValue(data.price);
      this.productForm.controls['quantity'].setValue(data.quantity);

   }) ;

   }else{

   }
  }
 
GetData(e:Event){
  e.preventDefault();
  if(this.productForm.valid){
    console.log(this.productForm.value);
    if(this.prodId > 0)
    {
      this.prodservice.edit(this.prodId, this.productForm.value).subscribe()

    }else{ 
      this.prodservice.add(this.productForm.value).subscribe();

    }
    this.router.navigate(['/product']);

  }
 
}

}
