import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesListingComponent } from './views/devices-listing/devices-listing.component';
import { LoginComponent } from './views/login/login.component';
import { TelephonyListingComponent } from './views/telephony-listing/telephony-listing.component';



const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'telephony-listing', component:TelephonyListingComponent},
  {path:'devices-listing', component:DevicesListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
