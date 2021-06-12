import { Component, OnInit } from '@angular/core';
//import {PlanFijoService } from '../../services/plan-fijo.service';
import { PlanfijoService } from '../../services/planfijo.service';




@Component({
  selector: 'app-landline-managment',
  templateUrl: './landline-managment.component.html',
  styleUrls: ['./landline-managment.component.css']
})
export class LandlineManagmentComponent implements OnInit {
  planes = []

  constructor( 
    private planFijoService:PlanfijoService,
    ) { }

  async ngOnInit() {
    try {
      this.planes = await this.planFijoService.getPlanFijoAll();
    } catch (err) {
      alert("Error al cargar los datos. \n Intente recargar la página.");
    }
    console.log(this.planes);
  }

  async delete (ID:string,NombrePlan:String){
    console.log("Eliminando empleado: ",ID,NombrePlan)
    await this.planFijoService.deletePlanFijo(ID)
  
  }

}
