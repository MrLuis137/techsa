import { Component, OnInit } from '@angular/core';
import { InternetserviceService } from 'src/app/services/internetservice.service';
import { PlanfijoService } from 'src/app/services/planfijo.service';
import { MovileTelephonyService } from '../../services/moviletelephony.service';
import { PlanInternet } from '../../models/PlanInternet';

import { async } from '@angular/core/testing';



@Component({
  selector: 'app-internet-listing',
  templateUrl: './internet-listing.component.html',
  styleUrls: ['./internet-listing.component.css']
})
export class InternetListingComponent implements OnInit {

  internetList = [];
  internetLandLineList = [];
  internetLandlineMobileList = [];

  internetLandline_And_MobilesPlans = [];

  constructor(public mobileTelephonyService:MovileTelephonyService, public planFijoService:PlanfijoService, public internetService:InternetserviceService) { }

  ngOnInit(): void {
    this.refresh();
  }

  async refresh() {

    const internetListData = await this.internetService.getPlanInternetAll();
    const internetLandlineListData = await this.internetService.getPlanInternetFijoAll();
    const internetLandlineMobileListData  = await this.internetService.getPlanInternetFijoMovilAll();
    
    this.internetList = internetListData;
    this.internetLandLineList = internetLandlineListData;
    this.internetLandlineMobileList = internetLandlineMobileListData;

    this.internetLandline();
    this.internetLandlineMobile();
    console.log(this.internetList);
    console.log(this.internetLandline_And_MobilesPlans);

  }

  async internetPlans(){

  }

  //Devuelve una lista con todos los planes fijos asociados a un plan de internet 
  async internetLandline(){

    //const internetLandlineData = await this.internetService.getPlanInternetFijo_IdInternet(idInternet);
    
    for( const element of  this.internetLandLineList){

      const tempFijo = await this.planFijoService.getPlanFijobyId(element.idPlanFijoID);
      const tempInternet = await this.internetService.getPlanInternet_idInternet(element.idPlanInternetID);
      const tempInternetModel:PlanInternet = new PlanInternet;

      tempInternetModel.ID = element.ID;
      tempInternetModel.Descripcion = tempFijo[0].Minutos + " minutos + \n" + tempInternet[0].Descripcion;
      tempInternetModel.PrecioMensual = element.PrecioMensual;
      tempInternetModel.NombrePlan = "Techsa" + tempInternet[0].Velocidad + "@FIJO" ;
      tempInternetModel.IdServicio = element.idServicioId;
      tempInternetModel.Velocidad = tempInternet[0].Velocidad;

      this.internetLandline_And_MobilesPlans.push(tempInternetModel);
    }
  }




  //Devuele una lista con todos los planes moviles y fijos asociados a un plan de internet 
  async internetLandlineMobile( ){
    
    for( const element of  this.internetLandlineMobileList){

      const tempFijo = await this.planFijoService.getPlanFijobyId(element.idPlanFijoID);
      const tempInternet = await this.internetService.getPlanInternet_idInternet(element.idPlanInternetID);
      const tempMobile = await this.mobileTelephonyService.getPlanMovilById(element.idPlanMovilID)
      const tempInternetModel:PlanInternet = new PlanInternet;
 
      tempInternetModel.ID = element.ID;
      tempInternetModel.Descripcion = tempFijo[0].Minutos + " minutos Fijo + " + tempInternet[0].Descripcion+ " + " + tempMobile.Descripcion + " Movil";
      tempInternetModel.PrecioMensual = element.PrecioMensual;
      tempInternetModel.NombrePlan = "Techsa FULL" + tempInternet[0].Velocidad;
      tempInternetModel.IdServicio = element.idServicioId;
      tempInternetModel.Velocidad = tempInternet[0].Velocidad;

      this.internetLandline_And_MobilesPlans.push(tempInternetModel);
    }
  }

  chooseGradient(vel:number){
    if (vel == 50) {
      return {
        'container':true,
         'internet-section':true,
          'gradient50':true
      };
    };
    if (vel == 100) {
      return {
        'container':true,
         'internet-section':true,
          'gradient100':true
      };
    };
    if (vel == 200) {
      return {
        'container':true,
         'internet-section':true,
          'gradient200':true
      };
    }else {
      return {
        'container':true,
         'internet-section':true,
          'gradient30':true
      };
    }

  }

  addToCart(planInternet:PlanInternet){
    console.log(planInternet);
    //this.car.addPhone(device)
  }

}
