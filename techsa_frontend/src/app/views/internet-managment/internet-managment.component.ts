import { Component, OnInit } from '@angular/core';
//import {InternetService } from '../../services/internet-service';
import { InternetserviceService } from '../../services/internetservice.service';




@Component({
  selector: 'app-internet-managment',
  templateUrl: './internet-managment.component.html',
  styleUrls: ['./internet-managment.component.css']
})
export class InternetManagmentComponent implements OnInit {
  planes = []

  constructor( 
    private internetService:InternetserviceService,
    ) { }

  async ngOnInit() {
    try {
      this.planes = await this.internetService.getPlanInternetAll();
    } catch (err) {
      alert("Error al cargar los datos. \n Intente recargar la página.");
    }
    console.log(this.planes);
  }

  async delete (ID:string,NombrePlan:String){
    if(confirm("¿Eliminar este producto?")){
      console.log("Eliminando Plan de Internet: ",ID,NombrePlan)
      try {
        await this.internetService.deletePlanInternet(ID)
        alert("Plan de Internet Eliminado");  
      } catch (err) {
        alert("Error eliminando este plan. \n Puede estar asociado a otros planes");
      }
    }
  }

}
