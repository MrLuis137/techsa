import { Component, OnInit } from '@angular/core';
import { MobiledeviceService } from '../../services/mobiledevice.service';
import { DeviceService } from '../../services/device.service';
import { MovileTelephonyService } from '../../services/moviletelephony.service';
import { PlanMovil } from '../../models/PlanMovil';
import { Dispositivo } from '../../models/Dispositivo';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';




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
    public deviceService:DeviceService,
    public auth:AuthService,
    public router:Router,
    private carrito:CartService) { }

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

    // console.log("Listas");
    // console.log(this.tempMobilePlan);
    // console.log(this.tempDevice);
  }

  //addToCart
  //Añade un planFijo al carrito
  async addToCart(planMovil:any){
    
    if (this.auth.loggedIn) {   //Si ya está logueado, puede adquirir el servicio 
      console.log("TelephonyListing:addtoCart:Añadiendo Producto al carrito");
      let identificador = planMovil.idServicioId;
      if(identificador == undefined){
        identificador = planMovil.IdServicio;
      }

      //Añadir al carrito
      try {
        const token = localStorage.getItem('access_token');
        const id = await this.auth.getUserId(token);
        await this.carrito.setServicioByUserId(id.slice(10,14),identificador);
        alert("Plan Movil Añadido al carrito");
      } catch (err) {
        alert("Error añadiendo al carrito");
      }


    }else{  //Si no está logueado recibe un mensaje de error
      if(confirm("Debe inicar sesión para adquirir el producto \n ¿Desea ir a la página de LogIn?")){
        this.router.navigate(['login']);
      }
    }
  }

  async fillTemps(){
    for( const element of  this.mobileDeviceList){
      //console.log(element.idServicioIdId);

      const mobilePlan = await this.mobileService.getPlanMovilById(element.idPlanID);
      const device = await this.deviceService.getDispositivobyId(element.idDispositivoId);

      let newMobilePlan = new PlanMovil;
      newMobilePlan.ID = mobilePlan[0].ID;
      newMobilePlan.NombrePlan = mobilePlan[0].NombrePlan;
      newMobilePlan.TipoPlan = mobilePlan[0].TipoPlan;
      newMobilePlan.PrecioMensual = element.Precio;
      newMobilePlan.Minutos = mobilePlan[0].Minutos;
      newMobilePlan.GBInternet = mobilePlan[0].GBInternet;
      newMobilePlan.CostoLlamada = mobilePlan[0].CostoLlamada;
      newMobilePlan.IdServicio = element.idServicioIdId;

      this.tempMobilePlan.push(newMobilePlan);
      this.tempDevice.push(device);
    }
    //console.log(this.tempMobilePlan);

  }

}
