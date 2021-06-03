import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-devices-managment',
  templateUrl: './devices-managment.component.html',
  styleUrls: ['./devices-managment.component.css']
})
export class DevicesManagmentComponent implements OnInit {
  data=[]
  constructor(private base:UsersService) { }

  async ngOnInit() {
    this.data=await this.base.getDevices();
  }
  async delete(deviceId:number){
    console.log(deviceId)
    this.base.deleteDevice(deviceId)
    this.data=await this.base.getDevices();
  }

}
