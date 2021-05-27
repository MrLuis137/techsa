import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { NewEmployeeComponent } from './views/new-employee-form/new-employee.component';
import { EployeesManagmentComponent } from './views/eployees-managment/eployees-managment.component';
import { NewDeviceFormComponent } from './views/new-device-form/new-device-form.component';
import { RegisterComponent } from './views/register/register.component';
import { TelephonyListingComponent } from './views/telephony-listing/telephony-listing.component';
import { MovileTelephonyListingComponent } from './views/movile-telephony-listing/movile-telephony-listing.component';
import { InternetListingComponent } from './views/internet-listing/internet-listing.component';
import { DevicesListingComponent } from './views/devices-listing/devices-listing.component';
import { MyServicesComponent } from './views/my-services/my-services.component';
import { OnlinePayComponent } from './views/online-pay/online-pay.component';
import { CoverageAreasComponent } from './views/coverage-areas/coverage-areas.component';
import { ShopingCarComponent } from './views/shoping-car/shoping-car.component';
import { DevicesManagmentComponent } from './views/devices-managment/devices-managment.component';
import { SeervicesManagmentComponent } from './views/seervices-managment/seervices-managment.component';



const routes: Routes = [

  //LogIn
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},

  //*Admin*
  //Employees-Management
  {path:'employees-managment',component: EployeesManagmentComponent},
  {path:'new-employee',component: NewEmployeeComponent},
  
  //Services-Management
  {path:'seervices-managment',component: SeervicesManagmentComponent},

  //Devices-Management
  {path:'devices-managment',component: DevicesManagmentComponent},
  {path:'new-device', component: NewDeviceFormComponent},

  //*Client*
  //Services Info Section 
  {path:'telephony-listing', component: TelephonyListingComponent},
  {path:'movile-telephony-listing', component: MovileTelephonyListingComponent},
  {path:'internet-listing', component: InternetListingComponent},
  {path:'devices-listing', component: DevicesListingComponent},

  //My Services Section
  {path:'my-services', component: MyServicesComponent},
  {path:'online-pay', component: OnlinePayComponent},

  //others
  {path:'coverage-areas', component: CoverageAreasComponent},
  {path:'shoping-car', component: ShopingCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
