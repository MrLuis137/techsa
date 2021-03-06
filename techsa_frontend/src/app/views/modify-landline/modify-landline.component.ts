import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


import { PlanfijoService} from '../../services/planfijo.service';
import { ActivatedRoute } from '@angular/router';
import { PlanFijo } from 'src/app/models/PlanFijo';

@Component({
  selector: 'app-modify-landline',
  templateUrl: './modify-landline.component.html',
  styleUrls: ['./modify-landline.component.css']
})
export class ModifyLandlineComponent implements OnInit {
  newLandlineForm: FormGroup
  data=[{ID:0,IdServicio:'',NombrePlan:'',PrecioMensual:1, Minutos:1, FijoTechsa:'', FijoOperador:'', MovilCualquiera:''}];
  constructor(
    private planfijoService:PlanfijoService,
    private _ac:ActivatedRoute,
    private builder:FormBuilder,
    ){ 
    this.newLandlineForm =  this.builder.group({
      ID:new FormControl(),
      NombrePlan:new FormControl(),
      PrecioMensual:new FormControl(),
      Minutos:new FormControl(),
      FijoTechsa:new FormControl(),
      FijoOperador:new FormControl(),
      MovilCualquiera:new FormControl(),
      idServicioId:new FormControl()
    });
  }

  ngOnInit():  void {
     this.loadData();
  }

  async loadData(){
    this._ac.paramMap.subscribe(async param =>{
      const id =param.get('ID');
      console.log("Id a modificar",id);
      this.data = await this.planfijoService.getPlanFijobyId(id);
      console.log("data", this.data[0]);
      this.newLandlineForm.setValue(this.data[0]);
    })
  }

  

  
  async modify(values){
    if(confirm("¿Desea realizar los cambios?")){
      console.log("Vamos a modificar Dipositivo componente")
      var plan = new PlanFijo();
      plan = this.setPlan(plan,values);
      try {
        await this.planfijoService.updatePlanFijo(values.ID,plan);
        alert("Producto Modificado");
        
      } catch (err) {
        alert("Error al  Modificar producto, puede estar ligado a otros servicios");
      }
    }
  }
  
  setPlan(plan:PlanFijo,values:any):PlanFijo {
    console.log("VALORES DEL BACKEND");
    console.log(values);
    plan.ID=values.ID;
    plan.NombrePlan= values.NombrePlan;
    plan.PrecioMensual=values.PrecioMensual;
    plan.Minutos=values.Minutos;
    plan.FijoTechsa=values.FijoTechsa
    plan.FijoOperador=values.FijoOperador;
    plan.MovilCualquiera=values.MovilCualquiera;
    plan.IdServicio = values.idServicioId;
    return plan;
  }

}
