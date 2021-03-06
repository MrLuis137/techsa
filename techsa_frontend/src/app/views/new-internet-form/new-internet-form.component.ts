import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { PlanInternet } from 'src/app/models/PlanInternet';
import { InternetserviceService } from '../../services/internetservice.service';


@Component({
  selector: 'app-new-internet-form',
  templateUrl: './new-internet-form.component.html',
  styleUrls: ['./new-internet-form.component.css']
})
export class NewInternetFormComponent implements OnInit {

  newinternet: FormGroup;
  constructor(private builder:FormBuilder, private internetService: InternetserviceService ) { 
    this.newinternet =  this.builder.group({
      NombrePlan: [''],
      Descripcion: [''],
      Velocidad: [''],
      PrecioMensual: ['']
    });
  }

  
  ngOnInit(): void {
  }
  async add(values){
    var plan= new PlanInternet;
    plan.NombrePlan= values.NombrePlan;
    plan.Descripcion=values.Descripcion;
    plan.Velocidad=values.Velocidad;
    plan.PrecioMensual=values.PrecioMensual;
    console.log(values);
    try {
      await this.internetService.createPlanInternet(plan);
      alert("Plan Internet nuevo guardado");
    } catch (err) {
      alert("Error al guardar el nuevo plan Internet.");
    }
    
  }
}
