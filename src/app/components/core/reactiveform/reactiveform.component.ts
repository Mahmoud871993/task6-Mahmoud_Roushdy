import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  loginForm:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
  });
  constructor(private accountservice: AccountService, private router:Router){}


  login(e:Event){
    e.preventDefault();

    console.log(this.loginForm);
    this.accountservice.login('','');
    this.router.navigate(['/'])
    
    
  }
  get emailControl(){
   return this.loginForm.get('email');
  }
  get passwordControlv(){
   return this.loginForm.controls['password'];

  }

}
