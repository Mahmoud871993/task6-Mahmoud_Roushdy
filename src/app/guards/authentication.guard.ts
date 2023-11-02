import { AccountService } from './../services/account.service';
import { inject } from '@angular/core';
import { CanActivateFn, RouteReuseStrategy, Router } from '@angular/router';
//import { AccountService } from '../services/account.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  let accountService = inject(AccountService);
  if(!accountService.isauthenticated())inject(Router).navigate(['/login'])

  return accountService.isauthenticated();
};
