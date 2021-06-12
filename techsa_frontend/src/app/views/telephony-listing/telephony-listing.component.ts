import { Component, OnInit } from '@angular/core';
import { PlanfijoService } from '../../services/planfijo.service';
import { PlanFijo } from '../../models/PlanFijo';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telephony-listing',
  templateUrl: './telephony-listing.component.html',
  styleUrls: ['./telephony-listing.component.css']
})

//Componente que despliega la lista de telefonía fija 
export class TelephonyListingComponent implements OnInit {

  telephonyListingData:PlanFijo[] = []  //Lista de planes fijos que se muestran en el 

  constructor(public planFijoService:PlanfijoService, public router:Router) { }


  //Función que se ejecuta cuando secarga la página
  ngOnInit(): void {
    this.refresh();  //LLama a refresh
    console.log(this.telephonyListingData);
  }

  //Pide al backend la lista de planes fijos y los
  //guarda en la lista de telephonyListingData
  async refresh(){
    const data = await this.planFijoService.getPlanFijoAll(); //Pide la lista al backend
    //Por cada elemento de la data, crea un nuevo planFijo 
    data.forEach(element => {
      let newPlanFijo = new PlanFijo;
      newPlanFijo.ID = element.ID;
      newPlanFijo.NombrePlan = element.NombrePlan;
      newPlanFijo.IdServicio = element.idServicioId;
      newPlanFijo.Minutos = element.Minutos;
      newPlanFijo.FijoTechsa = element.FijoTechsa;
      newPlanFijo.FijoOperador = element.FijoOperador;
      newPlanFijo.MovilCualquiera = element.MovilCualquiera;
      newPlanFijo.PrecioMensual = element.PrecioMensual;
      this.telephonyListingData.push(newPlanFijo);      
    });
  }

  //addToCart
  //Añade un planFijo al carrito
  addToCart(planFijo:PlanFijo){
    console.log(planFijo);

    alert("");

  }

}
