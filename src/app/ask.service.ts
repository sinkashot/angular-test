import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  //database
  private readonly storage = {
    id : 'admin',
    pwd : '1234'
  }

  constructor() {
    this.test().subscribe( (arg:any)=> {
      console.log(arg);
    });

    this.test().subscribe( (arg:any)=> {
      console.log(arg);
    });
  }

  test() {
    return new Observable( arg=>{
      arg.next({test:1});
      arg.next({test:2});
      arg.next({test:3});
      arg.complete;
    });
  }

  tryToLogin(param : any) {
    return new Observable( arg=>{
      if (param.id == this.storage.id && param.pwd == this.storage.pwd) {
        arg.next({status : true});
        localStorage.setItem("status", "true");
      } else {
        arg.next({status : false, reason : 'wrong information'});
      }

      arg.complete();
    });
  }

  readonly isLogged : BehaviorSubject<boolean> = new BehaviorSubject(false);

  isLogin() : void {
    console.log('storage : ', localStorage.getItem('status'));
    
    if (localStorage.getItem('status') == 'true') {
      this.isLogged.next(true);
    } else {
      this.isLogged.next(false);
    }
  }

}
