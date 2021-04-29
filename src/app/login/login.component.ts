import { Component, Input, Output, OnInit, EventEmitter, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { INFORMATION } from '../MyType';

declare type MyCustomType = {
  text : any;
  number : any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() visible1 : boolean;
  @Output() sendMyEvent : EventEmitter<any> = new EventEmitter();

  id = new FormControl('');
  pwd = new FormControl('', [Validators.required, Validators.minLength(4)]);

  private message;

  styleArray = {'wrong_id':false, 'wrong_pwd':false};

  private test : MyCustomType = {
    text : '',
    number : 1234
  }

  constructor(@Inject("sending_name") my_type : INFORMATION) {
    console.log(my_type);
  }

  ngOnInit(): void {
  }

  tryToLogin() : void {
    console.log(this.id, this.pwd);

    if (this.id.value == 'admin' && this.pwd.value == '1234') {
      alert('log-in');
      this.visible1 = true;
      this.sendMyEvent.emit(this.visible1);

    } else if (this.id.value != 'admin') {
      this.setMessage = "wrong id";

      this.styleArray.wrong_id = true;
      this.styleArray.wrong_pwd = false;

    } else if (this.pwd.value != '1234') {
      this.setMessage = "wrong pwd";

      this.styleArray.wrong_id = false;
      this.styleArray.wrong_pwd = true;
    }
  }
  
  set setMessage(message) {
    this.message = message;
  }
  
  get getMessage() : any {
    return this.message;
  }

}
