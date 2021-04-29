import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : "angular-test";

  loginBool : boolean = true;
  boardBool : boolean = false;

  getEventThanks(event) {
    console.log(event);
    if (event == true) {
      this.loginBool = false;
      this.boardBool = true;
    }
  }
}
