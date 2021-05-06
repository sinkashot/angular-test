import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MyServiceService } from './my-service.service';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  //database
  // private readonly storage = {
  //   id : 'admin',
  //   pwd : '1234'
  // }

  constructor(private http : HttpClient, private service : MyServiceService) {
    // this.test().subscribe( (arg:any)=> {
    //   console.log(arg);
    // });

    // this.test().subscribe( (arg:any)=> {
    //   console.log(arg);
    // });
  }

  // test() {
  //   return new Observable( arg=>{
  //     arg.next({test:1});
  //     arg.next({test:2});
  //     arg.next({test:3});
  //     arg.complete;
  //   });
  // }

  private response : any = {
    result : Boolean,
    data : Object
  }

  tryToLogin(param : any) {
    return new Observable( arg=>{
      this.http.post("http://localhost:8080/auth",
        {
          id : param.id,
          pwd : param.pwd
        }
      ).subscribe(data => {
        console.log("data : ", data);
        this.response = data;
        console.log("id : ", this.response.data.id);
        
        if (this.response.result) {
          this.service.user.id = this.response.data.id;
          this.service.user.name = this.response.data.name;

          arg.next({status : true});
          localStorage.setItem("status", "true");
        } else {
          arg.next({status : false, reason : 'wrong information'});
        }
  
        arg.complete();
      });
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
