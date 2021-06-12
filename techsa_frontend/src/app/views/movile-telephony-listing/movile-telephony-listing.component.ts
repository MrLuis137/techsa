import { Component, OnInit } from '@angular/core';
import { MobiledeviceService } from '../../services/mobiledevice.service';
import { DeviceService } from '../../services/device.service';
import { MovileTelephonyService } from '../../services/moviletelephony.service';
import { PlanMovil } from '../../models/PlanMovil';
import { Dispositivo } from '../../models/Dispositivo';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { router } from '../../../../../techsa_backend/src/logic/Logic';




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
    public deviceService:DeviceService,
    public auth:AuthService,
    public router:Router) { }

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

  //addToCart
  //Añade un planFijo al carrito
  addToCart(planMovil:PlanMovil){
    
    if (this.auth.loggedIn) {   //Si ya está logueado, puede adquirir el servicio 
      console.log("TelephonyListing:addtoCart:Añadiendo Producto al carrito");
      console.log(planMovil);
      //Añadir al carrito
    }else{  //Si no está logueado recibe un mensaje de error
      if(confirm("Debe inicar sesión para adquirir el producto \n ¿Desea ir a la página de LogIn?")){
        this.router.navigate(['login']);
      }
    }
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
