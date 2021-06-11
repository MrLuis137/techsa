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

export class TelephonyListingComponent implements OnInit {
  telephonyListingData:PlanFijo[] = []

  constructor(public planFijoService:PlanfijoService, public router:Router) { }

  ngOnInit(): void {
    this.refresh();
    console.log(this.telephonyListingData);
  }

  async refresh(){
    const data = await this.planFijoService.getPlanFijoAll();
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

  addToCart(planFijo:PlanFijo){
    console.log(planFijo);

    alert("OMG LOOK AT HER BUTT IT IS SO BIG....");

    // if(confirm("Debes iniciar sesión para adquirir un producto! \n Ir a Login?")){
      
    //   this.router.navigate(['login']);
    // }
    //this.car.addPhone(device)
  }

}
