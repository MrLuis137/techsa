import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';



import { DeviceService} from '../../services/device.service';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from 'src/app/models/Dispositivo';

@Component({
  selector: 'app-modify-device',
  templateUrl: './modify-device.component.html',
  styleUrls: ['./modify-device.component.css']
})
export class ModifyDeviceComponent implements OnInit {
  newDeviceForm: FormGroup
  data=[]
  constructor(
    private deviceService:DeviceService,
    private _ac:ActivatedRoute,
    private builder:FormBuilder,
    ){ 
    this.newDeviceForm =  this.builder.group({
      Id:[''],
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
    this._ac.paramMap.subscribe(async param =>{
      const id =param.get('id');
      console.log("Id a modificar",id)
      try {
        this.data = await this.deviceService.getDispositivobyId(id)
      } catch (err) {
        alert("Error al cargar los datos. \n Intente recargar la página.");
      }
      this.newDeviceForm.setValue(this.data)
    })
  }

  async modify(values){

    if(confirm("¿Desea Modificar el Dispositivo?")){
      console.log("Vamos a modificar Dipositivo componente")
      var device = new Dispositivo();
      device = this.setDevice(device,values)
      console.log(values)
      try {
        await this.deviceService.updateDispositivo(values.Id,device);
        alert("Dispositivo Modificado.");
      } catch (err) {
        alert("Error al modificar dispositivo.");
      }
    }

    
  }
  
  setDevice(device:Dispositivo,values:any):Dispositivo {
    device.Modelo = values.Modelo;
    device.Marca = values.Marca;
    device.Camara = values.Camara;
    device.Color = values.Color;
    device.Ram = values.Ram;
    device.Almacenamiento = values.Almacenamiento;
    device.Precio = values.Precio;
    device.Cantidad = values.Cantidad;
    device.Imagen = values.Imagen;
    return device
  }

}
