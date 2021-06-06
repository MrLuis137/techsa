import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { PlanFijo } from '../../models/PlanFijo';
import { PlanfijoService } from '../../services/planfijo.service';

@Component({
  selector: 'app-new-landline-form',
  templateUrl: './new-landline-form.component.html',
  styleUrls: ['./new-landline-form.component.css']
})
export class NewlandlineFormComponent implements OnInit {
  
  newlandline: FormGroup;
  constructor(private builder:FormBuilder, private planFijoService: PlanfijoService ) { 
    this.newlandline =  this.builder.group({
      NombrePlan: [''],
      PrecioMensual: [''],
      Minutos: [''],
      TarifaAdicFijoTechsa: [''],
      TarifaAdicFijoOtroOperador: [''],
      TarifaAdicmovil: ['']
    })
  }

  
  ngOnInit(): void {
  }
  async add(values){
    var plan= new PlanFijo;
    plan.NombrePlan= values.NombrePlan;
    plan.PrecioMensual=values.PrecioMensual;
    plan.Minutos=values.Minutos;
    plan.FijoTechsa=values.FijoTechsa
    plan.FijoOperador=values.FijoOperador;
    plan.MovilCualquiera=values.MovilCualquiera;
    console.log(values)
    await this.planFijoService.createPlanFijo(plan)
    
  }

}
