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
    try {
      await this.base.deleteDispositivo(deviceId);
      alert("Dispositivo Eliminado")
      location.reload();
    } catch (err) {
      alert("El dispositivo no se pudo eliminar.\ Hubo un error, o está asociado a un plan")
    }
    this.data = await this.base.getDispositivoAll();
  }

}
