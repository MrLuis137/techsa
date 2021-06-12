import { Component, OnInit } from '@angular/core';
import { MovileTelephonyService } from '../../services/moviletelephony.service';


@Component({
  selector: 'app-mobilephone-managment',
  templateUrl: './mobilephone-managment.component.html',
  styleUrls: ['./mobilephone-managment.component.css']
})
export class MobilephoneManagmentComponent implements OnInit {
  planes = []

  constructor( 
    private planMovilService:MovileTelephonyService,
    ) { }

  async ngOnInit() {
    try {
      this.planes = await this.planMovilService.getPlanMovilAll();
    } catch (err) {
      alert("Error al cargar los datos. \n Intente recargar la página.");
    }
    console.log(this.planes);
  }

  async delete (ID:string,NombrePlan:String){
    if(confirm("¿Eliminar Producto?")){
      console.log("Eliminando plan movil: ",ID,NombrePlan);
      try {
        await this.planMovilService.deletePlanMovil(ID);
        alert("Producto eliminado");
        location.reload();
      } catch (err) {
        alert("No se pudo eliminar el producto, puede estar ligado a otros planes");
      }
    } 
  }
}
