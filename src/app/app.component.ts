import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
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
