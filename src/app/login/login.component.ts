import { Component, Input, Output, OnInit, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AskService } from '../ask.service';
import { MyServiceService } from '../my-service.service';
// import { INFORMATION } from '../MyType';

declare type MyCustomType = {
  text : any;
  number : any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  id : string;
  pwd : string;

  constructor(private service : AskService, private route : Router) {
    this.route.navigate(['/dashboard']);
  }

  ngOnInit() : void {

  }

  private script : Subscription;

  login() {
    console.log(this.id, this.pwd);

    if (this.script) {
      console.log(this.script);
      this.script.unsubscribe();
    }
    
    this.service.tryToLogin({id : this.id, pwd : this.pwd}).subscribe((arg:any)=>{
      console.log(arg);

      if (arg.status == true) {
        alert('log-in');
        this.route.navigate(['/dashboard']);
      }
    });
  }

  ngOnDestroy(): void {
    console.log(this.script);
    
    if (this.script) {
      this.script.unsubscribe();
    }
  }

  /*
  // @Input() visible1 : boolean;
  // @Output() sendMyEvent : EventEmitter<any> = new EventEmitter();

  id = new FormControl('');
  pwd = new FormControl('', [Validators.required, Validators.minLength(4)]);

  private message;

  styleArray = {'wrong_id':false, 'wrong_pwd':false};

  private test : MyCustomType = {
    text : '',
    number : 1234
  }

  // constructor(@Inject("sending_name") my_type : INFORMATION) {
  //   console.log(my_type);
  // }

  constructor(private service : MyServiceService) {
    // console.log(service);
  }

  ngOnInit(): void {
  }

  tryToLogin() : void {
    console.log(this.id, this.pwd);

    if (this.id.value == 'admin' && this.pwd.value == '1234') {
      alert('log-in');
      // this.visible1 = true;
      // this.sendMyEvent.emit(this.visible1);
      this.service.addData(true, {id:'admin', name:'사용자'});

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
  */
}
