import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-device-form',
  templateUrl: './new-device-form.component.html',
  styleUrls: ['./new-device-form.component.css']
})
export class NewDeviceFormComponent implements OnInit {
  newDeviceForm: FormGroup
  constructor(private builder:FormBuilder) { 
    this.newDeviceForm =  this.builder.group({
      Modelo: [''],
      Marca: [''],
      Ram: [''],
      Almacenamiento: [''],
      Precio: [''],
      Cantidad: [''],
      Imagen: ['']
    })

  }
  
  ngOnInit(): void {
  }
  add(values){
    console.log(values)
  }
  
}
