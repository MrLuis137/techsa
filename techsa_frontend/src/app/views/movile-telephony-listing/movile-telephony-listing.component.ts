import { Component, OnInit } from '@angular/core';
import { MobiledeviceService } from '../../services/mobiledevice.service';
import { DeviceService } from '../../services/device.service';
import { MovileTelephonyService } from '../../services/moviletelephony.service';

import { PlanMovil } from '../../models/PlanMovil';






@Component({
  selector: 'app-movile-telephony-listing',
  templateUrl: './movile-telephony-listing.component.html',
  styleUrls: ['./movile-telephony-listing.component.css']
})
export class MovileTelephonyListingComponent implements OnInit {

  
  prepaidList = [];
  postpaidList = [];
  mobileDeviceList = [];
  tempMobilePlan = [];
  tempDevice = [];

  constructor(public mobileService: MovileTelephonyService, 
    public mobileDeviceService: MobiledeviceService,
    public deviceService:DeviceService) { }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {

    const prepaidData = await this.mobileService.getPlanMovilByIdAll('1202');
    const postpaidData = await this.mobileService.getPlanMovilByIdAll('1201');
    const mobileDeviceData = await this.mobileDeviceService.getPlanMovilDispositivoAll();

    this.prepaidList = prepaidData;
    this.postpaidList = postpaidData;
    this.mobileDeviceList = mobileDeviceData;

    // console.log(this.prepaidList);
    // console.log(this.postpaidList);
    // console.log(this.mobileDeviceList);

    this.fillTemps();
  }

  async fillTemps(){
    this.mobileDeviceList.forEach(element => {
      this.getTempDevice(element.idDispositivoId);
      this.getTempMobilePlan(element.idPlanID);
    });

    console.log(this.tempDevice);
    console.log(this.tempMobilePlan);
  }

  //Retorna un plan movil para llenarlo en el html
  async getTempMobilePlan(id:string){
    const mobilePlan = await this.mobileService.getPlanMovilById(id);
    this.tempMobilePlan.push(mobilePlan);

  }

  //Retorna 
  async getTempDevice(id:string){
    const device = await this.deviceService.getDispositivobyId(id);
    this.tempDevice.push(device);
  }

}
