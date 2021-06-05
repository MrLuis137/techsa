import { Component, OnInit } from '@angular/core';
import { PlanfijoService } from '../../services/planfijo.service';
import { PlanFijo } from '../../models/PlanFijo';

@Component({
  selector: 'app-telephony-listing',
  templateUrl: './telephony-listing.component.html',
  styleUrls: ['./telephony-listing.component.css']
})
export class TelephonyListingComponent implements OnInit {
  telephonyListingData = []

  constructor(public planFijoService:PlanfijoService) { }

  ngOnInit(): void {
    this.refresh();
  }

  async refresh(){
    const data = await this.planFijoService.getPlanFijoAll();
    this.telephonyListingData = data;
    console.log(this.telephonyListingData);
  }

}
