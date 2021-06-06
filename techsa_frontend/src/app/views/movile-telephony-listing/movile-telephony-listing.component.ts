import { Component, OnInit } from '@angular/core';

import { MovileTelephonyService } from '../../services/moviletelephony.service';
import { PlanMovil } from '../../models/PlanMovil';
import { MobiledeviceService } from '../../services/mobiledevice.service';



@Component({
  selector: 'app-movile-telephony-listing',
  templateUrl: './movile-telephony-listing.component.html',
  styleUrls: ['./movile-telephony-listing.component.css']
})
export class MovileTelephonyListingComponent implements OnInit {

  
  prepaidList = [];
  postpaidList = [];
  mobileDeviceList = [];

  constructor(public mobileService: MovileTelephonyService, public mobileDeviceService: MobiledeviceService) { }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {

    const data = await this.mobileDeviceService.getPlanMovilDispositivoAll();
    this.mobileDeviceList = data;
    console.log(data);
  }

}
