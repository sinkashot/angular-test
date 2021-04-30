import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : "angular-test";

  loginBool : boolean = true;
  boardBool : boolean = false;

  constructor(private service : MyServiceService) {
    service.TV.subscribe(arg=>{
      if (arg && arg.id) {
        console.log('login success : ', arg);
        this.loginBool = false;
        this.boardBool = true;
      }
    });
  }

  // getEventThanks(event) {
  //   console.log(event);
  //   if (event == true) {
  //     this.loginBool = false;
  //     this.boardBool = true;
  //   }
  // }
}
