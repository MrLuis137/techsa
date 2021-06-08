import { Component, OnInit } from '@angular/core';
import {InternetService } from '../../services/internet-service';


@Component({
  selector: 'app-internet-managment',
  templateUrl: './internet-managment.component.html',
  styleUrls: ['./internet-managment.component.css']
})
export class InternetManagmentComponent implements OnInit {
  planes = []

  constructor( 
    private internetService:InternetService,
    ) { }

  async ngOnInit() {
    this.planes = await this.internetService.getPlanInternetAll();
    console.log(this.planes);
  }

  async delete (ID:string,NombrePlan:String){
    console.log("Eliminando empleado: ",ID,NombrePlan)
    await this.internetService.deletePlanInternet(ID)
  
  }

}
