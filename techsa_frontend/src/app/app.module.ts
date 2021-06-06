import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { TelephonyListingComponent } from './views/telephony-listing/telephony-listing.component';
import { MovileTelephonyListingComponent } from './views/movile-telephony-listing/movile-telephony-listing.component';
import { InternetListingComponent } from './views/internet-listing/internet-listing.component';
import { DevicesListingComponent } from './views/devices-listing/devices-listing.component';
import { ShopingCarComponent } from './views/shoping-car/shoping-car.component';
import { MyServicesComponent } from './views/my-services/my-services.component';
import { OnlinePayComponent } from './views/online-pay/online-pay.component';
import { EployeesManagmentComponent } from './views/eployees-managment/eployees-managment.component';
import { NewEmployeeComponent } from './views/new-employee-form/new-employee.component';
import { SeervicesManagmentComponent } from './views/seervices-managment/seervices-managment.component';
import { NewServicesFormComponent } from './views/new-services-form/new-services-form.component';
import { DevicesManagmentComponent } from './views/devices-managment/devices-managment.component';
import { NewDeviceFormComponent } from './views/new-device-form/new-device-form.component';
import { CoverageAreasComponent } from './views/coverage-areas/coverage-areas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ClientNavbarComponent } from './shared/client-navbar/client-navbar.component';
import { AdminNavbarComponent } from './shared/admin-navbar/admin-navbar.component';
import { ModifyEmployeeComponent } from './views/modify-employee/modify-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { ModifyDeviceComponent } from './views/modify-device/modify-device.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TelephonyListingComponent,
    MovileTelephonyListingComponent,
    InternetListingComponent,
    DevicesListingComponent,
    ShopingCarComponent,
    MyServicesComponent,
    OnlinePayComponent,
    EployeesManagmentComponent,
    NewEmployeeComponent,
    SeervicesManagmentComponent,
    NewServicesFormComponent,
    DevicesManagmentComponent,
    NewDeviceFormComponent,
    CoverageAreasComponent,
    ClientNavbarComponent,
    AdminNavbarComponent,
    ModifyEmployeeComponent,
    ModifyDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
