import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { INFORMATION } from './MyType';

const myData : INFORMATION = {
  data1 : 'data1',
  data2 : 1433,
  data3 : ['data3-1','data3-2']
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:'sending_name', useValue:myData}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
