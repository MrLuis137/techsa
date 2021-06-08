import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


import { ActivatedRoute } from '@angular/router';
import { PlanMovil } from 'src/app/models/PlanMovil';
import { MovileTelephonyService } from '../../services/moviletelephony.service';

@Component({
  selector: 'app-modify-mobilephone',
  templateUrl: './modify-mobilephone.component.html',
  styleUrls: ['./modify-mobilephone.component.css']
})
export class ModifyMobilePhoneComponent implements OnInit {
  newMobiePhoneForm: FormGroup
  data=[{ID: 0, NombrePlan:'',Descripcion:'',PrecioMensual:1, Minutos:1, GBInternet:1, CostoLlamada:1, TipoPlan:''}]
  constructor(
    private planMovilService:MovileTelephonyService,
    private _ac:ActivatedRoute,
    private builder:FormBuilder,
    ){ 
    this.newMobiePhoneForm =  this.builder.group({
      ID:new FormControl(),
      NombrePlan:new FormControl(),
      Descripcion:new FormControl(),
      PrecioMensual:new FormControl(),
      Minutos:new FormControl(),
      GBInternet:new FormControl(),
      CostoLlamada:new FormControl(),
      TipoPlan:new FormControl()
    })
  }

  ngOnInit(): void {
    this._ac.paramMap.subscribe(async param =>{
      const id =param.get('ID');
      console.log("Id a modificar",id);
      this.data = await this.planMovilService.getPlanMovilById(id);
      this.newMobiePhoneForm.setValue(this.data);
    });
  }
  async modify(values){
    console.log("Vamos a modificar Dipositivo componente")
    var plan = new PlanMovil();
    plan = this.setPlan(plan,values)
    await this.planMovilService.updatePlanMovil(values.ID,plan);
  }
  
  setPlan(plan:PlanMovil,values:any):PlanMovil {
    plan.NombrePlan= values.NombrePlan;
    plan.Descripcion=values.Descripcion;
    plan.PrecioMensual=values.PrecioMensual;
    plan.Minutos=values.Minutos
    plan.GBInternet=values.GBInternet;
    plan.CostoLlamada=values.CostoLlamada;
    plan.TipoPlan=values.TipoPlan;
    return plan
  }

}
