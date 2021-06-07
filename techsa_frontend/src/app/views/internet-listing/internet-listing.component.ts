import { Component, OnInit } from '@angular/core';
import { InternetserviceService } from 'src/app/services/internetservice.service';
import { PlanfijoService } from 'src/app/services/planfijo.service';
import { MovileTelephonyService } from '../../services/moviletelephony.service';



@Component({
  selector: 'app-internet-listing',
  templateUrl: './internet-listing.component.html',
  styleUrls: ['./internet-listing.component.css']
})
export class InternetListingComponent implements OnInit {

  internetList = [];
  internetLandlineMobileList = []
  

  constructor(public mobileTelephonyService:MovileTelephonyService, public planFijoService:PlanfijoService, public internetService:InternetserviceService) { }

  ngOnInit(): void {
    
  }

  async refresh() {

    const internetData = [];
    const internetLandLineData = [];
    const internetLandLineMobileData = [];

  }

  //Devuelve una lista con todos los planes fijos asociados a un plan de internet 
  async internetLandline(idInternet:string){
    const internetLandlineList = await this.internetService.getPlanInternetFijo_IdInternet(idInternet);
    console.log(internetLandlineList);

  }


  //Devuele una lista con todos los planes moviles y fijos asociados a un plan de internet 
  async internetLandlineMobile( idInternet:string){
    const internetLandlineMobileList = await this.internetService.getPlanInternetFijoMovil_IdInternet(idInternet);
    console.log(internetLandlineMobileList);
  }



}
