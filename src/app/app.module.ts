import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudenttestComponent } from './studenttest/studenttest.component';
import { JavasComponent } from './javas/javas.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LoginComponent,
    RegistrationComponent,
    StudenttestComponent,
    JavasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
