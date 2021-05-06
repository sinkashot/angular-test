import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

declare type MyType = {
  text : any;
  number : any;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  builder : FormBuilder;
  rows : FormArray;
  single : FormControl;
  formGrp : FormGroup;

  DataArray : Array<MyType> = [];

  constructor(fb : FormBuilder, private route : Router, private service : MyServiceService) {
    this.builder = fb;
    this.rows = this.builder.array([]);
    this.single = new FormControl('Title', Validators.required);
    this.formGrp = this.builder.group({'row_data':this.rows, 'single_data':this.single});
  }

  get userName() : string {
    return this.service.user.name;
  }

  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      // this.DataArray.push({text:'abcd'+index, number:index+1});
      let group = this.builder.group({
        text : this.builder.control('abcd'+index, Validators.minLength(5)),
        number : this.builder.control(Validators.required)
      });

      this.rows.push(group);
    }
  }

  showData(arg?) {
    if (arg) {
      console.log(arg);
    } else {
      console.log(this.DataArray);
    }
  }

  logout() {
    localStorage.clear();
    alert("log-out");
    this.route.navigate(['/login']);
  }

}
