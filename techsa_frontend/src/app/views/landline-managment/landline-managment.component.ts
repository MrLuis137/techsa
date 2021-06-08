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
    this.planes = await this.planFijoService.getPlanFijoAll();
    console.log(this.planes);
  }

  async delete (ID:string,NombrePlan:String){
    console.log("Eliminando empleado: ",ID,NombrePlan)
    await this.planFijoService.deletePlanFijo(ID)
  
  }

}
