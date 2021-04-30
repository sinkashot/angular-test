import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { INFORMATION } from './MyType';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  public readonly myData : INFORMATION = {
    data1 : 'data1',
    data2 : 1433,
    data3 : ['data3-1','data3-2']
  }

  constructor() { }

  private FACTORY : BehaviorSubject<any> = new BehaviorSubject({});
  public readonly TV : Observable<any> = this.FACTORY.asObservable();

  public addData(arg : boolean, loginInformation ?: any) : void {
    if (arg) {
      this.FACTORY.next(loginInformation);
    }
  }
}
