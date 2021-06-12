import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GerenteService } from 'src/app/services/gerente.service';
import { AgenteVentasService } from 'src/app/services/agente-ventas.service';
import { AgenteVentas } from '../../models/AgenteVentas';
import { Gerente } from '../../models/Gerente';


@Component({
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.css']
})
export class ModifyEmployeeComponent implements OnInit {
  modifyEmployeeForm: FormGroup;
  data= [{Id_laboral: -1,Nombre: '',Usuario: '',Cedula: -1,
  FechaNacimiento: '',Puesto: '',Contrasenia: ''}];

  constructor(
    private builder : FormBuilder, 
    private _ac : ActivatedRoute,
    private gerenteService : GerenteService,
    private agenteVentasService : AgenteVentasService
    ) { 
    this.modifyEmployeeForm =  this.builder.group({
        Id_laboral:new FormControl(),
        Nombre: new FormControl(),
        Cedula: new FormControl(),
       FechaNacimiento: new FormControl(),
       Puesto:new FormControl(),
       Contrasenia: new FormControl()
    });
    
  }

   async ngOnInit() {
    this._ac.paramMap.subscribe(async param =>{
      const id =param.get('id');
      try {
        this.data = await this.gerenteService.getGerentebyId(id);
      } catch (err) {
        alert("Error al cargar los datos. \n Intente recargar la página.");
      }
      if (this.data == null){
        try {
          this.data = await this.agenteVentasService.getAgenteVentasbyId(id);
        } catch (err) {
          alert("Error al cargar los datos. \n Intente recargar la página.");
        }
      }
      console.log("ngOnInit",this.data)
      this.modifyEmployeeForm.setValue(this.data); 
      console.log("form",this.modifyEmployeeForm.value) 
    })
  }
  
    
  async modify(values){
    var empleado:any;
    if(confirm("¿Desea Modificar el Empleado?")){

      if (values.Puesto == 'Gerente'){
        console.log("Vamos a modificar Gerente componente")
        empleado = new Gerente();
        empleado = this.setEmployee(empleado,values)
        try {
          await this.gerenteService.updateGerente(values.Id_laboral,empleado);
          alert("Empleado modificado");
        } catch (err) {
          alert("Error al modificar el empleado");
        }
      }

      else{
        console.log("Vamos a modificar Agente de ventas componente")
        empleado = new AgenteVentas();
        empleado = this.setEmployee(empleado,values)
        try {
          await this.agenteVentasService.createAgenteVentas(empleado);
          alert("Empleado modificado");
        } catch (err) {
          alert("Error al modificar el empleado");

        }
      }
    }
  }
  setEmployee(empleado:any,values:any):any {
    empleado.Nombre = values.Nombre;
    empleado.Cedula = values.Cedula;
    empleado.FechaNacimiento = new Date(values.FechaNacimiento);
    empleado.Puesto = values.Puesto;
    empleado.Usuario = values.Usuario;
    empleado.Id_laboral = values.Id_laboral;
    empleado.Contrasenia = values.Contrasenia;
    return empleado
  }

}
