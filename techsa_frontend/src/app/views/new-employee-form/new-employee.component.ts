import { Component, OnInit } from '@angular/core';
//Importar estos modulos, además hay que hacer un import de ReactiveFormsModule en app.module.ts
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { NotificationsService} from 'angular2-notifications'
import { async } from '@angular/core/testing';
import { AgenteVentasService } from '../../services/agente-ventas.service';
import { AgenteVentas } from '../../models/AgenteVentas';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  //Crear el form group, que Basicamente es un controlador
  newEmployeeForm: FormGroup

  //Importar el FormBuilder para construir el modelito.
  constructor(private service:NotificationsService, private builder:FormBuilder, public agenteVentasService:AgenteVentasService  ) { 
    this.newEmployeeForm =  this.builder.group({
      /*Nombre del campo: tipo de datos
      [''] por defecto el campo es vacío
      Se pueden agregar comprobaciones, pero no lo hice :v
      cualquier cosa, creo que en el video está como https://youtu.be/fP0XXKAWR1E
      */
      id_laboral: [''],
      nombre: [''],
      usuario: [''],
      cedula: [''],
      contrasenia: [''],
      fechaNacimiento: [Date],
      puesto: ['Gerente']
    })
  }
  ngOnInit(): void {
  ////Josue
  this.refresh();
  ////Josue
    
  }

  ////Josue
  async refresh() {
    const data = await this.agenteVentasService.getAgenteVentasAll();
    console.log(data);

    const agentePrueba = new AgenteVentas();
    agentePrueba.Nombre = "carlos";
    agentePrueba.Cedula = 8000;
    agentePrueba.FechaNacimiento = new Date("2015-07-10T18:31:25.000Z");
    agentePrueba.Puesto = "AgenteVentas";
    agentePrueba.Usuario = "carlos";
    agentePrueba.Id_laboral = 3030;
    agentePrueba.Contrasenia = "12345";
    await this.agenteVentasService.createAgenteVentas(agentePrueba);

    await this.agenteVentasService.deleteAgenteVentas("2020");
  }
  ////Josue
  
  //La función que reciba el submit va a obtener un json con los datos del form
  async add(values:any){
    console.log(values);
    //console.log(await this.base.agregarEmployee(values)) 
    
  }


}
