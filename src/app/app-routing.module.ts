import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavasComponent } from './javas/javas.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudenttestComponent } from './studenttest/studenttest.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
{path:"table",component:TableComponent},
{path:"login",component:LoginComponent},
{path:"registration",component:RegistrationComponent},
{path:"studenttest",component:StudenttestComponent},
{path:"calculator",component:JavasComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
