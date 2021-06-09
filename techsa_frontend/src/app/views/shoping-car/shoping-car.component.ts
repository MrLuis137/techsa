import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CartService } from '../../services/cart.service';
import * as bodyParser from 'body-parser';
import { DeviceService } from '../../services/device.service';
import { CartDeviceElementComponent } from '../cart-device-element/cart-device-element.component';


@Component({
  selector: 'app-shoping-car',
  templateUrl: './shoping-car.component.html',
  styleUrls: ['./shoping-car.component.css']
})
export class ShopingCarComponent implements OnInit {
  @ViewChild("deviceContainer", { read: ViewContainerRef }) deviceContainer;
  
  devicesList
  servicesList
  constructor(private car:CartService, private devices: DeviceService, private resolver: ComponentFactoryResolver) {
   }

  ngOnInit(): void {
    
  this.servicesList = this.getCarServices()
  //this.devicesList = this.getCarDevices()
  //this.car.setDispositivoByUserId('2201', '5403')
  //this.car.setServicioByUserId('2201','1207')
  console.log(this.devicesList)
  }

  async getCarServices(){
    let data = []
    await this.car.getServiciosByUserId('2201').then(function (res){
     data = res
     for(let i = 0; i< data.length; i++){
      //this.createComponent(data[i])
      console.log(data[i])
    }
    })
    return data
  
  }

  async getCarDevices(){
    let data = await this.car.getDispositivosByUserId('2201').then(function (res){
      return res
    })
    console.log(data)
    for(let i = 0; i< data.length; i++){
      this.createComponent(data[i])
      console.log(data[i])
    }
    return data
  }
  
  createComponent(device) {
    //this.deviceContainer.clear(); 
    const factory = this.resolver.resolveComponentFactory(CartDeviceElementComponent);
    const nt:ComponentRef<CartDeviceElementComponent> = this.deviceContainer.createComponent(factory);
    nt.instance.device = device
  }
  
  tempCallback(){
    console.log("Eliminado :3")
  }

}
