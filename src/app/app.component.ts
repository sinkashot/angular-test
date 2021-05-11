import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { USER } from './MyType';

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

    service.getUsers().subscribe((users) => {
      for (let user of users) {
        console.log(`user_id : ${user.id}`);
        console.log(`user_id : ${user.name}`);
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
