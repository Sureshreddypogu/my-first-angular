import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavasComponent } from './javas/javas.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { ListofemployeesComponent } from './listofemployees/listofemployees.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { RegistrationComponent } from './registration/registration.component';
import { RightsideComponent } from './rightside/rightside.component';
import { StudenttestComponent } from './studenttest/studenttest.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
{path:"table",component:TableComponent},
{path:"login",component:LoginComponent},
{path:"registration",component:RegistrationComponent},
{path:"studenttest",component:StudenttestComponent},
{path:"calculator",component:JavasComponent},
{path:"listofemployees",component:ListofemployeesComponent},
{path:"leftside",component:LeftsideComponent},
{path:"rightside",component:RightsideComponent},
{path:"news",component:NewsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
