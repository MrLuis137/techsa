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
import { NewInternetFormComponent } from './views/new-internet-form/new-internet-form.component';//aqui
import { NewlandlineFormComponent } from './views/new-landline-form/new-landline-form.component';//aqui
import { NewMobilePhoneFormComponent } from './views/new-mobilephone-form/new-mobilephone-form.component';//aqui
import { CoverageAreasComponent } from './views/coverage-areas/coverage-areas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ClientNavbarComponent } from './shared/client-navbar/client-navbar.component';
import { AdminNavbarComponent } from './shared/admin-navbar/admin-navbar.component';
import { ModifyEmployeeComponent } from './views/modify-employee/modify-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { CartDeviceElementComponent } from './views/cart-device-element/cart-device-element.component';
import { CartServiceElementComponent } from './views/cart-service-element/cart-service-element.component';

import { ModifyInternetComponent } from './views/modify-internet/modify-internet.component';
import { ModifyLandlineComponent } from './views/modify-landline/modify-landline.component';
import { ModifyMobilePhoneComponent } from './views/modify-mobilephone/modify-mobilephone.component';
import { InternetManagmentComponent } from './views/internet-managment/internet-managment.component';
import { LandlineManagmentComponent } from './views/landline-managment/landline-managment.component';
import { MobilephoneManagmentComponent } from './views/mobilephone-managment/mobilephone-managment.component';
import { ModifyDeviceComponent } from './views/modify-device/modify-device.component';
import { ModifyContratoComponent } from './views/modify-contrato/modify-contrato.component';

//Authorization
import {JwtModule} from '@auth0/angular-jwt';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth.service';


//Para buscar el token de autorizacion
export function tokenGetter(){
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TelephonyListingComponent,
    MovileTelephonyListingComponent,
    InternetListingComponent,
    
    MobilephoneManagmentComponent,
    InternetManagmentComponent,
    LandlineManagmentComponent,
    ModifyMobilePhoneComponent,
    ModifyInternetComponent,
    ModifyLandlineComponent,
    NewInternetFormComponent,
    NewlandlineFormComponent,
    NewMobilePhoneFormComponent,
    DevicesListingComponent,
    ModifyDeviceComponent,

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
    ModifyDeviceComponent,
    CartDeviceElementComponent,
    CartServiceElementComponent,
    ModifyContratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains:['localhost:4201', 'localhost:4200/Mapa/Mapa.html'],
        disallowedRoutes:['localhost:4201/auth']
      }
    })
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
