import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';



//import { InternetService} from '../../services/internet-service';
import { ActivatedRoute } from '@angular/router';
import { PlanInternet } from 'src/app/models/PlanInternet';
import { InternetserviceService } from '../../services/internetservice.service';


@Component({
  selector: 'app-modify-internet',
  templateUrl: './modify-internet.component.html',
  styleUrls: ['./modify-internet.component.css']
})
export class ModifyInternetComponent implements OnInit {
  
  newInternetForm: FormGroup;
  data= [{ID: ' ', NombrePlan: ' ',Descripcion: ' ',Velocidad: ' ',
  PrecioMensual: ' '}];

  constructor(
    private internetService:InternetserviceService,
    private _ac:ActivatedRoute,
    private builder:FormBuilder,
    ){ 
    this.newInternetForm =  this.builder.group({
      ID:new FormControl(),
      idServicioId:new FormControl(),
      NombrePlan:new FormControl(),
      Descripcion:new FormControl(),
      Velocidad:new FormControl(),
      PrecioMensual:new FormControl()
    });
  }

  ngOnInit(): void {
    this._ac.paramMap.subscribe(async param =>{
      const id =param.get('ID');
      console.log("Id a modificar",id);
      this.data = await this.internetService.getPlanInternet_idInternet(id);
      console.log(this.data);
      this.newInternetForm.setValue(this.data[0]);
    })
  }
  
  async modify(values){
    console.log("Vamos a modificar Dipositivo componente")
    var plan = new PlanInternet();
    plan = this.setPlan(plan,values);
    await this.internetService.updatePlanInternet(values.ID,plan);
  }
  
  setPlan(plan:PlanInternet,values:any):PlanInternet {
    plan.NombrePlan= values.NombrePlan;
    plan.Descripcion=values.Descripcion;
    plan.Velocidad=values.Velocidad;
    plan.PrecioMensual=values.PrecioMensual;
    return plan;
  }

}
