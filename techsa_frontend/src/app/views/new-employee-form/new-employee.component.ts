import { Component, OnInit } from '@angular/core';
//Importar estos modulos, además hay que hacer un import de ReactiveFormsModule en app.module.ts
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  //Crear el form group, que Basicamente es un controlador
  newEmployeeForm: FormGroup

  //Importar el FormBuilder para construir el modelito.
  constructor( private builder:FormBuilder , private base:UsersService ) { 
    this.newEmployeeForm =  this.builder.group({
      /*Nombre del campo: tipo de datos
      [''] por defecto el campo es vacío
      Se pueden agregar comprobaciones, pero no lo hice :v
      cualquier cosa, creo que en el video está como https://youtu.be/fP0XXKAWR1E
      */
      id_laboral: [''],
      nombre: [''],
      apellido: [''],
      usuario: [''],
      cedula: [''],
      contrasenia: [''],
      fechaNacimiento: [Date],
      puesto: ['Gerente']
    })
  }
  ngOnInit(): void {
    
  }
  
  //La función que reciba el submit va a obtener un json con los datos del form
  add(values:any){
    console.log(values);
    if (values.puesto == 'Gerente'){
      this.base.agregarGerente(values)
    }
  }


}
