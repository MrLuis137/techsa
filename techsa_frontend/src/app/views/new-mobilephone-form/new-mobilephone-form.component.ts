import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { PlanMovil } from '../../models/PlanMovil';
//import { PlanMovilService } from '../../services/plan-movil.service';
import { MovileTelephonyService } from '../../services/moviletelephony.service';



@Component({
  selector: 'app-new-MobilePhone-form',
  templateUrl: './new-MobilePhone-form.component.html',
  styleUrls: ['./new-MobilePhone-form.component.css']
})
export class NewMobilePhoneFormComponent implements OnInit {

  newMobilePhone: FormGroup;
  constructor(private builder:FormBuilder, private planMovilService: MovileTelephonyService  ) { 
    this.newMobilePhone =  this.builder.group({
      NombrePlan: [''],
      Descripcion: [''],
      PrecioMensual: [''],
      Minutos: [''],
      GBInternet: [''],
      CostoLlamada: [''],
      TipoPlan: ['']
    })
  }

  ngOnInit(): void {
  }
  async add(values){
    var plan = new PlanMovil;
    plan.NombrePlan= values.NombrePlan;
    plan.Descripcion=values.Descripcion;
    plan.PrecioMensual=values.PrecioMensual;
    plan.Minutos=values.Minutos
    plan.GBInternet=values.GBInternet;
    plan.CostoLlamada=values.CostoLlamada;
    plan.TipoPlan=values.TipoPlan;
    console.log(values);
    await this.planMovilService.createPlanMovil(plan);
  
  }
}
