import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { NewEmployeeComponent } from './views/new-employee-form/new-employee.component'



const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'new-employee',component: NewEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
