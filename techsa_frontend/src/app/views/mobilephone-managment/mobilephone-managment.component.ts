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
    this.planes = await this.planMovilService.getPlanMovilAll();
    console.log(this.planes);
  }

  async delete (ID:string,NombrePlan:String){
    console.log("Eliminando plan movil: ",ID,NombrePlan)
    await this.planMovilService.deletePlanMovil(ID)
  }

}
