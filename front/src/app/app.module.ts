
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CreateEmployeeComponent } from './employee/create-employee.component';

import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';


import {  HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { SearchbyorderIdComponent } from './searchbyorder-id/searchbyorder-id.component';



@NgModule({
  declarations: [
    AppComponent,
    
    
  
    
    
    
    EmployeeListComponent,
    
    EmployeeComponent,
    CreateEmployeeComponent,
    SearchComponent,
    UpdateComponent,
    SearchbyorderIdComponent
    
    
    

    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
