import { Component, OnInit } from '@angular/core';
//Importar estos modulos, además hay que hacer un import de ReactiveFormsModule en app.module.ts
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { NotificationsService} from 'angular2-notifications'

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  //Crear el form group, que Basicamente es un controlador
  newEmployeeForm: FormGroup

  //Importar el FormBuilder para construir el modelito.
  constructor(private service:NotificationsService, private builder:FormBuilder  ) { 
    this.newEmployeeForm =  this.builder.group({
      /*Nombre del campo: tipo de datos
      [''] por defecto el campo es vacío
      Se pueden agregar comprobaciones, pero no lo hice :v
      cualquier cosa, creo que en el video está como https://youtu.be/fP0XXKAWR1E
      */
      nombre: [''],
      apellido: [''],
      usuario: [''],
      id_laboral: [''],
      cedula: [''],
      contrasenia: [''],
      correo:[''],
      residencia:[''],
      //Tipo de datos para el datePiker (No se si así se llama xD)
      fechaNacimiento: [Date],
      puesto: ['Administrador']
    })
  }
  ngOnInit(): void {
    
  }
  
  //La función que reciba el submit va a obtener un json con los datos del form
  add(values){
    console.log(values)
    this.onSuccess("Agregado")
  }

  onSuccess(mesagge:String){
    this.service.success(
      'Success',
      mesagge, 
      {
      position: ['bottom','right'],
      animate: 'fade',
      showProgressBar:true
      }
    )
  }

}
