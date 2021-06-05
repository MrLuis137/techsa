import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { DeviceService } from '../../services/device.service';
import { Dispositivo } from '../../models/Dispositivo'
@Component({
  selector: 'app-new-device-form',
  templateUrl: './new-device-form.component.html',
  styleUrls: ['./new-device-form.component.css']
})
export class NewDeviceFormComponent implements OnInit {
  newDeviceForm: FormGroup
  constructor(
    private builder:FormBuilder,
    private deviceService:DeviceService
    ) { 
    this.newDeviceForm =  this.builder.group({
      Modelo: [''],
      Marca: [''],
      Camara:[''],
      Color:[''],
      Ram: [''],
      Almacenamiento: [''],
      Precio: [''],
      Cantidad: [''],
      Imagen: ['']
    })

  }
  
  ngOnInit(): void {
  }
  async add(values){
    var device = new Dispositivo;
    device.Modelo =values.Modelo;
    device.Marca =values.Marca;
    device.Camara=values.Camara;
    device.Color=values.Color;
    device.Ram=values.Ram;
    device.Almacenamiento =values.Almacenamiento;
    device.Precio=values.Precio;
    device.Cantidad=values.Cantidad;
    device.Imagen=values.Imagen;
    await this.deviceService.createDispositivo(device)
  }
  
}
