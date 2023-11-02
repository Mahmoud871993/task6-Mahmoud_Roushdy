import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  user:{}| undefined;

  constructor() { }
  login(email:string, password:string){
    this.user={}

  }
  isauthenticated(){
    return Boolean(this.user)
  }
  logout(){
    this.user=undefined;
  }
}
