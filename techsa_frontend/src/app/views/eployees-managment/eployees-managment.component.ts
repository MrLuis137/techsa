import { Component, OnInit } from '@angular/core';
import { AgenteVentasService } from '../../services/agente-ventas.service';
import { GerenteService } from '../../services/gerente.service';


@Component({
  selector: 'app-eployees-managment',
  templateUrl: './eployees-managment.component.html',
  styleUrls: ['./eployees-managment.component.css']
})
export class EployeesManagmentComponent implements OnInit {

  employees = []

  constructor( 
    private agenteVentasService:AgenteVentasService,
    private gerenteService: GerenteService
    ) { }

  async ngOnInit() {
    this.employees = await this.agenteVentasService.getAgenteVentasAll();
    this.employees=this.employees.concat(await this.gerenteService.getGerenteAll());
    console.log(this.employees);
  }

  async delete (employeeID:string,employeePuesto:String){
    console.log("Eliminando empleado: ",employeeID,employeePuesto)
    if (employeePuesto == 'Gerente'){
      await this.gerenteService.deleteGerente(employeeID)
    }else{
      await this.agenteVentasService.deleteAgenteVentas(employeeID);
    }
    
    
  }

}
