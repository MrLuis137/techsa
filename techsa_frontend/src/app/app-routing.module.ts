import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { NewEmployeeComponent } from './views/new-employee-form/new-employee.component';
import { EployeesManagmentComponent } from './views/eployees-managment/eployees-managment.component';
import { NewDeviceFormComponent } from './views/new-device-form/new-device-form.component';
import { RegisterComponent } from './views/register/register.component';



const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'new-employee',component: NewEmployeeComponent},
  {path:'employees-managment',component: EployeesManagmentComponent},
  {path:'new-device', component: NewDeviceFormComponent},
  {path:'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
