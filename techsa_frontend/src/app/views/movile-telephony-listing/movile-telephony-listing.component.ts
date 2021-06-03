import { Component, OnInit } from '@angular/core';

import { MovileTelephonyService } from '../../services/moviletelephony.service';
import { PlanMovil } from '../../models/PlanMovil';


@Component({
  selector: 'app-movile-telephony-listing',
  templateUrl: './movile-telephony-listing.component.html',
  styleUrls: ['./movile-telephony-listing.component.css']
})
export class MovileTelephonyListingComponent implements OnInit {

  dataSource = [];

  constructor(public moviletelephonyservice: MovileTelephonyService) { }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {

    const data = await this.moviletelephonyservice.getMobilePlans();
    console.log(data);
    
  }

}
