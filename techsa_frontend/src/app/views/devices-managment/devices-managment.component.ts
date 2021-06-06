import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service';


@Component({
  selector: 'app-devices-managment',
  templateUrl: './devices-managment.component.html',
  styleUrls: ['./devices-managment.component.css']
})
export class DevicesManagmentComponent implements OnInit {
  data=[]
  constructor(
    private base:DeviceService
    ) { }

  async ngOnInit() {
    this.data=await this.base.getDispositivoAll();
  }
  async delete(deviceId:string){
    console.log(deviceId)
    this.base.deleteDispositivo(deviceId)
    this.data=await this.base.getDispositivoAll();
  }

}
