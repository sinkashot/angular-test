import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { INFORMATION } from './MyType';
import { MyServiceService } from './my-service.service';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';

const myData : INFORMATION = {
  data1 : 'data1',
  data2 : 1433,
  data3 : ['data3-1','data3-2']
}

const router : Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'dashboard', component : DashboardComponent, canActivate:[AuthGuard]},
  {path : '', redirectTo : '/login', pathMatch : 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router, {enableTracing:false}),
  ],
  providers: [
    // {provide:'sending_name', useValue:myData}
    MyServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
