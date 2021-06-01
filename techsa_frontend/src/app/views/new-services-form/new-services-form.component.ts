import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { NotificationsService} from 'angular2-notifications'
import { HttpClient } from '@angular/common/http';
import { PlanMovil } from '../../models/PlanMovil';


@Component({
  selector: 'app-new-services-form',
  templateUrl: './new-services-form.component.html',
  styleUrls: ['./new-services-form.component.css']
})
export class NewServicesFormComponent implements OnInit {

  newMovilPlan: FormGroup;
  errorMessage: any;

  constructor(private service:NotificationsService, private builder:FormBuilder, private http: HttpClient  ) { 
    this.newMovilPlan =  this.builder.group({
      TipoPlan: [''],
      NombrePlan: [''],
      Descripción: [''],
      PrecioMensual: [Number],
      PrecioLlamadas: [Number]
    })
  }

  ngOnInit(): void {
  }

  onSuccesMovil(values){
    this.http.put<PlanMovil>('http://localhost:3306/planmovil',values).subscribe({
      next: data => {
          console.log(data);
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  })
  }

}
