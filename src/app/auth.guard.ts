import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AskService } from './ask.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private status : boolean = false;

  constructor(private service : AskService) {
    service.isLogged.subscribe(result=>{
      console.log('auth result : ', result);
      this.status = result;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    this.service.isLogin();
    console.log('auth values is : ', this.status);
    
    return this.status;
  }
  
}
