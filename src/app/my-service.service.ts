import { stringify } from '@angular/compiler/src/util';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { USER } from './MyType';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private ws : WebSocket = null;
  public openEvent: EventEmitter<Event> = new EventEmitter();
  public messageEvent: EventEmitter<any> = new EventEmitter();
  public errorEvent: EventEmitter<ErrorEvent> = new EventEmitter();

  user : USER = {
    id : '',
    name : ''
  };

  constructor() {
    // this.init();
  }

  public init() : void{
    this.ws = new WebSocket("ws://localhost:8080/websocket");
    console.log("connecting...");
    
    this.ws.onopen = (event : Event) => {
      console.log("open : ", event);
      this.openEvent.emit(event);
      console.log("connected.");
    }

    // 메세지 이벤트
    this.ws.onmessage = (event: MessageEvent) => {
      let msg : string;
      this.messageEvent.emit(msg);
    };

    // 오류 이벤트
    this.ws.onerror = (event: ErrorEvent) => {
      console.log("error", event);

      this.errorEvent.emit(event);
    };
  }

  private FACTORY : BehaviorSubject<any> = new BehaviorSubject({});
  public readonly TV : Observable<any> = this.FACTORY.asObservable();

  public addData(arg : boolean, loginInformation ?: any) : void {
    if (arg) {
      this.FACTORY.next(loginInformation);
    }
  }
}
