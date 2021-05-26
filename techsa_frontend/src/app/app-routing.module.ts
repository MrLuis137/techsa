import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesListingComponent } from './views/devices-listing/devices-listing.component';
import { LoginComponent } from './views/login/login.component';
import { TelephonyListingComponent } from './views/telephony-listing/telephony-listing.component';
import { NewEmployeeComponent } from './views/new-employee-form/new-employee.component';
import { EployeesManagmentComponent } from './views/eployees-managment/eployees-managment.component';



const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'telephony-listing', component:TelephonyListingComponent},
  {path:'devices-listing', component:DevicesListingComponent},
  {path:'new-employee',component: NewEmployeeComponent},
  {path:'employees-managment',component: EployeesManagmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
