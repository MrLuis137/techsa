import { Component, OnInit } from '@angular/core';
import { AgenteVentasService } from '../../services/agente-ventas.service';
import { GerenteService } from '../../services/gerente.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-eployees-managment',
  templateUrl: './eployees-managment.component.html',
  styleUrls: ['./eployees-managment.component.css']
})
export class EployeesManagmentComponent implements OnInit {

  employees = []

  constructor( 
    private agenteVentasService:AgenteVentasService,
    private gerenteService: GerenteService,
    private auth:AuthService
    ) { }

  async ngOnInit() {
    try {
      this.employees = await this.agenteVentasService.getAgenteVentasAll();
      this.employees=this.employees.concat(await this.gerenteService.getGerenteAll());
    } catch (err) {
      alert("Error al cargar la lista de empleados.\n Intentelo de nuevo.");
    }
    
    console.log(this.employees);
  }

  async delete (employeeID:string,employeePuesto:String){
    console.log("Eliminando empleado: ",employeeID,employeePuesto)

    const token = localStorage.getItem('access_token');
    const id = await this.auth.getUserId(token);
    if( employeeID ==  id.slice(10,14)){
      alert("Usted se encuentra logueado en este momento. \n No se puede eliminar su cuenta");
    }else{
      if( confirm("¿Desea eliminar esta cuenta?") ){
        if (employeePuesto == 'Gerente'){
          try {
            await this.gerenteService.deleteGerente(employeeID)
            alert("El gerente fue eliminado.");
            location.reload();
          } catch (err) {
            alert("El gerente no pudo ser eliminado.\ Intente Nuevamente");
          }
        }else{
          try {
            await this.agenteVentasService.deleteAgenteVentas(employeeID);
            alert("El Agente de Ventas fue eliminado.");
            location.reload();
          } catch (err) {
            alert("El Agente de Ventas no pudo ser eliminado.\ Intente Nuevamente");
          }
        }
      }
    }
  }
}
