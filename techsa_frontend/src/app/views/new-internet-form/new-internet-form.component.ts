import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { NotificationsService} from 'angular2-notifications'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-internet-form',
  templateUrl: './new-internet-form.component.html',
  styleUrls: ['./new-internet-form.component.css']
})
export class NewInternetFormComponent implements OnInit {

  newinternet: FormGroup;
  errorMessage: any;

  constructor(private service:NotificationsService, private builder:FormBuilder, private http: HttpClient  ) { 
    this.newinternet =  this.builder.group({
      NombrePlan: [''],
      Descripcion: [''],
      PrecioMensual: [Number],
      Velocidad: [Number],
      Tipo: ['']
    })
  }

  ngOnInit(): void {
  }
}
