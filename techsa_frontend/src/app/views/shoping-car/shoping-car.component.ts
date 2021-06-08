import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import * as bodyParser from 'body-parser';
import { DeviceService } from '../../services/device.service';


@Component({
  selector: 'app-shoping-car',
  templateUrl: './shoping-car.component.html',
  styleUrls: ['./shoping-car.component.css']
})
export class ShopingCarComponent implements OnInit {
   
  devicesList
  servicesList
  constructor(public car:CartService, public devices: DeviceService) {
   }

  ngOnInit(): void {
    
  this.servicesList = this.getCarServices()
  this.devicesList = this.getCarDevices()
  this.car.setDispositivoByUserId('2201', '5403')
  this.car.setServicioByUserId('2201','1207')
  console.log(this.devicesList)
  }

  async getCarServices(){
    let data = []
    await this.car.getServiciosByUserId('2201').then(function (res){
     data = res
      
    })
    return data
  
  }

  async getCarDevices(){
    let data = await this.car.getDispositivosByUserId('2221').then(function (res){
      return res
    })
    console.log(data)
    return data
  }
  
  tempCallback(){
    console.log("Eliminado :3")
  }

}
