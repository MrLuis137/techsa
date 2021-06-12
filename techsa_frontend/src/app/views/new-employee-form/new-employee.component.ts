import { Component, OnInit } from '@angular/core';
import * as bcrypt from 'bcryptjs';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { NotificationsService} from 'angular2-notifications'
import { async } from '@angular/core/testing';
import { AgenteVentasService } from '../../services/agente-ventas.service';
import { AgenteVentas } from '../../models/AgenteVentas';
import { Gerente } from '../../models/Gerente';
import { GerenteService } from '../../services/gerente.service';




@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  //Crear el form group, que Basicamente es un controlador
  newEmployeeForm: FormGroup

  //Importar el FormBuilder para construir el modelito.
  constructor(
    private service:NotificationsService, 
    private builder:FormBuilder, 
    private agenteVentasService:AgenteVentasService,
    private gerenteService:GerenteService
    ) { 
    this.newEmployeeForm =  this.builder.group({
      /*Nombre del campo: tipo de datos
      [''] por defecto el campo es vacío
      Se pueden agregar comprobaciones, pero no lo hice :v
      cualquier cosa, creo que en el video está como https://youtu.be/fP0XXKAWR1E
      */
      id_laboral: new FormControl(),
      nombre:new FormControl(),
      cedula: new FormControl(),
      contrasenia:new FormControl(),
      FechaNacimiento: new FormControl(),
      puesto: ['Gerente']
    })
  }
  ngOnInit(): void {
    
  }
  
  async add(values:any){
    const salt = bcrypt.genSaltSync(10);
    values.contrasenia = bcrypt.hashSync(values.contrasenia, salt);

    var empleado:any;
    if (values.puesto == 'Gerente'){
      empleado = new Gerente();
      empleado = this.setEmployee(empleado,values)
      try {
        await this.gerenteService.createGerente(empleado);
        alert("Gerente nuevo guardado");
      } catch (err) {
        alert("Error al guardar el nuevo Gerente.");
      }
    }
    else{
      empleado = new AgenteVentas();
      empleado = this.setEmployee(empleado,values)
      try {
        await this.agenteVentasService.createAgenteVentas(empleado);
        alert("Gerente nuevo guardado");
      } catch (err) {
        alert("Error al guardar el nuevo Gerente.");
      }
    }
    
    
    
  }
  setEmployee(empleado:any,values:any):any {
    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(values.contrasenia, salt);

    empleado.Nombre = values.nombre;
    empleado.Cedula = values.cedula;
    empleado.FechaNacimiento = new Date(values.FechaNacimiento);
    empleado.Puesto = values.puesto;
    empleado.Usuario = values.usuario;
    empleado.Id_laboral = values.id_laboral;
    empleado.Contrasenia = pass;
    return empleado
  }

}
