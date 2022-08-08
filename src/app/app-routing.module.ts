import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudenttestComponent } from './studenttest/studenttest.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
{path:"table",component:TableComponent},
{path:"login",component:LoginComponent},
{path:"registration",component:RegistrationComponent},
{path:"studenttest",component:StudenttestComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
