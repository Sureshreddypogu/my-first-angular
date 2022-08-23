import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudenttestComponent } from './studenttest/studenttest.component';
import { JavasComponent } from './javas/javas.component';
import { ListofemployeesComponent } from './listofemployees/listofemployees.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { RightsideComponent } from './rightside/rightside.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LoginComponent,
    RegistrationComponent,
    StudenttestComponent,
    JavasComponent,
    ListofemployeesComponent,
    ParentCompComponent,
    ChildCompComponent,
    HeaderComponent,
    FooterComponent,
    LeftsideComponent,
    RightsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
