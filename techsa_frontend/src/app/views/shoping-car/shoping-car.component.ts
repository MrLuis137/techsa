import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CartService } from '../../services/cart.service';
import * as bodyParser from 'body-parser';
import { DeviceService } from '../../services/device.service';
import { CartDeviceElementComponent } from '../cart-device-element/cart-device-element.component';
import { PlanfijoService } from '../../services/planfijo.service';
import { PlanInternetPlanFijo } from '../../../../../techsa_backend/src/entity/PlanInternetPlanFijo';
import { InternetserviceService } from '../../services/internetservice.service';
import { MovileTelephonyService } from '../../services/moviletelephony.service';
import { CartServiceElementComponent } from '../cart-service-element/cart-service-element.component';
import { ContratoService } from '../../services/contrato.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-shoping-car',
  templateUrl: './shoping-car.component.html',
  styleUrls: ['./shoping-car.component.css']
})
export class ShopingCarComponent implements OnInit {
  @ViewChild("deviceContainer", { read: ViewContainerRef }) deviceContainer;
  @ViewChild("serviceContainer", { read: ViewContainerRef }) serviceContainer;
  
  devicesList = [] 
  servicesList = []
  PlanList = []
  total = 0
  id
  constructor(private car:CartService,
    private Planfijo:PlanfijoService, 
    private internet:InternetserviceService,
    private movileTelephony :MovileTelephonyService,
    private devices: DeviceService, 
    private resolver: ComponentFactoryResolver,
    private auth: AuthService
    , private contract: ContratoService) {
   }

  async ngOnInit() {
  const token = localStorage.getItem('access_token');
  this.id = await this.auth.getUserId(token);
  
  this.getCarServices()
  this.getCarDevices()
  console.log(this.devicesList)
  console.log(this.total)
  }

  async getCarServices(){
    let data = []
    await this.car.getServiciosByUserId(this.id.slice(10,14)).then(function ( res ){
     data = res
    })
    for(let i = 0; i< data.length; i++){
      //this.createComponent(data[i])
      this.getService(data[i].IdServicio)
      console.log(data[i])
      this.servicesList.push(data[i])
    }
    return data
  
  }

  async getCarDevices(){
    let data = await this.car.getDispositivosByUserId(this.id.slice(10,14)).then(function (res){
      return res
    })
    console.log(data)
    for(let i = 0; i< data.length; i++){
      this.createDeviceComponent(data[i])
      this.total += data[i].Precio
      this.devicesList.push(data[i])
    }
    return data
  }

  async getService(id){
    let service = await this.car.getServicesByServiceID(id)
      this.total += service.PrecioMensual
      this.createServiceComponent(service)
      this.PlanList.push(service)
  }

  createDeviceComponent(device) {
    //this.deviceContainer.clear(); 
    console.log(this.total)
    const factory = this.resolver.resolveComponentFactory(CartDeviceElementComponent);
    const nt:ComponentRef<CartDeviceElementComponent> = this.deviceContainer.createComponent(factory);
    nt.instance.device = device
  }
  
  createServiceComponent(service) {
    //this.deviceContainer.clear(); 
    console.log(service)
    const factory = this.resolver.resolveComponentFactory(CartServiceElementComponent);
    const nt:ComponentRef<CartServiceElementComponent> = this.serviceContainer.createComponent(factory);
    
    nt.instance.service = service
  }
  
  confirmOrder(){
    console.log(this.servicesList, this.devicesList)
    this.contract.newContrato(this.servicesList,  this.devicesList, this.PlanList,this.total, this.id.slice(10,14))
  }

}
