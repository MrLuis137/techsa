import { Component, OnInit } from '@angular/core';
import { MobiledeviceService } from '../../services/mobiledevice.service';
import { DeviceService } from '../../services/device.service';
import { MovileTelephonyService } from '../../services/moviletelephony.service';
import { PlanMovil } from '../../models/PlanMovil';
import { Dispositivo } from '../../models/Dispositivo';




@Component({
  selector: 'app-movile-telephony-listing',
  templateUrl: './movile-telephony-listing.component.html',
  styleUrls: ['./movile-telephony-listing.component.css']
})
export class MovileTelephonyListingComponent implements OnInit {

  
  prepaidList = [];
  postpaidList = [];
  mobileDeviceList = [];

  tempMobilePlan:PlanMovil[] = [];
  tempDevice = [];

  constructor(public mobileService: MovileTelephonyService, 
    public mobileDeviceService: MobiledeviceService,
    public deviceService:DeviceService) { }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {

    const prepaidData = await this.mobileService.getPlanMovilByIdAll('Prepago');
    const postpaidData = await this.mobileService.getPlanMovilByIdAll('Postpago');
    const mobileDeviceData = await this.mobileDeviceService.getPlanMovilDispositivoAll();

    this.prepaidList = prepaidData;
    this.postpaidList = postpaidData;
    this.mobileDeviceList = mobileDeviceData;

    console.log(this.mobileDeviceList);

    await this.fillTemps();
  }

  addToCart(planMovil:PlanMovil){
    console.log(planMovil);
  }

  async fillTemps(){
    for( const element of  this.mobileDeviceList){
      console.log(element.idServicioIdId);

      const mobilePlan = await this.mobileService.getPlanMovilById(element.idPlanID);
      const device = await this.deviceService.getDispositivobyId(element.idDispositivoId);

      let newMobilePlan = new PlanMovil;
      newMobilePlan.ID = mobilePlan.ID;
      newMobilePlan.NombrePlan = mobilePlan.NombrePlan;
      newMobilePlan.TipoPlan = mobilePlan.TipoPlan;
      newMobilePlan.PrecioMensual = element.Precio;
      newMobilePlan.Minutos = mobilePlan.Minutos;
      newMobilePlan.GBInternet = mobilePlan.GBInternet;
      newMobilePlan.CostoLlamada = mobilePlan.CostoLlamada;
      newMobilePlan.IdServicio = element.idServicioIdId;

      this.tempMobilePlan.push(newMobilePlan);
      this.tempDevice.push(device);
    }
    console.log(this.tempMobilePlan);

  }

}
